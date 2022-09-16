"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
exports.registerSchema = exports.loginSchema = void 0;
var joi_1 = __importDefault(require("joi"));
var loginSchema = joi_1["default"].object({
    email: joi_1["default"].string().email().required(),
    password: joi_1["default"].string().required()
});
exports.loginSchema = loginSchema;
var registerSchema = joi_1["default"].object({
    email: joi_1["default"].string().email().required(),
    password: joi_1["default"].string().required(),
    confirmPassword: joi_1["default"].ref("password")
});
exports.registerSchema = registerSchema;
