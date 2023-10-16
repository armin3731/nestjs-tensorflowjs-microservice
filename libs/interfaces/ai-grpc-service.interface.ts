import { Analysis } from './analysis.interface';

export interface AiGrpcService {
  analyze: (text: string) => Promise<Analysis>;
}
