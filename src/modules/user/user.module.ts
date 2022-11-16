import { Module } from '@nestjs/common';
import { UserController } from './controllers/user.controller';
import { OtroServicioService } from './services/user/otro-servicio.service';
import { UserService } from './services/user/user.service';

@Module({
  controllers: [UserController],
  providers: [UserService, OtroServicioService],
})
export class UserModule {}
