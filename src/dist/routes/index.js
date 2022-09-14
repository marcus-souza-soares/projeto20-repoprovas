import { Router } from "express";
import userRouter from "./userRoutes.js";
var router = Router();
router.use(userRouter);
export default router;
