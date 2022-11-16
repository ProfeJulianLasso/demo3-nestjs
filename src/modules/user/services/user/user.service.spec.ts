import { Test, TestingModule } from '@nestjs/testing';
import { OtroServicioService } from './otro-servicio.service';
import { UserService } from './user.service';

describe('UserService', () => {
  let service: UserService;
  let otroServicio: OtroServicioService;

  // Arrange
  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UserService, OtroServicioService],
    }).compile();

    service = module.get<UserService>(UserService);
    otroServicio = module.get<OtroServicioService>(OtroServicioService);
  });

  it('should be defined', async () => {
    // Assert
    expect(service).toBeDefined();
  });

  it('should be "Hello World"', async () => {
    // Act
    const result = service.getHelloWorld();

    // Assert
    expect(result).toBe('Hello World');
  });

  it('should be Array<string>', () => {
    // Arrange
    const datosEsperados = ['Julian', 'Santiago'];
    const result = ['Julian', 'Santiago', 'Duvan'];
    jest.spyOn(otroServicio, 'buscarMundo').mockImplementation(() => result);

    // Act
    const data = service.findAll();

    // Assert
    expect(data).toEqual(datosEsperados);
  });
});
