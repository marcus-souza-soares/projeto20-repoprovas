import { Router } from "express";
import { schemaValidate } from "../middlewares/validateSchema.js";
import { loginSchema, registerSchema } from "../schemas/userSchema.js";
import { register, login } from "../controllers/authController.js";

const authRouter = Router();

authRouter.post("/signin", schemaValidate(loginSchema), login);
authRouter.post("/signup", schemaValidate(registerSchema), register);

export default authRouter;
