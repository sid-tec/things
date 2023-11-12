import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('hello')
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('teste')
  getTeste(): string {
    return this.appService.getTeste();
  }

  @Get('json')
  getJsonTeste() {
    return this.appService.getJsonTeste();
  }
}
