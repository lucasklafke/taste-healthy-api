import { Module } from '@nestjs/common';
import { DishModule } from './routes/dish/dish.module';
import { IngredientModule } from './routes/ingredient/ingredient.module';
import { UserModule } from './routes/user/user.module';
import { IngredientDosageModule } from './routes/ingredient-dosage/ingredient-dosage.module';
import { AuthModule } from './routes/auth/auth.module';
import { FoodGroupModule } from './routes/food-group/food-group.module';

@Module({
  imports: [
    DishModule,
    IngredientModule,
    UserModule,
    IngredientDosageModule,
    AuthModule,
    FoodGroupModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
