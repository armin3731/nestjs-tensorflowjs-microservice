import { Controller } from '@nestjs/common';
import { AiService } from './ai.service';
import { GrpcMethod, Payload } from '@nestjs/microservices';
import { Analysis } from '@app/interfaces';

@Controller()
export class AiController {
  constructor(private readonly aiService: AiService) {}

  @GrpcMethod('AiService', 'Analyze')
  async analyze(@Payload() text: string): Promise<Analysis> {
    console.debug('text ================================\n', text);
    return this.aiService.analyze(text);
  }
}
