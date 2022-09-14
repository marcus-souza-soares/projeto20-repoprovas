import { Router } from "express";
import userRouter from "./userRoutes.js";
import credentialRouter from "./credentialRouter.js";
import cardRouter from "./cardsRouter.js";
import noteRouter from "./notesRouter.js";
import wifiRouter from "./wifiRouter.js"

const router = Router();
router.use("/", userRouter);
router.use("/", credentialRouter);
router.use("/", cardRouter);
router.use("/", noteRouter);
router.use("/", wifiRouter);

export default router;

