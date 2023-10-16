import { Analysis, RequestText } from '@app/interfaces';
import { Injectable } from '@nestjs/common';
import { TOXICITY_THRESH } from './constants';
import { ToxicityClassifier } from '@tensorflow-models/toxicity';
require('@tensorflow/tfjs-node');

@Injectable()
export class AiService {
  async analyzeToxicity(reqText: RequestText): Promise<Analysis> {
    const { text } = reqText;
    const toxicity = new ToxicityClassifier(TOXICITY_THRESH);
    await toxicity.load();
    const result = await toxicity.classify([text]);
    console.debug(
      'result ==================================================\n',
      result,
    );
    return;
  }
}
