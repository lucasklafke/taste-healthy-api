import {
  Body,
  Controller,
  Get,
  Logger,
  Param,
  Post,
  Query,
} from '@nestjs/common';
import CreateFoodGroupDto from './dto/create-foodGroup.dto';
import { FoodGroupService } from './food-group.service';

@Controller('food-group')
export class FoodGroupController {
  constructor(private readonly foodGroupService: FoodGroupService) {}

  @Post()
  create(@Body() data: CreateFoodGroupDto) {
    Logger.log(data);
    return this.foodGroupService.create(data);
  }

  @Get()
  findALl(@Query() filter: any) {
    return this.foodGroupService.findAll(filter);
  }
}
