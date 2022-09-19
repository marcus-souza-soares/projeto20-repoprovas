import { faker } from "@faker-js/faker";
import { disciplineFactory } from "./disciplineFactory.js";
import { teacherFactory } from "./teacherFactory.js";
import { categoryFactory } from "./categoryFactory.js";
import { teacherDisciplineFactory } from "./teacherDisciplineFactory.js";

export async function testFactory() {
  const category = await categoryFactory();
  const discipline = await disciplineFactory();
  const teacher = await teacherFactory();
  await teacherDisciplineFactory(teacher.id, discipline.id)

  return {
    name: faker.lorem.words(4),
    pdfUrl: faker.internet.url(),
    categoryId: category.id,
    disciplineId: discipline.id,
    teacherId: teacher.id,
  };
}
