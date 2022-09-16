import joi from "joi";

export const testSchema = joi.object({
  name: joi.string().required(),
  pdfUrl: joi.string().uri().required(),
  categoryId: joi.number().integer().min(1).required(),
  disciplineId: joi.number().integer().min(1).required(),
  teacherId: joi.number().integer().min(1).required(),
}) 