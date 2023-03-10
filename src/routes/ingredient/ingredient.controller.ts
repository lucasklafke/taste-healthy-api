import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Query,
  UseGuards,
  Req,
} from '@nestjs/common';
import { IngredientService } from './ingredient.service';
import {
  CreateIngredientDto,
  ReceivedCreateIngredientDto,
} from './dto/create-ingredient.dto';
import { UpdateIngredientDto } from './dto/update-ingredient.dto';
import { AuthGuard } from '@nestjs/passport';

@Controller('ingredient')
export class IngredientController {
  constructor(private readonly ingredientService: IngredientService) {}

  @Post()
  @UseGuards(AuthGuard('jwt'))
  create(
    @Body() createIngredientDto: ReceivedCreateIngredientDto,
    @Req() req: any,
  ) {
    const userId: number = req.user.userId;
    return this.ingredientService.create({
      ...createIngredientDto,
      info_author_id: userId,
    });
  }

  @Get()
  findAll(@Query() filters: string) {
    if (!filters['skip']) filters['skip'] = 0;
    if (!filters['take']) filters['take'] = 100;
    return this.ingredientService.findAll(
      filters['orderby'],
      Number(filters['skip']),
      Number(filters['take']),
      filters['name'],
    );
  }

  @Get(':group')
  findManyByGroup(@Param('group') group: string) {
    return this.ingredientService.findManyByGroup(group);
  }
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.ingredientService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateIngredientDto: UpdateIngredientDto,
  ) {
    return this.ingredientService.update(+id, updateIngredientDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.ingredientService.remove(+id);
  }
}
