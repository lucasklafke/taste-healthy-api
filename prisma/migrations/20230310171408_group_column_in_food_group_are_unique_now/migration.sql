/*
  Warnings:

  - A unique constraint covering the columns `[group]` on the table `Food_group` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Food_group_group_key" ON "Food_group"("group");
