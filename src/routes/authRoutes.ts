import { Router } from "express";
import { schemaValidate } from "../middlewares/validateSchema.js";
import { userSchema } from "../schemas/userSchema.js";

const authRouter = Router();

authRouter.post("/signin", schemaValidate(userSchema), (req, res) => res.send("agr foi"));


export default authRouter;