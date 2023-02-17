import { Module } from '@nestjs/common';
import { DishModule } from './routes/dish/dish.module';
import { IngredientModule } from './routes/ingredient/ingredient.module';
import { UserModule } from './routes/user/user.module';

@Module({
  imports: [DishModule, IngredientModule, UserModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
