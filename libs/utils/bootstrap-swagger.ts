import { INestApplication } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

export const bootstrapSwagger = (app: INestApplication) => {
  const config = new DocumentBuilder()
    .setTitle(process.env.APPLICATION_NAME)
    .setVersion(process.env.APPLICATION_VERSION)
    .setDescription(process.env.APPLICATION_DESCRIPTION)
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document, {
    swaggerOptions: { docExpansion: 'none' },
  });
};
