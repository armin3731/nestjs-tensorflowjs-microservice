import { Analysis, ToxicityResponse } from '@app/interfaces';

export const responseToAnalysis = (response: ToxicityResponse[]) => {
  const output: Analysis = {
    identity_attack: false,
    insult: false,
    obscene: false,
    severe_toxicity: false,
    sexual_explicit: false,
    threat: false,
    toxicity: false,
  };
  response.map((txRes) => (output[txRes.label] = txRes.results.at(0).match));
  return output;
};
