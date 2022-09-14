import { Router } from "express";
import {
  createNote,
  getNotes,
  getUniqueNote,
  deleteNote,
} from "../controllers/notesController.js";
import { authMiddleware } from "../middlewares/authMiddleware.js";
import { schemaValidate } from "../middlewares/validateSchema.js";
import { noteSchema } from "../schemas/notesSchemas.js";

const noteRouter = Router();

noteRouter.get("/notes", authMiddleware, getNotes);
noteRouter.post(
  "/insert/note",
  authMiddleware,
  schemaValidate(noteSchema),
  createNote
);
noteRouter.get("/note/:id", authMiddleware, getUniqueNote);
noteRouter.delete("/note/delete/:id", authMiddleware, deleteNote);

export default noteRouter;
