import { Router } from "express";
import { developerControllers, developerInfoControllers } from "../controllers";
import middlewares from "../middlewares";

const devRouter: Router = Router();

devRouter.post("", middlewares.uniqueEmail, developerControllers.createDev);

devRouter.use("/:id", middlewares.devIdExists);

devRouter.get("/:id", developerControllers.retrieve);

devRouter.patch("/:id", middlewares.uniqueEmail, developerControllers.partialUpdateDev);

devRouter.delete("/:id", developerControllers.deleteDev);

devRouter.post("/:id/infos", middlewares.preferredIsValid, middlewares.devInfoExists, developerInfoControllers.createDev);

export default devRouter;