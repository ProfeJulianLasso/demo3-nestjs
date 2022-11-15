import { Controller, Get } from '@nestjs/common';

@Controller()
export class AppController {
  // constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): void {
    // return this.appService.getHello();
  }
}
