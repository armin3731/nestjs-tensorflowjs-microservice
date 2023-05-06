import { Test, TestingModule } from '@nestjs/testing';
import { AiController } from './ai.controller';
import { AiService } from './ai.service';

describe('AiController', () => {
  let aiController: AiController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [AiController],
      providers: [AiService],
    }).compile();

    aiController = app.get<AiController>(AiController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(aiController.getHello()).toBe('Hello World!');
    });
  });
});
