import { Controller } from '@nestjs/common';
import { AiService } from './ai.service';
import { MessagePattern } from '@nestjs/microservices';

@Controller()
export class AiController {
  constructor(private readonly aiService: AiService) {}

  @MessagePattern({ cmd: 'hello' })
  async getHello(data: string): Promise<string> {
    return this.aiService.getHello(data);
  }
}
