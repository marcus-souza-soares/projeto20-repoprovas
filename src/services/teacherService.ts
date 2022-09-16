import * as teacherRepository from "../repositories/teacherRepository.js";
import { Teacher } from "../types/teacherTypes";

export async function findTeacherById(id: number) {
  const teacher: Teacher = await teacherRepository.findById(id);
  return teacher;
}
