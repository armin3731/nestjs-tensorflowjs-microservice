import { Injectable } from '@nestjs/common';

@Injectable()
export class AiService {
  getHello(data: string): string {
    return `Hello ${data}!`;
  }
}
