import { MicroPackageName } from '@app/enums/package-name.enum';
import { AiGrpcService, Analysis, RequestText } from '@app/interfaces';
import { Inject, Injectable, OnModuleInit } from '@nestjs/common';
import { ClientGrpc } from '@nestjs/microservices';

@Injectable()
export class AppService implements OnModuleInit {
  public aiService: AiGrpcService;
  constructor(@Inject(MicroPackageName.AI) private aiClient: ClientGrpc) {}
  onModuleInit() {
    this.aiService = this.aiClient.getService<AiGrpcService>('AiService');
  }

  async analyze(text: string): Promise<Analysis> {
    const reqText: RequestText = {
      text,
    };
    return this.aiService.analyze(reqText);
  }
}
