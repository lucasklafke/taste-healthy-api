import { Module } from '@nestjs/common';
import { DishModule } from './routes/dish/dish.module';
import { IngredientModule } from './ingredient/ingredient.module';

@Module({
  imports: [DishModule, IngredientModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
