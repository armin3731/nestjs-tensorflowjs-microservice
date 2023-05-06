import { Module } from '@nestjs/common';
import { AiController } from './ai.controller';
import { AiService } from './ai.service';

@Module({
  imports: [],
  controllers: [AiController],
  providers: [AiService],
})
export class AiModule {}
