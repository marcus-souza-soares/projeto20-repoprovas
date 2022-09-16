"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var pg_1 = __importDefault(require("pg"));
var dotenv_1 = __importDefault(require("dotenv"));
dotenv_1["default"].config();
var dbConfig = {
    connectionString: process.env.DATABASE_URL,
    ssl: null
};
if (process.env.MODE === "PROD") {
    dbConfig.ssl = {
        rejectUnauthorized: false
    };
}
var Pool = pg_1["default"].Pool;
var db = new Pool(dbConfig);
exports["default"] = db;
