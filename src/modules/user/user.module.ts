import { Module } from '@nestjs/common';
// import { UserController } from './user.controller';
import { UserService } from './services/user/user.service';

@Module({
  controllers: [],
  providers: [UserService],
})
export class UserModule {}
