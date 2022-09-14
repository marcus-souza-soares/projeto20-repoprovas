import joi from "joi";
export var registerSchema = joi.object({
    name: joi.string().required(),
    email: joi.string().email().required(),
    password: joi.string().min(10).required()
});
export var loginSchema = joi.object({
    email: joi.string().email().required(),
    password: joi.string().min(10).required()
});
