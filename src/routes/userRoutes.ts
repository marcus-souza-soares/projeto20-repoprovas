import { Router } from "express";
import { register, login } from "../controllers/userController.js";
import { schemaValidate } from "../middlewares/validateSchema.js";
import { registerSchema, loginSchema } from "../schemas/userSchema.js"

const userRouter = Router();

userRouter.post("/register", schemaValidate(registerSchema), register);
userRouter.post("/login", schemaValidate(loginSchema), login);

export default userRouter;