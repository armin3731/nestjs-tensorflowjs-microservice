import { NestFactory } from '@nestjs/core';
import { AiModule } from './ai.module';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { APP_BINDINGS } from 'libs/utils';
import { MicroserviceName } from 'libs/enums';

async function bootstrap() {
  const bindings = APP_BINDINGS(MicroserviceName.AI);
  const micro = await NestFactory.createMicroservice<MicroserviceOptions>(
    AiModule,
    {
      transport: Transport.TCP,
      options: {
        host: bindings.host,
        port: bindings.port,
      },
    },
  );

  await micro.listen();
  console.log(
    `${MicroserviceName.AI} microservice successfully started on port ${bindings.port}, ${bindings.url}`,
  );
}
bootstrap();
