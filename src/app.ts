import "express-async-errors";
import express, { Application, json } from "express";
import "dotenv/config";
import devRouter from "./routers/developer.route";
import middlewares from "./middlewares";
import projectRouter from "./routers/project.router";

const app: Application = express();

app.use(json());

app.use("/developers", devRouter);
app.use("/projects", projectRouter);

app.use(middlewares.handleError) // manter no final

export default app;
