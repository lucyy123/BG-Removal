import { NextFunction, Request, Response } from "express";
import ErrorHanlder from "../utils/Error";


export const ErrorMiddleware = async (error:ErrorHanlder, req:Request, res:Response, next:NextFunction)=>{

error.statusCode = error.statusCode || 500;
error.message = error.message || "Internal Server Error"



res.status(error.statusCode).json({
    message:error.message,
    success:false
})

}