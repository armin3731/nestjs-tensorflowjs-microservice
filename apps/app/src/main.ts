import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { APP_BINDINGS, bootstrapSwagger } from 'libs/utils';
import { MicroserviceName } from 'libs/enums';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, { cors: true });

  app.useGlobalPipes(
    new ValidationPipe({
      validateCustomDecorators: true,
      transform: true,
    }),
  );

  bootstrapSwagger(app);
  const bindings = APP_BINDINGS(MicroserviceName.APP);
  await app.listen(bindings.port, bindings.host);
  console.log(
    `APP successfully started on port ${bindings.port} and ${bindings.url}`,
  );
}
bootstrap();
