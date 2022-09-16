import { Request, Response } from "express";
import * as testService from "../services/testService.js"  


export async function insertTest(req: Request, res: Response){
  const test = req.body;
  await testService.insertTest(test);
  res.sendStatus(201);
}
