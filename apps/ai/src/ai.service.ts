import { Analysis, RequestText, ToxicityRes } from '@app/interfaces';
import { Inject, Injectable } from '@nestjs/common';
import { TOXICITY_MODEL } from './constants';
import * as toxicity from '@tensorflow-models/toxicity';
import { ToxicityResSerializer } from './serializers';

@Injectable()
export class AiService {
  private model: toxicity.ToxicityClassifier;
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  constructor(@Inject(TOXICITY_MODEL) model: toxicity.ToxicityClassifier) {
    this.model = model;
  }

  async analyzeToxicity(reqText: RequestText): Promise<Analysis> {
    const { text } = reqText;
    const response: ToxicityRes[] = await this.model.classify(text);

    console.debug(
      'result ==================================================\n',
    );
    console.dir(response);
    return new ToxicityResSerializer(response).serialize();
  }
}
