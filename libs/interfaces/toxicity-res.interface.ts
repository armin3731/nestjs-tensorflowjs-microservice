//Based on tfjs-models/toxicity package
export interface ToxicityRes {
  label: string;
  results: ToxicityResult[];
}

export interface ToxicityResult {
  probabilities: Float32Array;
  match: boolean;
}
