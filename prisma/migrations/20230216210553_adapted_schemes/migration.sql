/*
  Warnings:

  - You are about to drop the column `ingredients` on the `Dish` table. All the data in the column will be lost.
  - You are about to drop the `ingredient` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `description` to the `Dish` table without a default value. This is not possible if the table is not empty.
  - Added the required column `name` to the `Dish` table without a default value. This is not possible if the table is not empty.
  - Added the required column `preparation` to the `Dish` table without a default value. This is not possible if the table is not empty.
  - Added the required column `time_to_prepare` to the `Dish` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "ingredient" DROP CONSTRAINT "ingredient_dish_id_fkey";

-- DropForeignKey
ALTER TABLE "ingredient" DROP CONSTRAINT "ingredient_group_id_fkey";

-- AlterTable
ALTER TABLE "Dish" DROP COLUMN "ingredients",
ADD COLUMN     "description" TEXT NOT NULL,
ADD COLUMN     "name" TEXT NOT NULL,
ADD COLUMN     "preparation" TEXT NOT NULL,
ADD COLUMN     "time_to_prepare" TEXT NOT NULL;

-- DropTable
DROP TABLE "ingredient";

-- CreateTable
CREATE TABLE "User" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "create_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Ingredient_dosage" (
    "id" SERIAL NOT NULL,
    "quantity" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "ingredient_id" INTEGER NOT NULL,
    "dish_id" INTEGER NOT NULL,

    CONSTRAINT "Ingredient_dosage_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Ingredient" (
    "id" SERIAL NOT NULL,
    "group_id" INTEGER NOT NULL,
    "carbohydrates" DOUBLE PRECISION NOT NULL,
    "proteins" DOUBLE PRECISION NOT NULL,
    "total_fat" DOUBLE PRECISION NOT NULL,
    "calories" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "info_author_id" INTEGER NOT NULL,

    CONSTRAINT "Ingredient_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Ingredient_dosage" ADD CONSTRAINT "Ingredient_dosage_ingredient_id_fkey" FOREIGN KEY ("ingredient_id") REFERENCES "Ingredient"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Ingredient_dosage" ADD CONSTRAINT "Ingredient_dosage_dish_id_fkey" FOREIGN KEY ("dish_id") REFERENCES "Dish"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Ingredient" ADD CONSTRAINT "Ingredient_info_author_id_fkey" FOREIGN KEY ("info_author_id") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Ingredient" ADD CONSTRAINT "Ingredient_group_id_fkey" FOREIGN KEY ("group_id") REFERENCES "Food_group"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
