import { domainToUnicode } from "url";
import ErrorHanlder from "../utils/Error"
import jwt from 'jsonwebtoken'
import { NextFunction, Request, Response } from "express";



export const authentication = async (req: Request, res: Response, next: NextFunction) => {

    try {

        const { token } = req.headers
        if (!token) return next(new ErrorHanlder(404, 'Token not found'));
        const decoded_token = jwt.decode(token)
        if (!decoded_token) return next(new ErrorHanlder(404, 'Invalid token'));

        req.body.clerkId = decoded_token.clerkId;
        next()

    } catch (error) {
        console.log('error:', error)
        new ErrorHanlder(404, error.message);

    }

}