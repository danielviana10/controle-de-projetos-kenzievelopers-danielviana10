import { NextFunction, Request, Response } from "express";
import { DeveloperResult } from "../interfaces/developer.interfaces";
import { client } from "../database/database";
import { AppError } from "../errors";

export const devIdExists = async (request: Request, response: Response, next: NextFunction): Promise<void> => {

    if (request.method === "GET" && request.baseUrl.includes("projects"))
        return next();

    if (request.baseUrl.includes("projects") && !request.body.developerId)
        return next();

    const id: string | number = request.body.developerId || request.params.id;

    const query: DeveloperResult = await client.query(
        'SELECT * FROM "developers" WHERE "id" = $1;', [id]
    );

    if (!query.rowCount) {
        throw new AppError("Developer not found.", 404);
    }

    return next();
};