import {AbsoluteFill, Easing, Interactive, interpolate, staticFile, useCurrentFrame} from 'remotion';
import {Audio} from '@remotion/media';
import {cues} from './cues';
const clamp={extrapolateLeft:'clamp',extrapolateRight:'clamp'} as const;

/** Cue 34: the intact Four Parts geometry, before any heat or activation. */
export const TriggerBridgeScene: React.FC=()=>{
 const frame=useCurrentFrame();
 const zoom=interpolate(frame,[0,46],[1.35,1.55],{...clamp,easing:Easing.inOut(Easing.cubic)});
 return <AbsoluteFill style={{backgroundColor:'#eee6d5',color:'#223b3a',fontFamily:'Arial, sans-serif'}}>
  <Interactive.Div name="Trigger title" style={{position:'absolute',left:100,top:240,width:650,fontSize:86,fontWeight:700,lineHeight:1.08}}>That’s the trigger.</Interactive.Div>
  <Interactive.Div name="Teal emphasis" style={{position:'absolute',left:105,top:450,height:7,backgroundColor:'#007e82',width:interpolate(frame,[0,14],[0,190],clamp)}}/>
  <Interactive.Div name="Watch it work" style={{position:'absolute',left:105,top:510,width:650,fontSize:48,lineHeight:1.2,opacity:interpolate(frame,[24,32],[0,1],clamp),translate:interpolate(frame,[24,34],['0px 12px','0px 0px'],clamp)}}>Now watch it work.</Interactive.Div>
  <svg viewBox="0 0 1920 1080" style={{position:'absolute',width:'100%',height:'100%'}}>
   <g transform={`translate(1250 550) scale(${zoom}) translate(-1250 -550)`} stroke="#223b3a" strokeWidth="7" strokeLinejoin="round">
    <g opacity="0.24">
     <path d="M1090 225 H1410 V325 H1090 Z" fill="#8b9b92"/>
     <path d="M1200 280 H1300 V390 H1200 Z" fill="#b5afa2"/>
     <path d="M1200 350 H1160 L1130 675 Q1250 755 1370 675 L1340 350 H1300" fill="none" stroke="#b5afa2" strokeWidth="30"/>
     <path d="M1200 350 H1160 L1130 675 Q1250 755 1370 675 L1340 350 H1300" fill="none" strokeWidth="5"/>
     <path d="M1190 395 H1310 V435 H1190 Z" fill="#b5afa2"/>
     <path d="M1235 665 H1265 V745 H1235 Z" fill="#c89548"/>
     <path d="M1100 750 L1130 780 L1155 755 L1180 790 L1205 760 L1230 795 L1255 760 L1280 790 L1305 755 L1330 780 L1400 750 Z" fill="#b5afa2"/>
    </g>
    <rect x="1219" y="435" width="62" height="230" rx="30" fill="#c66049" stroke="#007e82"/>
    <path d="M1232 465 V630" stroke="#edaa87" strokeWidth="5"/>
    <ellipse cx="1250" cy="479" rx="16" ry="20" fill="#eee6d5" strokeWidth="2"/>
    <rect x="1207" y="423" width="86" height="254" rx="42" fill="none" stroke="#007e82" strokeWidth="3" pathLength="1" strokeDasharray="1" strokeDashoffset={1-interpolate(frame,[0,22],[0,1],clamp)}/>
   </g>
  </svg>
 </AbsoluteFill>;
};

export const TriggerBridgeReview: React.FC=()=> <AbsoluteFill>
 <Audio src={staticFile('sprinkler-assembly/registry/vo-locked.mp3')} trimBefore={Number(cues.find(c=>c.cue==='34')!.f_in)}/>
 <TriggerBridgeScene/>
</AbsoluteFill>;
