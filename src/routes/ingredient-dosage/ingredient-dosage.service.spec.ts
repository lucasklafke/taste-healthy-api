import { Test, TestingModule } from '@nestjs/testing';
import { IngredientDosageService } from './ingredient-dosage.service';

describe('IngredientDosageService', () => {
  let service: IngredientDosageService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [IngredientDosageService],
    }).compile();

    service = module.get<IngredientDosageService>(IngredientDosageService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
