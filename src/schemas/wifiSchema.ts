import joi from "joi";

export const wifiSchema = joi.object({
  bssid: joi.string().required(),
  password: joi.string().required(),
  title: joi.string().required()
});
