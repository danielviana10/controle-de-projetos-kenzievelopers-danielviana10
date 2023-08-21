import { NextFunction, Request, Response } from "express";
import { client } from "../database/database";
import { AppError } from "../errors";
import { DeveloperInfoResult } from "../interfaces/developerInfo.interfaces";

export const devInfoExists = async (request: Request, response: Response, next: NextFunction): Promise<void> => {
    const query: DeveloperInfoResult = await client.query(
        'SELECT * FROM "developerInfos" WHERE "developerId" = $1',
        [request.params.id]
    );
    if (query.rowCount) {
        throw new AppError("Developer infos already exists.", 409);
    }

    return next();
};