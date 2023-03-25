import { IsNumber, IsString } from 'class-validator';

export class CreateIngredientDto {
  @IsString()
  name: string;
  @IsNumber()
  group_id: number;
  @IsNumber()
  carbohydrates: number;
  @IsNumber()
  proteins: number;
  @IsNumber()
  total_fat: number;
  @IsString()
  calories: string;
  @IsString()
  description: string;
  @IsNumber()
  info_author_id: number;
}

export class ReceivedCreateIngredientDto {
  @IsString()
  name: string;
  @IsNumber()
  group_id: number;
  @IsNumber()
  carbohydrates: number;
  @IsNumber()
  proteins: number;
  @IsNumber()
  total_fat: number;
  @IsString()
  calories: string;
  @IsString()
  description: string;
}
