import { Test, TestingModule } from '@nestjs/testing';
import { OverController } from './over.controller';
import { OverService } from './over.service';

describe('OverController', () => {
  let controller: OverController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [OverController],
      providers: [OverService],
    }).compile();

    controller = module.get<OverController>(OverController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
