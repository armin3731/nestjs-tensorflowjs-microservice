import toxicity, { ToxicityClassifier } from '@tensorflow-models/toxicity';
import { TOXICITY_THRESH } from '../constants';
import { Provider } from '@nestjs/common';

export async function loadModel(
  thresh: number = TOXICITY_THRESH,
): Promise<ToxicityClassifier> {
  const model: ToxicityClassifier = await toxicity.load(thresh, []);
  return model;
}

export const toxicityProvider: Provider = {
  provide: TOXICITY_MODEL,
  useFactory: (thresh:number),
};
