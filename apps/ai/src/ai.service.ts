import { Analysis, RequestText } from '@app/interfaces';
import { Inject, Injectable } from '@nestjs/common';
import { TOXICITY_MODEL } from './constants';
import * as toxicity from '@tensorflow-models/toxicity';
import { mod } from '@tensorflow/tfjs';
require('@tensorflow/tfjs');

@Injectable()
export class AiService {
  private model: toxicity.ToxicityClassifier;
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  constructor(@Inject(TOXICITY_MODEL) model: toxicity.ToxicityClassifier) {
    this.model = model;
  }

  async analyzeToxicity(reqText: RequestText): Promise<Analysis> {
    const { text } = reqText;
    const result = await this.model.classify([text]);
    console.debug(
      'result ==================================================\n',
      result,
    );
    return;
  }
}
