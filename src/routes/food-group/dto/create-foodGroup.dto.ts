import { IsString } from 'class-validator';

export default class CreateFoodGroupDto {
  @IsString()
  group: string;
  @IsString()
  description: string;
}
