import prisma from "../database/prismaClient.js";

export async function findById(id: number) {
  return await prisma.categories.findUnique({
    where: {
      id,
    },
  });
}
