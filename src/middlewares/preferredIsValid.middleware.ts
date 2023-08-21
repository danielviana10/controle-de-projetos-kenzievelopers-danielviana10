import { NextFunction, Request, Response } from "express";
import { AppError } from "../errors";

export const preferredIsValid = async (request: Request, response: Response, next: NextFunction): Promise<void> => {

    const { preferredOS } = request.body;
    
    const arrayPrerredOS = ["Windows", "Linux", "MacOS"];

    if (!arrayPrerredOS.includes(preferredOS)) {

        throw new AppError("Invalid OS option.", 400)
    }
    else {

        return next();
    };
};