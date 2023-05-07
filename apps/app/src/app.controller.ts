import { Controller, Post, Query } from '@nestjs/common';
import { AppService } from './app.service';
import { ApiQuery, ApiTags } from '@nestjs/swagger';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post()
  @ApiQuery({ name: 'name', required: true, type: 'string' })
  async getHello(@Query('name') name: string): Promise<string> {
    return this.appService.getHello(name);
  }
}
