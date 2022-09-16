"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var index_1 = __importDefault(require("./index"));
var chalk_1 = __importDefault(require("chalk"));
var port = process.env.PORT || 5000;
index_1["default"].listen(port, function () {
    console.log(chalk_1["default"].green.bold("\nServer running on port ".concat(port, "...")));
});
