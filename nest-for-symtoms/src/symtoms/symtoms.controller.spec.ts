import { Test, TestingModule } from '@nestjs/testing';
import { SymtomsController } from './symtoms.controller';
import { SymtomsService } from './symtoms.service';

describe('SymtomsController', () => {
  let controller: SymtomsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SymtomsController],
      providers: [SymtomsService],
    }).compile();

    controller = module.get<SymtomsController>(SymtomsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
