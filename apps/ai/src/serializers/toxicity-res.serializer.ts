import { Analysis } from '@app/interfaces';
import { Exclude, Expose } from 'class-transformer';

@Exclude()
export class AnalysisSerializer implements Analysis {
  @Expose()
  identity_attack: boolean;

  @Expose()
  insult: boolean;

  @Expose()
  obscene: boolean;

  @Expose()
  severe_toxicity: boolean;

  @Expose()
  sexual_explicit: boolean;

  @Expose()
  threat: boolean;

  @Expose()
  toxicity: boolean;

  constructor(data?: Partial<Analysis>) {
    if (data) Object.assign(this, data);
  }
}
