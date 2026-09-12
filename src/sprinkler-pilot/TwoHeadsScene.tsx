import {AbsoluteFill, Img, interpolate, staticFile, useCurrentFrame} from 'remotion';
import {cues} from './cues';
const ink='#223b3a',cream='#eee6d5',teal='#007e82',red='#c66049',gold='#c89548';
const clamp={extrapolateLeft:'clamp',extrapolateRight:'clamp'} as const;
export const TwoHeadsScene: React.FC<{startFrame:number}>=({startFrame})=>{
 const f=useCurrentFrame()+startFrame;
 const at=(id:string)=>Number(cues.find(c=>c.cue===id)!.f_in);
 const controlled=f>=at('53'),neighbor=f>=at('54'),arrival=f>=at('56');
 const cool=interpolate(f,[at('53'),at('54')+45],[0,1],clamp);
 // Ambient stage motion. This scene had no camera at all - the whole stage was
 // pinned for 14s. One continuous near-imperceptible move fixes that.
 const drift=interpolate(f,[at('52'),Number(cues.find(c=>c.cue==='56')!.f_out)],[1,1.015],clamp);
 const driftY=interpolate(f,[at('52'),Number(cues.find(c=>c.cue==='56')!.f_out)],[0,-7],clamp);
 const fireScale=interpolate(f,[at('52'),at('53'),at('54')+45],[0.75,1,0.16],clamp);
 const brigadeOpacity=interpolate(f,[at('56'),at('56')+8],[0,1],clamp);
 const brigadeX=interpolate(f,[at('56'),at('56')+12,at('56')+18],[170,-10,0],clamp);
 const brigadeScale=interpolate(f,[at('56'),at('56')+12,at('56')+18],[0.96,1.02,1],clamp);
 const neighborDetailOpacity=interpolate(f,[at('56')-6,at('56')+6],[1,0],clamp);
 return <AbsoluteFill style={{backgroundColor:cream,color:ink,fontFamily:'Arial, sans-serif'}}>
  <div style={{position:'absolute',left:100,top:140,fontSize:25,letterSpacing:5}}>THE PAYOFF / LOCAL HEAT. LOCAL RESPONSE.</div>
  <div style={{position:'absolute',left:100,top:195,fontSize:64,fontWeight:700}}>{neighbor?'The other head does nothing.':controlled?'The fire stops growing.':'A growing fire. A local response.'}</div>
  <svg viewBox="0 0 1920 1080" style={{position:'absolute',width:'100%',height:'100%'}}>
   <defs><radialGradient id="local-heat"><stop offset="0" stopColor={red} stopOpacity="0.5"/><stop offset="1" stopColor={red} stopOpacity="0"/></radialGradient></defs>
   <g transform={`translate(960 ${540+driftY}) scale(${drift}) translate(-960 -540)`}>
   <path d="M180 360 H1740 M180 880 H1740" stroke={ink} strokeWidth="5" fill="none"/>
   <ellipse cx="580" cy="470" rx={380-cool*200} ry="165" fill="url(#local-heat)" opacity={1-cool*0.9}/>
   <path d="M580 560 L270 880 H890 Z" fill="#48aeba" opacity="0.16"/>
   {Array.from({length:42},(_,i)=>{
    const age=((f-at('52'))*1.6+i*13)%60/60;
    return <ellipse key={i} cx={580+(((i*19)%41)/40-0.5)*600*age} cy={560+320*age} rx={2+i%3} ry={6+i%5} fill={i%3?teal:'#72c4cd'} opacity={0.7}/>;
   })}
   <ellipse cx="580" cy="879" rx={270+cool*35} ry="14" fill="#48aeba" opacity="0.4"/>
   <g transform={`translate(580 841) scale(${fireScale})`}>
    <path d="M-65 0 Q-110 -75 -30 -150 Q-35 -100 0 -185 Q70 -125 40 -90 Q110 -100 70 0 Z" fill={red}/>
    <path d="M-28 0 Q-45 -52 0 -95 Q0 -45 30 -60 Q55 -20 25 0 Z" fill="#edbd5d"/>
   </g>
   <path d="M525 825 H635 L623 880 H537 Z" fill="#8b9b92" stroke={ink} strokeWidth="4"/>
   {[580,1360].map((x,i)=><g key={x} transform={`translate(${x} 360)`} stroke={ink} strokeWidth="5" strokeLinejoin="round">
    <path d="M-35 0 H35 V40 H-35 Z" fill={gold}/>
    <path d="M-35 25 H-70 L-80 150 Q0 195 80 150 L70 25 H35" stroke={gold} strokeWidth="15" fill="none"/>
    {i===1&&<><path d="M-39 42 H39 V60 H-39 Z" fill={gold}/><rect x="-14" y="60" width="28" height="85" rx="13" fill={red}/><ellipse cx="0" cy="78" rx="6" ry="8" fill={cream} strokeWidth="1"/></>}
    {i===0&&<path d="M0 40 V185" stroke="#48aeba" strokeWidth="16"/>}
    <path d="M-6 147 H6 V187 H-6 Z" fill={gold}/>
    <path d="M-95 188 L-65 210 L-35 191 L0 213 L35 191 L65 210 L95 188 Z" fill={i===0?teal:gold}/>
   </g>)}
   {neighbor&&<g opacity={interpolate(f,[at('54'),at('54')+12],[0,1],clamp)}><path d="M640 320 H1300 M640 310 V330 M1300 310 V330" fill="none" stroke={ink} strokeWidth="2"/><rect x="903" y="298" width="134" height="42" fill={cream}/><text x="970" y="329" textAnchor="middle" fontSize="29" fill={ink}>2 metres</text><path d="M1390 440 L1510 405 H1680" fill="none" stroke={teal} strokeWidth="3"/><text x="1510" y="393" fill={teal} fontSize="27">BULB INTACT</text></g>}
   </g>
  </svg>
  <div style={{position:'absolute',top:605,left:1010,width:700,textAlign:'center',fontSize:42,fontWeight:700,color:teal}}>{neighbor?'SEALED · DRY':'COOL AIR'}</div>
  <div style={{position:'absolute',top:668,left:1050,width:620,textAlign:'center',fontSize:29,opacity:neighborDetailOpacity}}>No heat trigger. No release.</div>
  <div style={{position:'absolute',left:300,top:925,width:560,textAlign:'center',fontSize:31,fontWeight:700,color:teal}}>{controlled?'SPRAYING · FIRE CONTROLLED':'SPRAYING'}</div>
  {arrival&&<Img
   src={staticFile('sprinkler-assembly/registry/fire-brigade-group-v1.png')}
   style={{
    position:'absolute',
    left:1135,
    top:680,
    width:440,
    height:'auto',
    opacity:brigadeOpacity,
    transform:`translateX(${brigadeX}px) scaleX(-1) scale(${brigadeScale})`,
    transformOrigin:'bottom center',
    filter:'drop-shadow(0 12px 10px rgba(34,59,58,0.22))',
   }}
  />}
  <div style={{position:'absolute',left:100,bottom:45,fontSize:19,letterSpacing:2}}>SCHEMATIC · DISTANCE AND TIME SIMPLIFIED</div>
 </AbsoluteFill>;
};
