export class CreateIngredientDto {
  name: string;
  group_id: number;
  carbohydrates: number;
  proteins: number;
  total_fat: number;
  calories: string;
  description: string;
  info_author_id: number;
}

export class ReceivedCreateIngredientDto {
  name: string;
  group_id: number;
  carbohydrates: number;
  proteins: number;
  total_fat: number;
  calories: string;
  description: string;
}
