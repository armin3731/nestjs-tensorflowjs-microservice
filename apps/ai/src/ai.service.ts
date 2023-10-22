import { Analysis, RequestText } from '@app/interfaces';
import { Inject, Injectable } from '@nestjs/common';
import { TOXICITY_MODEL } from './constants';
import * as toxicity from '@tensorflow-models/toxicity';
require('@tensorflow/tfjs');

@Injectable()
export class AiService {
  constructor(@Inject(TOXICITY_MODEL) model: toxicity.ToxicityClassifier) {}
  // async onModuleInit() {
  // console.debug('HeyBrooooooooo------------------------------');
  // await toxicity.load(TOXICITY_THRESH, []).then((m) => (this.model = m));
  // tf.loadLayersModel;
  // ('https://storage.googleapis.com/tfhub-tfjs-modules/tensorflow/tfjs-model/toxicity/1/default/1.tar.gz');
  // }
  async analyzeToxicity(reqText: RequestText): Promise<Analysis> {
    const { text } = reqText;
    const result = this.model.classify([text]);
    console.debug(
      'result ==================================================\n',
      result,
    );
    return;
  }
}
