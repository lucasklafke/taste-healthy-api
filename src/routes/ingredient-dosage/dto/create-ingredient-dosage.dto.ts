import { IsEmpty, IsNumber, IsString } from 'class-validator';

export class CreateIngredientDosageDto {
  @IsString()
  quantity: string;
  @IsString()
  description: string;
  @IsNumber()
  ingredient_id: number;
  @IsEmpty()
  @IsNumber()
  dish_id: number | undefined;
}
