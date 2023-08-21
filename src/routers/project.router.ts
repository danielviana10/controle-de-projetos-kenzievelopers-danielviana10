import { Router } from "express";
import { projectControllers } from "../controllers";
import middlewares from "../middlewares";

const projectRouter: Router = Router();

projectRouter.post("", middlewares.devIdExists, projectControllers.createProject);

projectRouter.use("/:id", middlewares.projectIdExistst, middlewares.devIdExists);

projectRouter.get("/:id", projectControllers.retrieve);

projectRouter.patch("/:id", middlewares.devIdExists, projectControllers.partialUpdateProject);

export default projectRouter;