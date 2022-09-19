import prisma from "../../database/prismaClient";
import { faker } from "@faker-js/faker";

export async function termFactory() {
  const term = await prisma.terms.create({
    data: {
      number: Number(faker.random.numeric(1))
    },
  });
  return await prisma.terms.findFirst({
    where: {
      number: term.number,
    },
  });
}
