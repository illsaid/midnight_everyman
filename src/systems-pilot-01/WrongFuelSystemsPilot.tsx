import {Audio} from "@remotion/media";
import {AbsoluteFill, Sequence, staticFile} from "remotion";
import {SceneCirculation} from "./SceneCirculation";
import {SceneComparison} from "./SceneComparison";
import {SceneConclusion} from "./SceneConclusion";
import {SceneDecision} from "./SceneDecision";
import {SceneMismatch} from "./SceneMismatch";
import {SceneRule} from "./SceneRule";
import {SceneStop} from "./SceneStop";
import {scenes, VOICEOVER_FILE} from "./manifest";
import {FxModeProvider, FxTransitionOverlay} from "./fx";

const sceneComponents = [
  SceneMismatch,
  SceneStop,
  SceneCirculation,
  SceneComparison,
  SceneRule,
  SceneDecision,
  SceneConclusion,
] as const;

export const WrongFuelSystemsPilot: React.FC<{fx?: boolean}> = ({fx = false}) => (
  <FxModeProvider enabled={fx}>
    <AbsoluteFill>
      {scenes.map((scene, index) => {
        const Scene = sceneComponents[index];
        return (
          <Sequence
            key={scene.id}
            name={`${index + 1}. ${scene.title}`}
            from={scene.start}
            durationInFrames={scene.duration}
          >
            <Scene />
          </Sequence>
        );
      })}
      {fx
        ? scenes.slice(1).map((scene, index) => {
            const duration = 14;
            return (
              <Sequence
                key={`fx-transition-${scene.id}`}
                name={`FX transition ${index + 1}`}
                from={scene.start - 6}
                durationInFrames={duration}
                style={{zIndex: 120, pointerEvents: "none"}}
              >
                <FxTransitionOverlay seed={(index + 1) * 29} duration={duration} />
              </Sequence>
            );
          })
        : null}
      <Audio src={staticFile(VOICEOVER_FILE)} />
    </AbsoluteFill>
  </FxModeProvider>
);
