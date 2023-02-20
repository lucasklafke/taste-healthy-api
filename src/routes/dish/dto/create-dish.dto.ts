import { Ingredient_dosage } from 'src/routes/ingredient-dosage/entities/ingredient-dosage.entity';

export class CreateDishDto {
  name: string;
  description: string;
  time_to_prepare: string;
  preparation: string;
  ingredients: Ingredient_dosage[];
}
