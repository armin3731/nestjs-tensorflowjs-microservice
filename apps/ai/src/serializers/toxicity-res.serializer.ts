import { Analysis, ToxicityRes } from '@app/interfaces';

export class ToxicityResSerializer {
  constructor(private response: ToxicityRes[]) {}

  public serialize(): Analysis {
    const output: Analysis = {
      identity_attack: false,
      insult: false,
      obscene: false,
      severe_toxicity: false,
      sexual_explicit: false,
      threat: false,
      toxicity: false,
    };
    this.response.map(
      (txRes) => (output[txRes.label] = txRes.results.at(0).match),
    );
    return output;
  }
}
