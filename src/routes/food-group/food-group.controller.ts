import {
  Body,
  Controller,
  Get,
  Logger,
  Param,
  Post,
  Query,
  UseGuards,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import CreateFoodGroupDto from './dto/create-foodGroup.dto';
import { FoodGroupService } from './food-group.service';

@Controller('food-group')
export class FoodGroupController {
  constructor(private readonly foodGroupService: FoodGroupService) {}

  @Post()
  @UseGuards(AuthGuard('jwt'))
  create(@Body() data: CreateFoodGroupDto) {
    Logger.log(data);
    return this.foodGroupService.create(data);
  }

  @Get()
  findALl(@Query() filter: any) {
    return this.foodGroupService.findAll(filter);
  }
}
