import {AbsoluteFill, Easing, interpolate, Solid, useCurrentFrame} from 'remotion';
import {starburst} from '@remotion/effects/starburst';
import {cues} from './cues';

const ink='#223b3a',cream='#eee6d5',teal='#007e82',brass='#c89548',red='#c66049';
const clamp={extrapolateLeft:'clamp',extrapolateRight:'clamp'} as const;
export const ActivationScene: React.FC<{startFrame:number}>=({startFrame})=>{
 const f=useCurrentFrame()+startFrame;
 const at=(id:string)=>Number(cues.find(c=>c.cue===id)!.f_in);
 const out=(id:string)=>Number(cues.find(c=>c.cue===id)!.f_out);
 // Ambient stage motion. One continuous near-imperceptible move across the whole
 // movement, on top of the beat-driven camera. Turns a slide into a held shot.
 const drift=interpolate(f,[at('41'),out('51')],[1,1.015],clamp);
 const driftY=interpolate(f,[at('41'),out('51')],[0,-7],clamp);
 const broken=f>=at('48'),released=f>=at('50'),spraying=f>=at('51');
 const expansion=interpolate(f,[at('41'),at('42'),at('44')],[0,0.25,1],clamp);
 // Cue 44 contains "and the" before cue 45 begins on "glass". Start the
 // matching visual phrase on the first spoken word, preserving the cue sheet's
 // three-frame visual lead.
 const holdingBeat=at('45')-17;
 // stress now ramps across the whole 44-47 span, not 44-46, so everything it
 // drives keeps moving through cue 46 instead of pinning at 1 for 4.2s.
 const stress=interpolate(f,[at('44'),at('47')],[0,1],clamp);
 const fractureWarning=interpolate(f,[at('47'),at('48')],[0,1],clamp);
 const fracture=Math.max(0,f-at('48'));
 const drop=interpolate(f,[at('49'),at('49')+30],[0,520],{...clamp,easing:Easing.in(Easing.quad)});
 const zoom=interpolate(f,[at('41'),at('42'),at('47'),at('48'),at('49')],[1.5,1.65,1.78,1.78,1],{...clamp,easing:Easing.inOut(Easing.cubic)});
 const jet=interpolate(f,[at('50'),at('50')+6],[435,750],clamp);
 const vibration=f>=at('44')&&f<at('47')?Math.sin(f*(2.0+stress*3.5))*(1+stress*5):0;
 const kick=broken&&fracture<10?Math.sin(fracture*2)*7*(1-fracture/10):0;
 const spray=interpolate(f,[at('51'),at('51')+18],[0,1],clamp);
 const title=spraying?'One cone of spray.':released?'Thirty years.\nThen this.':f>=at('49')?'The seal lets go.':broken?'The bulb shatters.':f>=at('47')?'Until it isn’t.':f>=at('46')?'Still holding.':f>=holdingBeat?'And the glass holds.':f>=at('44')?'Nowhere to go.':f>=at('42')?'The space runs out.':'Heat goes in.';
 const subtitle=spraying?'The deflector spreads the flow.':released?'Stored pressure becomes motion.':f>=at('49')?'The opening is no longer sealed.':broken?'The glass fails from the inside.':f>=at('47')?'Failure begins at one point.':f>=at('46')?'Glass is stubborn. For a while.':f>=holdingBeat?'Every second, a little harder.':f>=at('44')?'The liquid presses against the glass.':f>=at('42')?'One bubble. Less and less room.':'The sealed liquid expands.';
 return <AbsoluteFill style={{backgroundColor:cream,color:ink,fontFamily:'Arial, sans-serif'}}>
  <div style={{position:'absolute',left:100,top:155,fontSize:25,letterSpacing:5}}>THE MECHANISM / 02</div>
  <div style={{position:'absolute',left:100,top:230,width:670,fontSize:76,fontWeight:700,lineHeight:1.08,whiteSpace:'pre-line'}}>{title}</div>
  <div style={{position:'absolute',left:105,top:430,width:190,height:7,background:teal}}/>
  <div style={{position:'absolute',left:105,top:470,width:570,fontSize:32,lineHeight:1.45}}>{subtitle}</div>
  {f>=at('43')&&f<at('44')&&<div style={{position:'absolute',left:105,top:610,fontSize:72,fontWeight:700,color:teal}}>{f<at('43')+24?'0:10':'0:20'}</div>}
  <svg viewBox="0 0 1920 1080" style={{position:'absolute',width:'100%',height:'100%'}}>
   <defs><radialGradient id="activation-heat"><stop offset="0" stopColor="#e29342" stopOpacity="0.4"/><stop offset="1" stopColor="#e29342" stopOpacity="0"/></radialGradient></defs>
   <g transform={`translate(${1250+kick} ${550+driftY}) scale(${zoom*drift}) translate(-1250 -550)`} stroke={ink} strokeWidth="7" strokeLinejoin="round">
    {!broken&&<ellipse cx="1250" cy="550" rx={85+stress*20} ry="160" fill="url(#activation-heat)" stroke="none" opacity={f>=at('47')?0.7:0.65+Math.sin(f*0.18)*0.12}/>}
    <path d="M1090 225 H1410 V325 H1090 Z" fill="#8b9b92" opacity={broken?1:0.22}/>
    <path d="M1200 280 H1300 V390 H1200 Z" fill={brass} opacity={broken?1:0.22}/>
    <path d="M1200 350 H1160 L1130 675 Q1250 755 1370 675 L1340 350 H1300" fill="none" stroke={brass} strokeWidth="30" opacity={broken?1:0.22}/>
    <path d="M1235 665 H1265 V745 H1235 Z" fill={brass} opacity={broken?1:0.22}/>
    {!broken&&<g transform={`translate(${vibration} 0)`}>
     <rect x="1219" y="435" width="62" height="230" rx="30" fill={red} stroke={teal}/>
     <path d="M1232 465 V630" stroke="#edaa87" strokeWidth="5"/>
     {/* pressure ripples migrating up the column while it is under load */}
     {f>=at('44')&&[0,1,2].map(i=><path key={`rip${i}`} d={`M1224 ${600-((f*0.55+i*38)%150)} H1276`} stroke="#edaa87" strokeWidth="3" opacity={0.5*stress} fill="none"/>)}
     {/* Cracks begin with "Until it isn't", not while the glass is holding. */}
     {f>=at('47')&&[[1243,470,'M0 0 l-9 18 l6 15 l-8 12'],[1262,520,'M0 0 l10 16 l-5 14 l9 13'],[1238,585,'M0 0 l-7 14 l8 11']].map(([cx,cy,d],i)=>
      <path key={`cr${i}`} transform={`translate(${cx} ${cy})`} d={d as string} fill="none" stroke="#fff6dd" strokeWidth="2.5" pathLength="1" strokeDasharray="1" strokeDashoffset={Math.max(0,1-fractureWarning*1.35+i*0.12)} opacity={0.85}/>)}
     {/* stress rings pulsing off the glass as load rises */}
     {f>=at('45')&&[0,1].map(i=>{const age=((f-at('45'))*0.9+i*22)%44/44;return <rect key={`sr${i}`} x={1219-age*26} y={435-age*26} width={62+age*52} height={230+age*52} rx={30+age*26} fill="none" stroke="#fff1bc" strokeWidth="2" opacity={(1-age)*0.55*stress}/>;})}
     {f>=at('44')&&<rect x="1217" y="433" width="66" height="234" rx="32" fill="none" stroke="#fff1bc" strokeWidth={2+stress*2} opacity={0.4+stress*0.5}/>}
     <ellipse cx="1250" cy="479" rx={16*(1-expansion)} ry={20*(1-expansion)} fill={cream} strokeWidth={expansion>=1?0:2}/>
     {f<at('44')&&[0,1,2].map(i=><path key={i} d={`M${1160+i*23} 630 Q${1145+i*23} 607 ${1160+i*23} 580 Q${1175+i*23} 555 ${1160+i*23} 530`} fill="none" stroke={red} strokeWidth="4" opacity={0.65} transform={`translate(0 ${-((f-at('41'))%36)/3})`}/>)}
     {f>=at('44')&&[0,1,2].map(i=><g key={i} stroke={teal} strokeWidth="4" opacity={0.5+stress*0.5}><path d={`M1250 ${520+i*45} H${1274+stress*9} l-7 -6 m7 6 l-7 6 M1250 ${520+i*45} H${1226-stress*9} l7 -6 m-7 6 l7 6`} fill="none"/></g>)}
    </g>}
    {broken&&fracture<38&&Array.from({length:12},(_,i)=>{
     const x=1230+(i%3)*20, y=450+Math.floor(i/3)*52;
     return <path key={i} d="M-7 -12 L9 -4 L3 15 Z" fill={i%2?cream:red} stroke={teal} strokeWidth="2" opacity={Math.max(0,1-fracture/38)} transform={`translate(${x+(i%2?1:-1)*Math.sqrt(fracture)*15*(1+i%3)*0.5} ${y+fracture*fracture*0.18-fracture*2}) rotate(${fracture*(i%2?8:-6)})`}/>;
    })}
    {drop<500&&<path d="M1190 395 H1310 V435 H1190 Z" fill={f>=at('49')?teal:brass} opacity={broken?1:0.25} transform={`translate(${drop*0.24} ${drop}) rotate(${drop*0.07} 1250 415)`}/>}
    {released&&<g stroke="#48aeba" fill="none"><path d={`M1250 385 V${jet}`} strokeWidth="26"/><path d={`M1250 385 V${jet}`} stroke="#c6ece7" strokeWidth="5" strokeDasharray="18 24" strokeDashoffset={-(f-at('50'))*9}/></g>}
    <path d="M1100 750 L1130 780 L1155 755 L1180 790 L1205 760 L1230 795 L1255 760 L1280 790 L1305 755 L1330 780 L1400 750 Z" fill={spraying?teal:brass} opacity={broken?1:0.22}/>
    {spraying&&<g opacity={spray}><path d="M1250 775 L940 980 Q1250 1040 1560 980 Z" fill="#48aeba" opacity="0.25" stroke="none"/>{Array.from({length:13},(_,i)=><path key={i} d={`M1250 780 L${960+i*48} ${975+Math.sin(i)*16}`} stroke={i%2?'#48aeba':'#007e82'} strokeWidth="4" strokeDasharray="15 24" strokeDashoffset={-(f-at('51'))*7} fill="none"/>)}</g>}
    {spraying&&<g stroke="none" opacity={spray}>{Array.from({length:48},(_,i)=>{
     const age=((f-at('51'))*1.5+i*7)%40/40;
     const spread=((i*17)%47/46-0.5)*620;
     return <ellipse key={i} cx={1250+spread*age} cy={780+225*age*age} rx={2+i%4} ry={4+i%5} fill={i%3?'#48aeba':'#d0eee6'} opacity={1-age*0.7}/>;
    })}</g>}
    {spraying&&f<at('51')+16&&<ellipse cx="1250" cy="775" rx={20+(f-at('51'))*9} ry={5+(f-at('51'))*2} fill="none" stroke="#48aeba" strokeWidth="6" opacity={1-(f-at('51'))/16}/>}
   </g>
  </svg>
  {broken&&fracture<9&&<Solid width={400} height={400} effects={[starburst({rays:18,colors:['#eee6d5','#e7bb61','#c66049'],rotation:fracture*3,smoothness:0.12,origin:[0.5,0.5]})]} style={{position:'absolute',left:1050,top:350,width:400,height:400,opacity:0.65*(1-fracture/9),maskImage:'radial-gradient(circle, black 0%, transparent 65%)',pointerEvents:'none'}}/>}
  <div style={{position:'absolute',bottom:70,left:105,fontSize:21,letterSpacing:2}}>SCHEMATIC · TIME EXPANDED FOR CLARITY</div>
 </AbsoluteFill>;
};
