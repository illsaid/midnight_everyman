import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import {compile,parseCsv} from './production-manifest.mjs';
const root=new URL('../work/hidden-systems-pilot-01/',import.meta.url);
const base=JSON.parse(fs.readFileSync(new URL('production-manifest.json',root),'utf8'));
const cues=parseCsv(fs.readFileSync(new URL('cues-v2.csv',root),'utf8'));
test('locked timing and persistent mechanism',()=>{
 const p=compile(base,cues); assert.equal(p.durationInFrames,6738);
 const mechanism=p.placements.find(x=>x.component==='four-parts');
 assert.equal(mechanism.from,1908); assert.equal(mechanism.duration,505);
 assert.equal(p.placements.filter(x=>x.kind==='video').length,3);
 assert.equal(p.placements.filter(x=>x.kind==='image').length,0);
});
test('provisional scene approvals preserve scope and timing',()=>{
 const p=compile(base,cues);
 for(const id of ['ceiling-reveal','independence','pipe']) {
  assert.equal(p.placements.find(x=>x.component===id).status,'approved');
  assert.match(base.scenes.find(x=>x.id===id).approval.scope,/for now/);
 }
});
test('M10 and M11 fill locked contiguous ranges without moving closing',()=>{
 const p=compile(base,cues);
 assert.deepEqual(p.placements.filter(x=>['replacement','waiting-heads'].includes(x.component)).map(x=>[x.from,x.duration,x.status]),[[5327,733,'approved'],[6060,462,'approved']]);
 assert.equal(p.placements.find(x=>x.scene==='HG-12').from,6522);
});
test('delivery replacement is data-only',()=>{
 const m=structuredClone(base),layer=m.scenes.find(s=>s.id==='HG-02').layers.find(l=>l.kind==='media');
 layer.asset='cinema-v1'; layer.status='approved';
 layer.placements=[{cues:['02'],sourceStart:0,sourceFrames:120,retime:'fit',crop:'cover',focalPoint:[50,50]}];
 assert.equal(compile(m,cues).placements.find(p=>p.scene==='HG-02').kind,'video');
});
test('approved two-head payoff follows activation with no timing gap',()=>{
 const p=compile(base,cues).placements.find(p=>p.component==='two-heads');
 assert.equal(p.from,3504);assert.equal(p.duration,337);assert.equal(p.status,'approved');
});
test('activation is one persistent scene over cues 41 through 51',()=>{
 const p=compile(base,cues).placements.find(p=>p.component==='activation');
 assert.equal(p.from,2792);assert.equal(p.duration,712);assert.equal(p.status,'approved');
});
test('opening source timing is preserved',()=>{
 const videos=compile(base,cues).placements.filter(p=>p.kind==='video'&&!['HG-02','HG-03'].includes(p.scene));
 assert.deepEqual(videos.map(p=>[p.from,p.duration,p.sourceStart,p.playbackRate]),[[0,50,0,1]]);
});
test('final integration has continuous visual coverage',()=>{
 const placements=compile(base,cues).placements.toSorted((a,b)=>a.from-b.from);
 assert.equal(placements[0].from,0);
 for(let i=1;i<placements.length;i++) assert.equal(placements[i].from,placements[i-1].from+placements[i-1].duration);
 assert.equal(placements.at(-1).from+placements.at(-1).duration,6738);
});
test('reject unapproved source',()=>{
 const m=structuredClone(base);m.assets['cinema-v1'].status='pending';
 assert.throws(()=>compile(m,cues),/Only approved/);
});
test('approved opening fills locked cues without a cut inside deluge',()=>{
 const opening=compile(base,cues).placements.filter(p=>['HG-02','HG-03'].includes(p.scene));
 assert.deepEqual(opening.map(p=>[p.from,p.duration,p.sourceStart,p.playbackRate]),[[50,58,0,1],[108,265,0,241/265]]);
});
test('reject source overrun and implicit freeze',()=>{
 const m=structuredClone(base),p=m.scenes.find(s=>s.id==='HG-01').layers[0].placements[0];
 p.sourceStart=9999;assert.throws(()=>compile(m,cues),/Source range/);
 p.sourceStart=0;p.sourceFrames=1;assert.throws(()=>compile(m,cues),/Clip too short/);
});
test('reject duplicate cue ownership',()=>{
 const m=structuredClone(base);m.scenes.find(s=>s.id==='HG-02').cues=['01'];
 assert.throws(()=>compile(m,cues),/duplicate scene cue/);
});
