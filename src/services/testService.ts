import { TestsToInsert } from "../types/testTypes.js";
import { findCategoryById } from "./categoryService.js";
import { findTeacherById } from "./teacherService.js";
import { findDisciplineById } from "./disciplineService.js";
import { findTeacherDisciplineById } from "./teacherDiscipline.js";
import * as testRepository from "../repositories/testRepository.js";

export async function insertTest(test: TestsToInsert) {
  const { categoryId, disciplineId, teacherId } = test;
  const _test = await testRepository.findByUrlAndName({
    pdfUrl: test.pdfUrl,
    name: test.name,
  });

  if (!!_test)
    throw { code: "NotAllowed", message: "Esse prova já foi cadastrada!" };
  const teacher = await findTeacherById(teacherId);
  if (!teacher)
    throw { code: "NotFound", message: "Esse professor não existe!" };
  const category = await findCategoryById(categoryId);
  if (!category)
    throw { code: "NotFound", message: "Essa categoria não existe!" };
  const discipline = await findDisciplineById(disciplineId);
  if (!discipline)
    throw { code: "NotFound", message: "Essa disciplina não existe!" };
  const teacherDiscipline = await findTeacherDisciplineById(
    teacherId,
    disciplineId
  );
  if (!teacherDiscipline)
    throw {
      code: "NotFound",
      message: "Esse(a) professor(a) não leciona essa disciplina!",
    };
  const data = test;
  delete data.disciplineId;
  delete data.teacherId;
  await testRepository.createTest({
    ...data,
    teacherDisciplineId: teacherDiscipline.id,
  });
}

export async function findTestsByDiscipline(){
  const query = await testRepository.findTestsByDiscipline();
  return query;
  
}

export async function findTestsByTeacher(){
  return await testRepository.findTestsByTeacher();
}