import * as toxicity from '@tensorflow-models/toxicity';
import { TOXICITY_MODEL, TOXICITY_THRESH } from '../constants';
import { Logger, Provider } from '@nestjs/common';
require('@tensorflow/tfjs-node');

const logger = new Logger('modelProvider');
export const modelProvider: Provider = {
  provide: TOXICITY_MODEL,
  useFactory: async () => {
    logger.log('Loading the model...');
    const model: toxicity.ToxicityClassifier = await toxicity.load(
      TOXICITY_THRESH,
      [
        'identity_attack',
        'insult',
        'obscene',
        'severe_toxicity',
        'sexual_explicit',
        'threat',
        'toxicity',
      ],
    );
    logger.log('Model loaded successfully');
    return model;
  },
};
