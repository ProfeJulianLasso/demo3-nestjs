import { Controller } from '@nestjs/common';
import { UserService } from '../services/user/user.service';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  findAllMyData(): string[] {
    const data = this.userService.findAll();
    data.pop();
    return data;
  }
}
