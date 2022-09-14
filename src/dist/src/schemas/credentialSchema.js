import joi from "joi";
export var credentialSchema = joi.object({
    username: joi.string().required(),
    password: joi.string().required(),
    title: joi.string().required(),
    url: joi.string().uri().required()
});
