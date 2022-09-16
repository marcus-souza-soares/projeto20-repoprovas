import prisma from "../database/prismaClient.js";

export async function findById(id: number) {
  return await prisma.teachers.findUnique({
    where: {
      id,
    },
  });
}
