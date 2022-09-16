import prisma from "../database/prismaClient.js";
import { Tests } from "../types/testTypes.js";

export async function createTest(test: Omit<Tests, "id">) {
  await prisma.tests.create({
    data: test,
  });
}
export async function findByUrlAndName(test: Partial<Tests>){
  return await prisma.tests.findFirst({
    where: {
      ...test
    }
  })
}