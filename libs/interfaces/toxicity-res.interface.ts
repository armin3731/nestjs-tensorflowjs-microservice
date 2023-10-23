//Based on tfjs-models/toxicity package
export interface ToxicityResponse {
  label: string;
  results: ToxicityResult[];
}

export interface ToxicityResult {
  probabilities: Float32Array;
  match: boolean;
}
