import { AppController } from './app.controller';

describe('AppController', () => {
  let appController: AppController;

  // beforeEach(() => {
  //   appController = new AppController();
  // });

  describe('getHello', () => {
    it('should return "Hola Mundo"', () => {
      // Arrange
      appController = new AppController();

      // Act
      const result = appController.getHello();

      // Assert
      expect(result).toBe('Hola Mundo');
    });
  });
});
