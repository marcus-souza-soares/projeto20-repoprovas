"use strict";
exports.__esModule = true;
exports.schemaValidate = void 0;
function schemaValidate(schema) {
    var verification = function (req, res, next) {
        var dados = req.body;
        var error = schema.validate(dados, { abortEarly: false }).error;
        if (error) {
            return res
                .status(422)
                .send(error.details.map(function (detail) { return detail.message; }));
        }
        next();
    };
    return verification;
}
exports.schemaValidate = schemaValidate;
