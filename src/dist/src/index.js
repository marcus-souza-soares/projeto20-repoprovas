import express, { json } from 'express';
import { errorHandlingMiddleware } from "./middlewares/errorMiddleware.js";
import "express-async-errors";
import cors from 'cors';
import chalk from 'chalk';
import dotenv from "dotenv";
import router from './routes/index.js';
dotenv.config();
var app = express();
app.use(json());
app.use(cors());
app.use(router);
app.use(errorHandlingMiddleware);
var port = process.env.PORT || 5000;
app.listen(port, function () {
    console.log(chalk.green.bold("\nServer running on port ".concat(port, "...")));
});
