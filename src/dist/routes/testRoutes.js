"use strict";
exports.__esModule = true;
var express_1 = require("express");
var authMiddleware_1 = require("../middlewares/authMiddleware");
var validateSchema_1 = require("../middlewares/validateSchema");
var testSchema_1 = require("../schemas/testSchema");
var testRouter = (0, express_1.Router)();
testRouter.post("/insert/test", authMiddleware_1.authMiddleware, (0, validateSchema_1.schemaValidate)(testSchema_1.testSchema), function (req, res) { return console.log(res.locals.user); });
exports["default"] = testRouter;
