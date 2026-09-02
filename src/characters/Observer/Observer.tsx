import type {CharacterPose} from "./poses";

export type ExpressionName = "neutral" | "skeptical" | "alarmed" | "delighted";
export type HandName = "open" | "grip" | "point";
export type PaletteName = "broadcast" | "night";

type ObserverProps = {
  pose: CharacterPose;
  expression?: ExpressionName;
  palette?: PaletteName;
  blink?: boolean;
  showClock?: boolean;
};

const palettes: Record<
  PaletteName,
  {ink: string; skin: string; shirt: string; trousers: string; accent: string}
> = {
  broadcast: {
    ink: "#20211f",
    skin: "#e98b5e",
    shirt: "#356f70",
    trousers: "#df6b4f",
    accent: "#d9a323",
  },
  night: {
    ink: "#151821",
    skin: "#d69b78",
    shirt: "#58698f",
    trousers: "#a84c55",
    accent: "#e6bd55",
  },
};

const Hand: React.FC<{
  variant: HandName;
  ink: string;
  skin: string;
}> = ({variant, ink, skin}) => {
  if (variant === "point") {
    return (
      <g>
        <path
          d="M-4 0 C4-8 15-7 21 0 L30 3 L77-7 C85-8 89-2 83 2 L35 13 C30 24 20 29 8 24 L-5 17 Z"
          fill={skin}
          stroke={ink}
          strokeWidth="5"
          strokeLinejoin="round"
        />
      </g>
    );
  }

  if (variant === "grip") {
    return (
      <g>
        <path
          d="M-7 0 C4-8 20-8 28 1 C34 8 31 20 23 25 C15 31 2 27-6 18 Z"
          fill={skin}
          stroke={ink}
          strokeWidth="5"
        />
        <path d="M2 2 C10 9 12 17 6 24 M11-1 C20 7 21 15 15 25" fill="none" stroke={ink} strokeWidth="4" />
      </g>
    );
  }

  return (
    <g>
      <path
        d="M0 0 C-8-9-13-20-8-23 C-3-25 2-12 5-9 C3-24 7-31 12-28 C16-25 12-12 14-8 C16-23 21-27 25-23 C28-19 21-7 22-4 C29-15 35-14 37-9 C39-4 30 7 25 13 C19 21 5 20-2 12 Z"
        fill={skin}
        stroke={ink}
        strokeWidth="5"
        strokeLinejoin="round"
      />
    </g>
  );
};

const Face: React.FC<{
  expression: ExpressionName;
  blink: boolean;
  ink: string;
  skin: string;
}> = ({expression, blink, ink, skin}) => {
  const skeptical = expression === "skeptical";
  const alarmed = expression === "alarmed";
  const delighted = expression === "delighted";

  return (
    <g>
      <path
        d="M139 70 L249 66 L294 132 L253 229 L169 231 L132 145 Z"
        fill={skin}
        stroke={ink}
        strokeWidth="7"
        strokeLinejoin="round"
      />
      <path
        d="M128 74 L176 24 L269 35 L244 68 L186 76 L161 122 L132 143 Z M143 76 L112 169 L149 156 L118 193 L161 176 L174 226 L168 91 Z"
        fill={ink}
        stroke={ink}
        strokeWidth="5"
        strokeLinejoin="round"
      />
      <path
        d="M242 116 L300 143 L248 151"
        fill={skin}
        stroke={ink}
        strokeWidth="7"
        strokeLinejoin="round"
      />

      {blink ? (
        <>
          <path d="M193 126 L215 126" stroke={ink} strokeWidth="6" strokeLinecap="round" />
          <path d="M229 123 L249 122" stroke={ink} strokeWidth="6" strokeLinecap="round" />
        </>
      ) : (
        <>
          <ellipse cx="205" cy={alarmed ? 132 : 129} rx={alarmed ? 7 : 6} ry={alarmed ? 12 : 9} fill={ink} />
          <ellipse cx="240" cy={alarmed ? 128 : 126} rx={alarmed ? 7 : 6} ry={alarmed ? 12 : 9} fill={ink} />
        </>
      )}

      <path
        d={
          skeptical
            ? "M188 109 L214 104 M226 106 L252 111"
            : alarmed
              ? "M188 106 L213 114 M226 114 L252 104"
              : delighted
                ? "M187 109 Q201 100 215 108 M225 106 Q239 98 252 105"
                : "M189 109 Q201 105 214 108 M226 107 Q239 103 252 106"
        }
        fill="none"
        stroke={ink}
        strokeWidth="6"
        strokeLinecap="round"
      />

      {alarmed ? (
        <ellipse cx="246" cy="190" rx="12" ry="17" fill={ink} />
      ) : delighted ? (
        <path d="M223 184 Q247 204 269 181 Q248 218 223 184" fill={ink} />
      ) : skeptical ? (
        <path d="M226 188 Q245 181 261 188" fill="none" stroke={ink} strokeWidth="5" strokeLinecap="round" />
      ) : (
        <path d="M229 188 L254 188" stroke={ink} strokeWidth="5" strokeLinecap="round" />
      )}
    </g>
  );
};

const Clock: React.FC<{ink: string; accent: string}> = ({ink, accent}) => (
  <g transform="translate(4 20) rotate(7)">
    <circle cx="0" cy="0" r="36" fill="#f4edda" stroke={ink} strokeWidth="7" />
    <circle cx="0" cy="0" r="5" fill={accent} />
    <path d="M0 0 L-2-20 M0 0 L16 7" stroke={ink} strokeWidth="5" strokeLinecap="round" />
    <path d="M-22-29 L-13-40 M22-29 L13-40" stroke={ink} strokeWidth="6" strokeLinecap="round" />
  </g>
);

export const Observer: React.FC<ObserverProps> = ({
  pose,
  expression = "neutral",
  palette = "broadcast",
  blink = false,
  showClock = false,
}) => {
  const colors = palettes[palette];

  return (
    <svg
      viewBox="0 0 420 900"
      width="100%"
      height="100%"
      aria-label="The Observer character"
      style={{overflow: "visible"}}
    >
      <g transform={`rotate(${pose.body} 210 520)`}>
        <g transform={`translate(178 508) rotate(${pose.rearThigh})`}>
          <path d="M0 0 L0 188" stroke={colors.trousers} strokeWidth="29" strokeLinecap="round" />
          <g transform={`translate(0 188) rotate(${pose.rearShin})`}>
            <path d="M0 0 L0 174" stroke={colors.trousers} strokeWidth="26" strokeLinecap="round" />
            <path d="M-10 166 L-42 196 L27 193 L18 171 Z" fill={colors.ink} />
          </g>
        </g>

        <g transform={`translate(154 300) rotate(${pose.rearUpperArm})`}>
          <path d="M0 0 L0 142" stroke={colors.shirt} strokeWidth="25" strokeLinecap="round" />
          <g transform={`translate(0 142) rotate(${pose.rearForearm})`}>
            <path d="M0 0 L0 136" stroke={colors.shirt} strokeWidth="22" strokeLinecap="round" />
            <g transform="translate(0 142) scale(.82)">
              <Hand variant="open" ink={colors.ink} skin={colors.skin} />
            </g>
          </g>
        </g>

        <path
          d="M154 278 L253 270 L273 514 L137 514 Z"
          fill={colors.shirt}
          stroke={colors.ink}
          strokeWidth="7"
          strokeLinejoin="round"
        />
        <path d="M186 272 L215 272 L201 308 Z" fill={colors.ink} />
        <path d="M188 222 L220 222 L221 277 L187 277 Z" fill={colors.skin} stroke={colors.ink} strokeWidth="6" />

        <g transform={`rotate(${pose.head} 204 225)`}>
          <Face expression={expression} blink={blink} ink={colors.ink} skin={colors.skin} />
        </g>

        <g transform={`translate(251 299) rotate(${pose.frontUpperArm})`}>
          <path d="M0 0 L0 147" stroke={colors.shirt} strokeWidth="26" strokeLinecap="round" />
          <g transform={`translate(0 147) rotate(${pose.frontForearm})`}>
            <path d="M0 0 L0 139" stroke={colors.shirt} strokeWidth="23" strokeLinecap="round" />
            <g transform="translate(0 145) scale(.84)">
              <Hand variant={showClock ? "grip" : expression === "delighted" ? "point" : "open"} ink={colors.ink} skin={colors.skin} />
              {showClock ? <Clock ink={colors.ink} accent={colors.accent} /> : null}
            </g>
          </g>
        </g>

        <g transform={`translate(224 508) rotate(${pose.frontThigh})`}>
          <path d="M0 0 L0 188" stroke={colors.trousers} strokeWidth="31" strokeLinecap="round" />
          <g transform={`translate(0 188) rotate(${pose.frontShin})`}>
            <path d="M0 0 L0 174" stroke={colors.trousers} strokeWidth="28" strokeLinecap="round" />
            <path d="M-10 166 L-30 196 L42 193 L20 170 Z" fill={colors.ink} />
          </g>
        </g>
      </g>
    </svg>
  );
};
