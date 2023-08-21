import { NextFunction, Request, Response } from "express";
import { AppError } from "../errors";

export const handleError = (err: Error, request: Request, response: Response, next: NextFunction) => {
    if (err instanceof AppError) {
        return response.status(err.statusCode).json({ message: err.message })
    };

    console.log(err);
    return response.status(500).json({ message: "Internal Server Error." });
};