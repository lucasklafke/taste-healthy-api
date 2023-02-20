import { CreateIngredientDto } from 'src/routes/ingredient/dto/create-ingredient.dto';

export class Ingredient_dosage {
  quantity: string;
  description: string;
  ingredient_id: number;
  dish_id: number;
}
