import { faker } from "@faker-js/faker";
import prisma from "../../database/prismaClient";

export async function teacherFactory() {
  const teacher = await prisma.teachers.create({
    data: {
      name: faker.random.words(2),
    },
  });
  return await prisma.teachers.findFirst({
    where: {
      name: teacher.name
    }
  })
}
