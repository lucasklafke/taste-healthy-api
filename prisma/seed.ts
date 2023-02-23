import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();
async function main() {
  const groupId = [
    {
      group: 'spice',
      description:
        'it is a general group of ingredients that complements other foods',
    },
  ];

  const ingredients = [
    {
      name: 'pepper',
      group_id: 1,
      carbohydrates: 9,
      proteins: 1.9,
      total_fat: 0.4,
      calories: '40',
      description: 'it is a special kind of spice',
      info_author_id: 1,
    },
    {
      name: 'lemon',
      group_id: 1,
      carbohydrates: 3,
      proteins: 15.9,
      total_fat: 1.4,
      calories: '40',
      description: 'it is 13a special kind of spice',
      info_author_id: 1,
    },
  ];

  const mainUser = await prisma.user.create({
    data: {
      username: 'lucas',
      email: 'lucas@example.com',
      password: 'password',
    },
  });

  const persistedGroupId = await prisma.food_group.createMany({
    data: groupId,
  });
  const persistedIngredients = await prisma.ingredient.createMany({
    data: ingredients,
  });
}
main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
