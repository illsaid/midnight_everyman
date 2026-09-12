export type ProductionLayer = {id: string; kind: string; status: string; component?: string; implementedBy?: string};
export type ProductionScene = {id: string; cues: string[]; editorialStatus: string; layers: ProductionLayer[]};
export type Placement = {id: string; scene: string; kind: 'video' | 'image' | 'component'; from: number; duration: number; src?: string; sourceStart?: number; playbackRate?: number; crop?: 'cover' | 'contain'; focalPoint?: number[]; component?: string; status: string};
export type Production = {fps: number; width: number; height: number; durationInFrames: number; voiceover: string; scenes: ProductionScene[]; placements: Placement[]; reviewRanges: {scene: string; from: number; to: number}[]};
