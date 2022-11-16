import { Injectable } from '@nestjs/common';
import { OtroServicioService } from './otro-servicio.service';

@Injectable()
export class UserService {
  constructor(private readonly otroServicioService: OtroServicioService) {}

  getHelloWorld(): string {
    return this.otroServicioService.holaMundo();
  }

  findAll(): string[] {
    const data = this.otroServicioService.buscarMundo();
    data.pop();
    return data;
  }
}
