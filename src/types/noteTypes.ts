import { notes } from "@prisma/client";

type NoteInsertData = Omit<notes, "id">;
type Note = notes;
type NotePartial = Partial<notes>;
type NoteArray = notes[];

export { NoteInsertData, Note, NotePartial, NoteArray };
