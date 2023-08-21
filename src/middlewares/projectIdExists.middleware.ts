import { NextFunction, Request, Response } from "express";
import { DeveloperResult } from "../interfaces/developer.interfaces";
import { client } from "../database/database";
import { AppError } from "../errors";

export const projectIdExistst = async (request: Request, response: Response, next: NextFunction): Promise<void> => {

    const id: string = request.params.id;

    const query: DeveloperResult = await client.query(
        'SELECT * FROM "projects" WHERE "id" = $1;', [id]
    );

    if (!query.rowCount) {
        throw new AppError("Project not found.", 404);
    }

    return next();
};