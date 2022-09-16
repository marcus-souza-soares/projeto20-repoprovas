import * as teacherDisciplineRepository from "../repositories/teacherDisciplineRepository.js";
import { TeachersDiscipline } from "../types/teacherRepositoryTypes.js";

export async function findTeacherDisciplineById(
  teacherId: number,
  disciplineId: number
) {
  const teacherDiscipline: TeachersDiscipline =
    await teacherDisciplineRepository.findById({teacherId, disciplineId});
  return teacherDiscipline;
}
