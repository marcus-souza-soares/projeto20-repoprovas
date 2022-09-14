import joi from "joi";

export const noteSchema = joi.object({
  title: joi.string().max(50).required(),
  text: joi.string().max(1000).required()
});