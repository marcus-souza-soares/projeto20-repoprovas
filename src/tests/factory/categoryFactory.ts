import { faker } from "@faker-js/faker";
import prisma from "../../database/prismaClient";

export async function categoryFactory() {
  const category = await prisma.categories.create({
    data: {
      name: faker.random.words(2),
    },
  });
  return await prisma.categories.findFirst({
    where: {
      name: category.name,
    },
  });
}
