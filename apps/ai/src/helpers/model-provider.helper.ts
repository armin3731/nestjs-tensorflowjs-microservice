import * as toxicity from '@tensorflow-models/toxicity';
require('@tensorflow/tfjs-node');
import { TOXICITY_MODEL, TOXICITY_THRESH } from '../constants';
import { Logger, Provider } from '@nestjs/common';

const logger = new Logger('modelProvider');
export const modelProvider: Provider = {
  provide: TOXICITY_MODEL,
  useFactory: async () => {
    logger.verbose('Loading the model...');
    const model: toxicity.ToxicityClassifier = await toxicity.load(
      TOXICITY_THRESH,
      [],
    );
    logger.log('Model loaded successfully');
    return model;
  },
};
