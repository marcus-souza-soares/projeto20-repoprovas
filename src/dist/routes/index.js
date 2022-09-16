"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var express_1 = require("express");
var authRoutes_1 = __importDefault(require("./authRoutes"));
var testRoutes_1 = __importDefault(require("./testRoutes"));
var router = (0, express_1.Router)();
router.use(authRoutes_1["default"]);
router.use(testRoutes_1["default"]);
exports["default"] = router;
