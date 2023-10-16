import { Body, Controller, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { AnalyzeDto } from './dto/analyze.dto';
import { ApiTags } from '@nestjs/swagger';
import { Analysis } from '@app/interfaces';

@Controller()
@ApiTags('AI Microservice')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post('analyze_toxicity')
  async analyze(@Body() data: AnalyzeDto): Promise<Analysis> {
    return this.appService.analyze(data.text);
  }
}
