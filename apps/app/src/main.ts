import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { APP_BINDINGS, bootstrapSwagger } from 'libs/utils';
import { MicroserviceName } from 'libs/enums';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, { cors: true });

  bootstrapSwagger(app);
  const bindings = APP_BINDINGS(MicroserviceName.APP);
  await app.listen(bindings.port, bindings.host);
  console.log(
    `${MicroserviceName.APP} successfully started on port ${bindings.port}, ${bindings.url}`,
  );
  console.log(`Swagger successfully started on ${bindings.url}/api`);
}
bootstrap();
