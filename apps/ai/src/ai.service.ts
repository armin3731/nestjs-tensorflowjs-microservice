import { Analysis } from '@app/interfaces';
import { Injectable } from '@nestjs/common';

@Injectable()
export class AiService {
  async analyze(text: string): Promise<Analysis> {
    return;
  }
}
