import {Audio} from '@remotion/media';
import {AbsoluteFill, staticFile, useCurrentFrame} from 'remotion';
import {FourPartsScene} from './FourPartsScene';
import {production} from './production';

export const TEXTURE_PROTOTYPE_START = 2032;
export const TEXTURE_PROTOTYPE_DURATION = 240;

const TextureSurface: React.FC = () => {
  const frame = useCurrentFrame();
  const heldFrame = Math.floor(frame / 2);
  const driftX = (heldFrame * 0.65) % 19;
  const driftY = (heldFrame * 0.4) % 23;

  return (
    <AbsoluteFill style={{pointerEvents: 'none', zIndex: 20}}>
      <AbsoluteFill
        style={{
          backgroundImage: [
            'radial-gradient(circle, rgba(34,59,58,0.25) 0 0.7px, transparent 0.9px)',
            'radial-gradient(circle, rgba(255,255,255,0.55) 0 0.55px, transparent 0.8px)',
          ].join(','),
          backgroundPosition: `${driftX}px ${driftY}px, ${13 - driftX}px ${9 - driftY}px`,
          backgroundSize: '8px 8px, 13px 13px',
          mixBlendMode: 'multiply',
          opacity: 0.095,
        }}
      />
      <AbsoluteFill
        style={{
          background: 'radial-gradient(ellipse at center, transparent 62%, rgba(34,59,58,0.08) 100%)',
          mixBlendMode: 'multiply',
          opacity: 0.65,
        }}
      />
    </AbsoluteFill>
  );
};

export const M05TexturePrototypeReview: React.FC = () => {
  const frame = useCurrentFrame();
  const boilSeed = 101 + Math.floor(frame / 2);

  return (
    <AbsoluteFill style={{backgroundColor: '#eee6d5', overflow: 'hidden', fontFamily: 'Arial, sans-serif'}}>
      <FourPartsScene startFrame={TEXTURE_PROTOTYPE_START} />

      <svg width="0" height="0" style={{position: 'absolute'}} aria-hidden>
        <defs>
          <filter id="m05-held-line-boil" x="-2%" y="-2%" width="104%" height="104%" colorInterpolationFilters="sRGB">
            <feTurbulence
              type="fractalNoise"
              baseFrequency="0.012 0.018"
              numOctaves="1"
              seed={boilSeed}
              result="held-noise"
            />
            <feDisplacementMap
              in="SourceGraphic"
              in2="held-noise"
              scale="1.35"
              xChannelSelector="R"
              yChannelSelector="G"
            />
          </filter>
        </defs>
      </svg>

      <div
        style={{
          position: 'absolute',
          left: 735,
          top: 86,
          width: 1090,
          height: 885,
          overflow: 'hidden',
          borderRadius: 24,
          zIndex: 10,
        }}
      >
        <div
          style={{
            position: 'absolute',
            left: -735,
            top: -86,
            width: 1920,
            height: 1080,
            filter: 'url(#m05-held-line-boil)',
          }}
        >
          <FourPartsScene startFrame={TEXTURE_PROTOTYPE_START} />
        </div>
      </div>

      <TextureSurface />
      <div
        style={{
          position: 'absolute',
          right: 34,
          top: 30,
          zIndex: 30,
          padding: '10px 16px',
          border: '2px solid #007e82',
          borderRadius: 22,
          backgroundColor: '#eee6d5e8',
          color: '#007e82',
          fontFamily: 'Arial, sans-serif',
          fontSize: 15,
          fontWeight: 700,
          letterSpacing: 2,
        }}
      >
        TEXTURE TEST · ACTION PANEL BOIL ON TWOS
      </div>

      <Audio src={staticFile(production.voiceover)} trimBefore={TEXTURE_PROTOTYPE_START} />
    </AbsoluteFill>
  );
};
