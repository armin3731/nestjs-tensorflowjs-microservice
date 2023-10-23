import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { APP_BINDINGS } from 'libs/utils';
import { MicroserviceName } from 'libs/enums';
import { MicroPackageName } from 'libs/enums/package-name.enum';

@Module({
  imports: [
    ConfigModule.forRoot(),
    ClientsModule.register([
      {
        name: MicroPackageName.AI,
        transport: Transport.GRPC,
        options: {
          url: APP_BINDINGS(MicroserviceName.AI).protoUrl,
          package: APP_BINDINGS(MicroserviceName.AI).packageName,
          protoPath: APP_BINDINGS(MicroserviceName.AI).protoPath,
          loader: { keepCase: true },
        },
      },
    ]),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
