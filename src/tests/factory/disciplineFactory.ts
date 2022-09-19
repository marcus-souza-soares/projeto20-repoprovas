import prisma from "../../database/prismaClient";
import { faker } from "@faker-js/faker";
import { termFactory } from "./termFactory.js";
import { Term } from "../../types/termType.js";

export async function disciplineFactory() {
  const term: Term = await termFactory();
  const discipline = await prisma.disciplines.create({
    data: {
      name: faker.lorem.words(3),
      termId: term.id,
    },
  });
  return await prisma.disciplines.findFirst({
    where: {
      name: discipline.name,
    },
  });
}
