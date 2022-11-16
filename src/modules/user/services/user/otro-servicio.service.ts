import { Injectable } from '@nestjs/common';

@Injectable()
export class OtroServicioService {
  data: string[];

  constructor() {
    this.data = new Array<string>();
    this.data.push('Julian');
    this.data.push('Santiago');
    this.data.push('Duvan');
  }

  holaMundo(): string {
    return 'Hello World';
  }

  buscarMundo(): string[] {
    return this.data;
  }
}
