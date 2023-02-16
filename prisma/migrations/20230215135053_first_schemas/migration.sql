-- CreateTable
CREATE TABLE "Dish" (
    "id" SERIAL NOT NULL,
    "ingredients" TEXT NOT NULL,

    CONSTRAINT "Dish_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ingredient" (
    "id" SERIAL NOT NULL,
    "dish_id" INTEGER NOT NULL,
    "group_id" INTEGER NOT NULL,

    CONSTRAINT "ingredient_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Food_group" (
    "id" SERIAL NOT NULL,
    "group" TEXT NOT NULL,
    "description" TEXT NOT NULL,

    CONSTRAINT "Food_group_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "ingredient" ADD CONSTRAINT "ingredient_group_id_fkey" FOREIGN KEY ("group_id") REFERENCES "Food_group"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ingredient" ADD CONSTRAINT "ingredient_dish_id_fkey" FOREIGN KEY ("dish_id") REFERENCES "Dish"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
