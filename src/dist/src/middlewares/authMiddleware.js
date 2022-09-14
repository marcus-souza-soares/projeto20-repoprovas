import jwt from "jsonwebtoken";
export function authMiddleware(req, res, next) {
    var authorization = req.headers.authorization;
    if (!req.headers) {
        return res.status(401).send("Acesso não autorizado.");
    }
    var token = authorization === null || authorization === void 0 ? void 0 : authorization.replace("Bearer ", "");
    var secret_key = process.env.SECRET_KEY;
    var user = jwt.verify(token, secret_key);
    if (user) {
        res.locals.user = user;
        next();
    }
    else {
        res.status(404).send("Error ao validar o usuário");
    }
}
