"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
exports.authMiddleware = void 0;
var jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
function authMiddleware(req, res, next) {
    var authorization = req.headers.authorization;
    if (!req.headers) {
        return res.status(401).send("Acesso não autorizado.");
    }
    var token = authorization === null || authorization === void 0 ? void 0 : authorization.replace("Bearer ", "");
    var secret_key = process.env.SECRET_KEY;
    var user = jsonwebtoken_1["default"].verify(token, secret_key);
    if (user) {
        res.locals.user = user;
        next();
    }
    else {
        res.status(404).send("Error ao validar o usuário");
    }
}
exports.authMiddleware = authMiddleware;
