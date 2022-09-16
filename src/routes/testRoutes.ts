import { Router } from "express";
import { authMiddleware } from "../middlewares/authMiddleware.js";
import { schemaValidate } from "../middlewares/validateSchema.js";
import { testSchema } from "../schemas/testSchema.js";
import {insertTest, getByDisciplines} from "../controllers/testController.js"
const testRouter = Router();

testRouter.post(
  "/insert/test",
  authMiddleware,
  schemaValidate(testSchema),
  insertTest
);
testRouter.get("/find_by_disciplines", authMiddleware, getByDisciplines);

export default testRouter;
