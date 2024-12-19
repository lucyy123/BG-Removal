import { domainToUnicode } from "url";
import ErrorHanlder from "../utils/Error";
import jwt from 'jsonwebtoken';
import { NextFunction, Request, Response } from "express";

export const authentication = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const token = typeof req.headers.token === "string" ? req.headers.token : undefined;

        if (!token) return next(new ErrorHanlder(404, 'Token not found'));
        
        const decoded_token = jwt.decode(token) as { clerkId?: string } | null;

        if (!decoded_token || !decoded_token.clerkId) {
            return next(new ErrorHanlder(404, 'Invalid token'));
        }

        req.body.clerkId = decoded_token.clerkId;
        next();

    } catch (error: any) {
        console.log('error:', error);
        return next(new ErrorHanlder(404, error.message));
    }
};
