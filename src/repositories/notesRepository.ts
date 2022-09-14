import prisma from "../database/prismaClient.js";
import { NoteInsertData, NotePartial } from "../types/noteTypes.js";

export async function create(note: NoteInsertData) {
  await prisma.notes.create({
    data: note
  })
};

export async function verifyIfExists(data: NotePartial) {
  return await prisma.notes.findFirst({
      where: {
          ...data,
      },
  });
}

export async function getNotes(userId: number) {
  return await prisma.notes.findMany({
      where: { userId },
  });
}

export async function getUniqueNote(noteId: number) {
  return await prisma.notes.findUnique({
      where: {
          id: noteId,
      },
  });
}

export async function deleteNote(noteId: number) {
  return await prisma.notes.delete({
      where: {
          id: noteId,
      },
  });
}