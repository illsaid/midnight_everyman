import {Composition, Folder, Still} from "remotion";
import {CharacterLab} from "./CharacterLab";
import {ReplacementCelTest} from "./ReplacementCelTest";
import {MidnightMicroScene01} from "./micro-scene-01/MidnightMicroScene01";
import {ObserverAlarmPass} from "./micro-scene-01/ObserverAlarmPass";
import {RegistrationProof} from "./library/observer/RegistrationProof";
import {VerticalLayoutTest} from "./vertical/VerticalLayoutTest";
import {PerformancePlateExperiment} from "./performance-plate-01/PerformancePlateExperiment";
import {
  ObserverPerformanceEndReference,
  ObserverPerformanceStartReference,
} from "./performance-plate-01/ReferencePlate";
import {
  CATALOG_DURATION,
  PoseLibraryCatalog,
} from "./library/observer/PoseLibraryCatalog";
import {
  ACTION_PACK_SHOWCASE_DURATION,
  ActionPackShowcase,
} from "./library/observer/ActionPackShowcase";
import {GasStationStaging} from "./pilot-01/GasStationStaging";
import {WrongFuelSystemsPilot} from "./systems-pilot-01/WrongFuelSystemsPilot";
import {TOTAL_FRAMES as SYSTEMS_PILOT_DURATION} from "./systems-pilot-01/manifest";

export const MyComposition: React.FC = () => {
  return (
    <>
      <Composition
        id="MidnightMicroScene01"
        component={MidnightMicroScene01}
        durationInFrames={360}
        fps={24}
        width={1920}
        height={1080}
      />
      <Composition
        id="MidnightMicroScene01NoText"
        component={MidnightMicroScene01}
        durationInFrames={360}
        fps={24}
        width={1920}
        height={1080}
        defaultProps={{
          showText: false,
        }}
      />
      <Composition
        id="ObserverAlarmPass"
        component={ObserverAlarmPass}
        durationInFrames={360}
        fps={24}
        width={1920}
        height={1080}
        defaultProps={{
          background: "chroma" as const,
        }}
      />
      <Composition
        id="VerticalLayoutTest"
        component={VerticalLayoutTest}
        durationInFrames={96}
        fps={24}
        width={1080}
        height={1920}
        defaultProps={{
          showGuides: true,
        }}
      />
      <Composition
        id="RegistrationProof"
        component={RegistrationProof}
        durationInFrames={144}
        fps={24}
        width={1920}
        height={1080}
      />
      <Composition
        id="ReplacementCelTest"
        component={ReplacementCelTest}
        durationInFrames={120}
        fps={24}
        width={1920}
        height={1080}
        defaultProps={{
          showLabels: true,
        }}
      />
      <Composition
        id="ArchivedSkeletalCharacterLab"
        component={CharacterLab}
        durationInFrames={240}
        fps={24}
        width={1920}
        height={1080}
        defaultProps={{
          title: "ARCHIVED SKELETAL SYSTEM TEST",
          showLabels: true,
          motionIntensity: 0.65,
        }}
      />
      <Folder name="Sprint-1-Performance-Plate">
        <Still
          id="ObserverPerformanceStartReference"
          component={ObserverPerformanceStartReference}
          width={1920}
          height={1080}
        />
        <Still
          id="ObserverPerformanceEndReference"
          component={ObserverPerformanceEndReference}
          width={1920}
          height={1080}
        />
        <Composition
          id="PerformancePlateExperiment"
          component={PerformancePlateExperiment}
          durationInFrames={192}
          fps={24}
          width={1920}
          height={1080}
          defaultProps={{
            clip: "",
          }}
        />
      </Folder>
      <Folder name="Pose-Library">
        <Composition
          id="PoseLibraryCatalog"
          component={PoseLibraryCatalog}
          durationInFrames={CATALOG_DURATION}
          fps={24}
          width={1920}
          height={1080}
        />
        <Composition
          id="ObserverActionPacks"
          component={ActionPackShowcase}
          durationInFrames={ACTION_PACK_SHOWCASE_DURATION}
          fps={24}
          width={1920}
          height={1080}
        />
      </Folder>
      <Folder name="Pilot-01">
        <Still
          id="Pilot01GasStationStaging"
          component={GasStationStaging}
          width={1920}
          height={1080}
        />
        <Composition
          id="WrongFuelSystemsPilot"
          component={WrongFuelSystemsPilot}
          durationInFrames={SYSTEMS_PILOT_DURATION}
          fps={24}
          width={1920}
          height={1080}
        />
        <Composition
          id="WrongFuelSystemsPilotFx"
          component={WrongFuelSystemsPilot}
          durationInFrames={SYSTEMS_PILOT_DURATION}
          fps={24}
          width={1920}
          height={1080}
          defaultProps={{
            fx: true,
          }}
        />
      </Folder>
    </>
  );
};
