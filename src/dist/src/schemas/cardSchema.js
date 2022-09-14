import joi from "joi";
export var cardSchema = joi.object({
    title: joi.string().required(),
    number: joi.string().pattern(/^[0-9]{4}\ [0-9]{4}\ [0-9]{4}\ [0-9]{4}$/).required(),
    name: joi.string().required(),
    cvc: joi.string().length(3),
    expirationDate: joi.string().pattern(/^[0-9]{2}\/[0-9]{2}$/).required(),
    password: joi.string().pattern(/^[0-9]{4}$/).required(),
    isVirtual: joi.boolean().required(),
    type: joi.string().valid("credit", "debit", "credit/debit").required()
});
