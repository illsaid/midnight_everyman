import fs from 'node:fs';
import path from 'node:path';
import {fileURLToPath} from 'node:url';
import crypto from 'node:crypto';

export function parseCsv(text) {
  const rows = []; let row = [], value = '', quoted = false;
  for (let i = 0; i < text.length; i++) {
    const ch = text[i];
    if (ch === '"') { if (quoted && text[i + 1] === '"') {value += '"'; i++;} else quoted = !quoted; }
    else if (ch === ',' && !quoted) {row.push(value); value = '';}
    else if (ch === '\n' && !quoted) {row.push(value.replace(/\r$/, '')); rows.push(row); row = []; value = '';}
    else value += ch;
  }
  if (value || row.length) {row.push(value.replace(/\r$/, '')); rows.push(row);}
  const header = rows.shift().map(x => x.replace(/^\uFEFF/, ''));
  return rows.filter(r => r.length > 1).map(r => Object.fromEntries(header.map((key, i) => [key, r[i]])));
}
function requireCondition(condition, message) {if (!condition) throw new Error(message);}
export function compile(manifest, cues) {
  requireCondition(manifest.schemaVersion === 1, 'Unsupported manifest version');
  const byId = new Map(cues.map(c => [c.cue, c]));
  let boundary = 0;
  for (const cue of cues) {requireCondition(+cue.f_in === boundary && +cue.f_out > boundary, `Invalid timing ${cue.cue}`); boundary = +cue.f_out;}
  requireCondition(boundary === manifest.durationInFrames, 'Timeline duration mismatch');
  const mediaPath = id => { const asset = manifest.assets[id]; requireCondition(asset, `Missing asset ${id}`); return `sprinkler-assembly/registry/${id}${path.extname(asset.file)}`; };
  requireCondition(manifest.assets[manifest.voiceover]?.status === 'approved', 'Voiceover must be approved');
  const usedCues = new Set(); const placements = []; const reviewRanges = [];
  const range = ids => {
    const list = ids.map(id => {requireCondition(byId.has(id), `Unknown cue ${id}`); return byId.get(id);});
    requireCondition(list.length > 0, 'Empty placement');
    for (let i = 1; i < list.length; i++) requireCondition(+list[i].f_in === +list[i-1].f_out, 'Placement bridges noncontiguous cues');
    return {from: +list[0].f_in, duration: +list.at(-1).f_out - +list[0].f_in};
  };
  for (const scene of manifest.scenes) {
    requireCondition(scene.cues.length > 0, 'Empty scene');
    for (const id of scene.cues) {requireCondition(byId.has(id) && !usedCues.has(id), `Missing/duplicate scene cue ${id}`); usedCues.add(id);}
    const scenePlacements = [];
    for (const layer of scene.layers) {
      if (layer.kind === 'media') {
        if (layer.asset) {
          const asset = manifest.assets[layer.asset];
          requireCondition(asset?.status === 'approved' && asset.kind === 'video' && layer.status === 'approved', 'Only approved video assets may replace placeholders');
          requireCondition(asset.fps === manifest.fps, 'Source FPS must be normalized before placement');
          requireCondition(layer.placements?.length > 0, `No placement for ${scene.id}`);
          for (const [index, p] of layer.placements.entries()) {
            requireCondition(p.cues.every(c => scene.cues.includes(c)), 'Placement outside scene');
            const r = range(p.cues);
            requireCondition(Number.isInteger(p.sourceStart) && Number.isInteger(p.sourceFrames) && p.sourceStart >= 0 && p.sourceFrames > 0 && p.sourceStart + p.sourceFrames <= asset.frames, 'Source range outside asset');
            requireCondition(['trim','fit'].includes(p.retime), 'Explicit trim or fit retiming required');
            if (p.retime === 'trim') requireCondition(r.duration <= p.sourceFrames, `Clip too short for ${scene.id}; explicitly choose retiming or another source`);
            requireCondition(['cover','contain'].includes(p.crop), 'Explicit crop required');
            requireCondition(p.focalPoint?.length === 2 && p.focalPoint.every(v => Number.isFinite(v) && v >= 0 && v <= 100), 'Invalid focal point');
            scenePlacements.push({id:`${scene.id}-${layer.id}-${index}`,scene:scene.id,kind:'video',...r,src:mediaPath(layer.asset),sourceStart:p.sourceStart,playbackRate:p.retime === 'fit' ? p.sourceFrames/r.duration : 1,crop:p.crop,focalPoint:p.focalPoint,status:'approved'});
          }
        } else if (layer.anchor) {
          requireCondition(manifest.assets[layer.anchor]?.status === 'approved' && manifest.assets[layer.anchor].kind === 'image', 'Fallback anchor must be approved image');
          for (const cue of scene.cues) scenePlacements.push({id:`${scene.id}-${cue}-anchor`,scene:scene.id,kind:'image',...range([cue]),src:mediaPath(layer.anchor),status:'anchor-only'});
        }
      } else if (layer.kind === 'component' && layer.status !== 'pending') {
        requireCondition([
          'four-parts','activation','two-heads','ceiling-reveal','independence',
          'pipe','replacement','waiting-heads','movie-myth','hg04','hg05',
          'trigger-bridge','hg06','heat-not-smoke','mechanism-recap',
          'colour-code','judgement','closing',
        ].includes(layer.component), 'Unknown procedural component');
        scenePlacements.push({id:`${scene.id}-${layer.id}`,scene:scene.id,kind:'component',...range(scene.cues),component:layer.component,status:layer.status});
      } else if (layer.kind === 'overlay' && layer.status !== 'pending') {
        requireCondition(scene.layers.some(l => l.id === layer.implementedBy && l.kind === 'component' && l.status === layer.status), 'Ready overlay needs an implemented component');
      }
    }
    placements.push(...scenePlacements);
    const ordered = scene.cues.map(id => byId.get(id)).sort((a,b) => +a.f_in - +b.f_in);
    let start = +ordered[0].f_in, end = +ordered[0].f_out;
    for (const cue of ordered.slice(1)) {if (+cue.f_in === end) end = +cue.f_out; else {reviewRanges.push({scene:scene.id,from:start,to:end}); start=+cue.f_in; end=+cue.f_out;}}
    reviewRanges.push({scene:scene.id,from:start,to:end});
  }
  const sorted = [...placements].sort((a,b)=>a.from-b.from);
  for (let i=1;i<sorted.length;i++) requireCondition(sorted[i].from >= sorted[i-1].from+sorted[i-1].duration, 'Overlapping base placements');
  return {fps:manifest.fps,width:manifest.width,height:manifest.height,durationInFrames:manifest.durationInFrames,voiceover:mediaPath(manifest.voiceover),scenes:manifest.scenes.map(({id,cues,editorialStatus,layers})=>({id,cues,editorialStatus,layers:layers.map(({id,kind,status,component,implementedBy})=>({id,kind,status,component,implementedBy}))})),placements,reviewRanges};
}

export function build() {
  const repo = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
  const pilot = path.join(repo,'work/hidden-systems-pilot-01');
  const manifest = JSON.parse(fs.readFileSync(path.join(pilot,'production-manifest.json'),'utf8'));
  const cues = parseCsv(fs.readFileSync(path.join(pilot,'cues-v2.csv'),'utf8'));
  const output = compile(manifest,cues);
  const hashes = {};
  for (const [id, asset] of Object.entries(manifest.assets)) {
    const source = path.resolve(pilot,asset.file);
    requireCondition(source.startsWith(pilot+path.sep), 'Asset path outside pilot');
    requireCondition(fs.existsSync(source), `Missing file ${asset.file}`);
    for (const reference of asset.references ?? []) requireCondition(fs.existsSync(path.resolve(pilot,reference)), `Missing reference ${reference}`);
    const bytes = fs.readFileSync(source); const hash = crypto.createHash('sha256').update(bytes).digest('hex'); hashes[id]=hash;
    const dest = path.join(repo,'public/sprinkler-assembly/registry',`${id}${path.extname(source)}`);
    fs.mkdirSync(path.dirname(dest),{recursive:true});
    if (fs.existsSync(dest)) requireCondition(crypto.createHash('sha256').update(fs.readFileSync(dest)).digest('hex') === hash, `Asset changed under existing version ${id}; create a new asset version`);
    else fs.copyFileSync(source,dest);
  }
  fs.writeFileSync(path.join(repo,'src/sprinkler-pilot/production.ts'),`// Generated by scripts/production-manifest.mjs. Edit production-manifest.json.\nimport type {Production} from './production-types';\nexport const production: Production = ${JSON.stringify(output,null,2)};\n`);
  fs.writeFileSync(path.join(pilot,'production-resolved.json'),JSON.stringify({...output,assetHashes:hashes},null,2)+'\n');
  console.log(`Compiled ${manifest.scenes.length} production scenes, ${output.placements.length} placements; staged ${Object.keys(hashes).length} registered assets.`);
}
if (process.argv[1] && path.resolve(process.argv[1]) === fileURLToPath(import.meta.url)) build();
