import prisma from "../database/prismaClient.js";
import { Tests } from "../types/testTypes.js";

export async function createTest(test: Omit<Tests, "id">) {
  await prisma.tests.create({
    data: test,
  });
}
export async function findByUrlAndName(test: Partial<Tests>) {
  return await prisma.tests.findFirst({
    where: {
      ...test,
    },
  });
}

export async function findTestsByDiscipline() {
  return await prisma.terms.findMany({
    select: {
      id: true,
      number: true,
      disciplines: {
        select: {
          name: true,
          id: true,
          teacherDisciplines: {
            select: {
              id: true,
              disciplineId: true,
              teacher: true,
              tests: {
                include: {
                  category: true,
                },
              },
            },
          },
        },
      },
    },
  });
}
export async function findTestsByTeacher() {
  return await prisma.teachersDisciplines.findMany({
    include: {
      teacher: true,
      discipline: true,
      tests: {
        include: { category: true },
      },
    },
  });
}
