import { Controller, Get } from '@nestjs/common';
import { AiService } from './ai.service';

@Controller()
export class AiController {
  constructor(private readonly aiService: AiService) {}

  @Get()
  getHello(): string {
    return this.aiService.getHello();
  }
}
