import { Controller, Get } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Controller()
export class AppController {
  // constructor(private readonly appService: AppService) {}
  constructor(private readonly configService: ConfigService) {}

  @Get()
  getHello(): void {
    console.log(this.configService.get<string>('SCOPE'));
    // return this.appService.getHello();
  }
}
