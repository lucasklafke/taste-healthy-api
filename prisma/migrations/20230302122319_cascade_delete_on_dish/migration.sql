-- DropForeignKey
ALTER TABLE "Ingredient_dosage" DROP CONSTRAINT "Ingredient_dosage_dish_id_fkey";

-- AddForeignKey
ALTER TABLE "Ingredient_dosage" ADD CONSTRAINT "Ingredient_dosage_dish_id_fkey" FOREIGN KEY ("dish_id") REFERENCES "Dish"("id") ON DELETE CASCADE ON UPDATE CASCADE;
