import { Test, TestingModule } from '@nestjs/testing';
import { SymtomsService } from './symtoms.service';

describe('SymtomsService', () => {
  let service: SymtomsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SymtomsService],
    }).compile();

    service = module.get<SymtomsService>(SymtomsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
