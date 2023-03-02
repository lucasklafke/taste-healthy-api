import { Injectable, Logger } from '@nestjs/common';
import { CreateIngredientDto } from '../ingredient/dto/create-ingredient.dto';
import { CreateIngredientDosageDto } from './dto/create-ingredient-dosage.dto';
import { IngredientDosageRepository } from './ingredient-dosage.repository';

@Injectable()
export class IngredientDosageService {
  constructor(
    private readonly IngredientDosageRepository: IngredientDosageRepository,
  ) {}

  create(data: CreateIngredientDosageDto[], dishId: number) {
    data.forEach((ingredient_dosage) => {
      ingredient_dosage['dish_id'] = dishId;
    });
    return this.IngredientDosageRepository.createMany(data);
  }
}
