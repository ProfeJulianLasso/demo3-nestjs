import { Test, TestingModule } from '@nestjs/testing';
import { UserService } from '../services/user/user.service';
import { UserController } from './user.controller';
import { OtroServicioService } from '../services/user/otro-servicio.service';

describe('UserController', () => {
  let controller: UserController;
  let userService: UserService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UserController],
      providers: [UserService, OtroServicioService],
    }).compile();

    controller = module.get<UserController>(UserController);
    userService = module.get<UserService>(UserService);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  it('should be Array<string>', () => {
    // Arrange
    const datosEsperados = ['Julian'];
    const result = ['Julian', 'Santiago'];
    jest.spyOn(userService, 'findAll').mockImplementation(() => result);

    // Act
    const data = controller.findAllMyData();

    // Assert
    expect(data).toEqual(datosEsperados);
  });
});
