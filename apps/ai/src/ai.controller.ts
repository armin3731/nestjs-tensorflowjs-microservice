import {
  ClassSerializerInterceptor,
  Controller,
  UseInterceptors,
} from '@nestjs/common';
import { AiService } from './ai.service';
import { GrpcMethod, Payload } from '@nestjs/microservices';
import { Analysis, RequestText } from '@app/interfaces';
import { AnalysisSerializer } from './serializers';
@Controller()
@UseInterceptors(ClassSerializerInterceptor)
export class AiController {
  constructor(private readonly aiService: AiService) {}

  @GrpcMethod('AiService', 'Analyze')
  async analyze(@Payload() reqText: RequestText): Promise<AnalysisSerializer> {
    const analyzedText: Analysis = await this.aiService.analyzeToxicity(
      reqText,
    );
    return new AnalysisSerializer(analyzedText);
  }
}
