import { Test, TestingModule } from '@nestjs/testing';
import { IngredientDosageController } from './ingredient-dosage.controller';
import { IngredientDosageService } from './ingredient-dosage.service';

describe('IngredientDosageController', () => {
  let controller: IngredientDosageController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [IngredientDosageController],
      providers: [IngredientDosageService],
    }).compile();

    controller = module.get<IngredientDosageController>(
      IngredientDosageController,
    );
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
