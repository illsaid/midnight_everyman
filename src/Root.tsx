import "./index.css";
import { MyComposition } from "./Composition";
import { SprinklerAssemblyRegistration } from "./sprinkler-pilot/SprinklerPilotAssembly";
import { EscalatorEpisode02Registration } from "./escalator-ep02/EscalatorEpisode02Assembly";
import { SkirtGapV2Registration } from "./escalator-ep02/SkirtGapV2Registration";

export const RemotionRoot: React.FC = () => {
  return (
    <>
      <MyComposition />
      <SprinklerAssemblyRegistration />
      <EscalatorEpisode02Registration />
      <SkirtGapV2Registration />
    </>
  );
};
