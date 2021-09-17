import { Test, TestingModule } from '@nestjs/testing';
import { ModuService } from './modu.service';

describe('ModuService', () => {
  let service: ModuService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ModuService],
    }).compile();

    service = module.get<ModuService>(ModuService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
