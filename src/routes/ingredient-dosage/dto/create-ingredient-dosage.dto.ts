export class CreateIngredientDosageDto {
  quantity: string;
  description: string;
  ingredient_id: number;
  dish_id: number | undefined;
}
