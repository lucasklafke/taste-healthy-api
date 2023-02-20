import { Controller } from '@nestjs/common';
import { IngredientDosageService } from './ingredient-dosage.service';

@Controller('ingredient-dosage')
export class IngredientDosageController {
  constructor(private readonly ingredientDosageService: IngredientDosageService) {}
}
