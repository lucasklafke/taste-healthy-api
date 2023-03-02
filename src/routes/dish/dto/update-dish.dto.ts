import { PartialType } from '@nestjs/mapped-types';
import { CreateDishDto } from './create-dish.dto';

export class UpdateDishDto {
  name: string;
  description: string;
  time_to_prepare: string;
  preparation: string;
  author_id: number;
}
