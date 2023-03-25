import { IsArray, IsDefined, IsNumber, IsString } from 'class-validator';
import { Ingredient_dosage } from 'src/routes/ingredient-dosage/entities/ingredient-dosage.entity';

export class CreateDishDto {
  @IsString()
  name: string;
  @IsString()
  description: string;
  @IsString()
  time_to_prepare: string;
  @IsString()
  preparation: string;
  @IsNumber()
  author_id: number;
  @IsArray()
  ingredients: Ingredient_dosage[];
}

export class receivedDishDto {
  @IsString()
  name: string;
  @IsString()
  description: string;
  @IsString()
  time_to_prepare: string;
  @IsString()
  preparation: string;
  @IsArray()
  ingredients: Ingredient_dosage[];
}
