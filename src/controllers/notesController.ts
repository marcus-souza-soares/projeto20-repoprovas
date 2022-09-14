import { Request, Response } from "express";
import * as notesService from "../services/notesServices.js";
import { NoteArray } from "../types/noteTypes";

export async function createNote(req: Request, res: Response) {
  const note = req.body;
  const userId: number = res.locals.user.id;
  await notesService.createNote(note, userId);
  res.status(201).send("OK");
}

export async function getNotes(req: Request, res: Response) {
  const userId: number = res.locals.user.id;
  const notes: NoteArray = await notesService.getNotes(userId);
  return res.status(200).send(notes);
}
export async function getUniqueNote(req: Request, res: Response) {
  const userId: number = res.locals.user.id;
  const noteId = Number(req.params.id);
  if (!noteId || noteId % 1 !== 0)
    return res.status(422).send("insira o id corretamente!");
  const note = await notesService.getUniqueNote(userId, noteId);
  return res.status(200).send(note);
}
export async function deleteNote(req: Request, res: Response) {
  const userId: number = res.locals.user.id;
  const noteId = Number(req.params.id);
  if (!noteId || noteId % 1 !== 0)
    return res.status(422).send("insira o id corretamente!");
  await notesService.deleteNote(userId, noteId);
  res.sendStatus(200);
}
