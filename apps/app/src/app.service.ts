import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { lastValueFrom } from 'rxjs';

@Injectable()
export class AppService {
  constructor(@Inject('AI_SERVICE') private aiClient: ClientProxy) {}

  async getHello(name: string): Promise<string> {
    const pattern = { cmd: 'hello' };
    return lastValueFrom(this.aiClient.send(pattern, name));
  }
}
