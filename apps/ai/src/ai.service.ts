import { Analysis, RequestText } from '@app/interfaces';
import { Injectable, OnModuleInit } from '@nestjs/common';
import { TOXICITY_THRESH } from './constants';
import * as tf from '@tensorflow/tfjs';
import * as toxicity from '@tensorflow-models/toxicity';

@Injectable()
export class AiService implements OnModuleInit {
  onModuleInit() {
    throw new Error('Method not implemented.');
  }
  private model: toxicity.ToxicityClassifier;

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
