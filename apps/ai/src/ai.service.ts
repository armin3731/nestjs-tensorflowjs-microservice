import { Analysis } from '@app/interfaces';
import { Injectable } from '@nestjs/common';
import { ToxicityClassifier } from '@tensorflow-models/toxicity';
import { TOXICITY_THRESH } from './constants';

@Injectable()
export class AiService {
  async analyze(text: string): Promise<Analysis> {
    const toxicity = new ToxicityClassifier(TOXICITY_THRESH);
    const result = await toxicity.classify(text);
    console.debug('result===================================\n', result);
    return;
  }
}
