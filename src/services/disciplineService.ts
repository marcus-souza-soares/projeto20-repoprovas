import * as disciplineRepository from "../repositories/disciplneRepository.js";
import { Discipline } from "../types/disciplineType.js";

export async function findDisciplineById(id: number){
  const discipline: Discipline = await disciplineRepository.findById(id);
  return discipline;
}