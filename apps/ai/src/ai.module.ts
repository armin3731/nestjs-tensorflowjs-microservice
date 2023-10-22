import { Module } from '@nestjs/common';
import { AiController } from './ai.controller';
import { AiService } from './ai.service';
import { ConfigModule } from '@nestjs/config';
import { modelProvider } from './helpers';
require('@tensorflow/tfjs');

@Module({
  imports: [ConfigModule.forRoot()],
  controllers: [AiController],
  providers: [modelProvider, AiService],
})
export class AiModule {}
