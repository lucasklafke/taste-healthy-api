import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
  Query,
  Logger,
  Req,
  HttpCode,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { DishService } from './dish.service';
import { CreateDishDto, receivedDishDto } from './dto/create-dish.dto';
import { UpdateDishDto } from './dto/update-dish.dto';

@Controller('dish')
export class DishController {
  constructor(private readonly dishService: DishService) {}

  @Post()
  @UseGuards(AuthGuard('jwt'))
  create(@Body() data: receivedDishDto, @Req() req: any) {
    const author_id = Number(req.user.userId);
    const createDishData: CreateDishDto = {
      ...data,
      author_id,
    };
    return this.dishService.create(createDishData);
  }

  @Get()
  findAll(@Query('name') name: string) {
    const filters: { name: string | null } = { name: name };
    return this.dishService.findAll(filters);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.dishService.findOne(+id);
  }

  @Patch(':id')
  @UseGuards(AuthGuard('jwt'))
  update(
    @Param('id') id: string,
    @Body() updateDishDto: UpdateDishDto,
    @Req() req: any,
  ) {
    const { userId } = req.user;
    return this.dishService.update(+id, updateDishDto, userId);
  }

  @Delete(':id')
  @HttpCode(204)
  @UseGuards(AuthGuard('jwt'))
  remove(@Param('id') id: string, @Req() req: any) {
    const userId = req.user.userId;
    return this.dishService.remove(+id, userId);
  }
}
