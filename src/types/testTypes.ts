import { Tests } from "@prisma/client";

interface TestsToInsert {
  name: string;
  pdfUrl: string;
  categoryId: number;
  disciplineId: number;
  teacherId: number;
}

export { Tests, TestsToInsert };
