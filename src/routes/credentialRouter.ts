import { Router } from "express";
import {
    getCredencials,
    createCredential,
    getCredencialById,
    deleteCredential,
} from "../controllers/credentialController.js";
import { authMiddleware } from "../middlewares/authMiddleware.js";
import { schemaValidate } from "../middlewares/validateSchema.js";
import { credentialSchema } from "../schemas/credentialSchema.js";

const credentialRouter = Router();

credentialRouter.get("/credentials", authMiddleware, getCredencials);
credentialRouter.post(
    "/insert/credential",
    authMiddleware,
    schemaValidate(credentialSchema),
    createCredential
);
credentialRouter.get("/credential/:id", authMiddleware, getCredencialById);
credentialRouter.delete(
    "/credential/delete/:id",
    authMiddleware,
    deleteCredential
);

export default credentialRouter;
