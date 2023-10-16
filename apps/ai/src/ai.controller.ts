import { Controller } from '@nestjs/common';
import { AiService } from './ai.service';
import { GrpcMethod, Payload } from '@nestjs/microservices';
import { Analysis, RequestText } from '@app/interfaces';

@Controller()
export class AiController {
  constructor(private readonly aiService: AiService) {}

  @GrpcMethod('AiService', 'Analyze')
  async analyze(@Payload() reqText: RequestText): Promise<Analysis> {
    console.debug('text ================================\n', reqText);
    return this.aiService.analyzeToxicity(reqText);
  }
}
