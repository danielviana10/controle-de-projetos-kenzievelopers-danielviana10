import { Request, Response } from "express";
import { DeveloperInfo, DeveloperInfoCreate } from "../interfaces/developerInfo.interfaces";
import { developerInfoServices } from "../services";

const createDev = async (request: Request, response: Response): Promise<Response> => {
    const payload: DeveloperInfoCreate = { ...request.body, developerId: request.params.id };
    const developerInfo: DeveloperInfo = await developerInfoServices.createInfo(payload);

    return response.status(201).json(developerInfo);
};

export default { createDev };