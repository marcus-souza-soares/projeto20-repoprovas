import express, { json } from "express";
import { errorHandlingMiddleware } from "./middlewares/errorMiddleware.js";
import "express-async-errors";
import cors from "cors";

import router from "./routes/index";

const app = express();
app.use(json());
app.use(cors());
app.use(router);
app.use(errorHandlingMiddleware);

export default app;
