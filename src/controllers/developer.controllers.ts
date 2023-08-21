import { Request, Response } from "express";
import { Developer } from "../interfaces/developer.interfaces";
import { developerServices } from "../services";

const createDev = async (request: Request, response: Response): Promise<Response> => {
    const developer: Developer = await developerServices.createDev(request.body);
    return response.status(201).json(developer);
};

const retrieve = async (request: Request, response: Response): Promise<Response> => {
    const developer: Developer = await developerServices.retrieve(request.params.id);
    return response.status(200).json(developer);
};

const partialUpdateDev = async (request: Request, response: Response): Promise<Response> => {
    const developer: Developer = await developerServices.partialUpdateDev(request.body, request.params.id);
    return response.status(200).json(developer);
};

const deleteDev = async (request: Request, response: Response): Promise<Response> => {
    await developerServices.deleteDev(request.params.id)
    return response.status(204).json();
};

export default { createDev, retrieve, partialUpdateDev, deleteDev };