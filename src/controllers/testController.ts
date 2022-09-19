import { Request, Response } from "express";
import * as testService from "../services/testService.js";

export async function insertTest(req: Request, res: Response) {
  const test = req.body;
  const user = res.locals.user;
  await testService.insertTest(user.id, test);
  res.sendStatus(201);
}
export async function getByDisciplines(req: Request, res: Response) {
  const user = res.locals.user;
  const tests = await testService.findTestsByDiscipline(user.id);
  res.status(200).send(tests);
}
export async function getByTeachers(req: Request, res: Response) {
  const user = res.locals.user;
  const tests = await testService.findTestsByTeacher(user.id);
  res.status(200).send(tests);
}
