import { Analysis } from './analysis.interface';

export interface AiGrpcService {
  analyze: (reqText: RequestText) => Promise<Analysis>;
}

export interface RequestText {
  text: string;
}
