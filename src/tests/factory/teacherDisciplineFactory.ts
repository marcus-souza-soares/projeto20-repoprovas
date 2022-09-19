import prisma from "../../database/prismaClient";

export async function teacherDisciplineFactory(
  teacherId: number,
  disciplineId: number
) {
  return await prisma.teachersDisciplines.create({
    data: {
      teacherId,
      disciplineId,
    },
  });
}
