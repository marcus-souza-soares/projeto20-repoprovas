import joi from "joi";

const loginSchema = joi.object({
  email: joi.string().email().required(),
  password: joi.string().required()
})

const registerSchema = joi.object({
  email: joi.string().email().required(),
  password: joi.string().required(),
  confirmPassword: joi.ref("password")
})


export {loginSchema, registerSchema};