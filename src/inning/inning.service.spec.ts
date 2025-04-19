import { Test, TestingModule } from '@nestjs/testing';
import { InningService } from './inning.service';

describe('InningService', () => {
  let service: InningService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [InningService],
    }).compile();

    service = module.get<InningService>(InningService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
