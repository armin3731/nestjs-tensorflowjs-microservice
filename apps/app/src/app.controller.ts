import { Body, Controller, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { AnalyzeDto } from './dto/analyze.dto';
import { ApiOkResponse, ApiOperation, ApiTags } from '@nestjs/swagger';
import { Analysis } from '@app/interfaces';
import { AnalysisType } from 'libs/types';

@Controller()
@ApiTags('AI Microservice')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post('analyze_toxicity')
  @ApiOperation({
    summary: 'Analyzing toxicity of a text',
    description:
      'This API receives a text and sends it to another microservice that specifies if it is insulting, threatening, or ... using a pre-trained TensorflowJs model.',
  })
  @ApiOkResponse({
    description: 'The toxicity analysis of your text',
    type: AnalysisType,
  })
  async analyze(@Body() data: AnalyzeDto): Promise<Analysis> {
    return this.appService.analyze(data.text);
  }
}
