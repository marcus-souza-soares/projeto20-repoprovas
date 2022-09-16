import * as categoryRepository from "../repositories/categoryRepository.js";
import { Category } from "../types/categoryType.js";

export async function findCategoryById(id: number){
  const category: Category = await categoryRepository.findById(id)
  return category;
}