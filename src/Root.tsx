import "./index.css";
import { MyComposition } from "./Composition";
import { SprinklerAssemblyRegistration } from "./sprinkler-pilot/SprinklerPilotAssembly";

export const RemotionRoot: React.FC = () => {
  return (
    <>
      <MyComposition />
      <SprinklerAssemblyRegistration />
    </>
  );
};
