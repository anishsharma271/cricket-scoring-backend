import { Test, TestingModule } from '@nestjs/testing';
import { InningController } from './inning.controller';
import { InningService } from './inning.service';

describe('InningController', () => {
  let controller: InningController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [InningController],
      providers: [InningService],
    }).compile();

    controller = module.get<InningController>(InningController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
