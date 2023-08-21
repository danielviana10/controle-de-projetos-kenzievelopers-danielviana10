import { Request, Response } from "express";
import { Project } from "../interfaces/project.interfaces";
import { projectServices } from "../services";

const createProject = async (request: Request, response: Response): Promise<Response> => {
    const project: Project = await projectServices.createProject(request.body);
    return response.status(201).json(project);
};

const retrieve = async (request: Request, response: Response): Promise<Response> => {
    const project: Project = await projectServices.retrieve(request.params.id);
    return response.status(200).json(project);
};

const partialUpdateProject = async (request: Request, response: Response): Promise<Response> => {
    const project: Project = await projectServices.partialUpdateProject(request.body, request.params.id);
    return response.status(200).json(project);
};

export default { createProject, retrieve, partialUpdateProject };