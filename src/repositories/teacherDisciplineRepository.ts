import prisma from "../database/prismaClient.js";
import { TeachersDiscipline } from "../types/teacherRepositoryTypes.js";

export async function findById(
  teacherDiscipline: Omit<TeachersDiscipline, "id">
) {
  return await prisma.teachersDisciplines.findFirst({
    where: {
      disciplineId: teacherDiscipline.disciplineId,
      teacherId: teacherDiscipline.teacherId,
    },
  });
}
