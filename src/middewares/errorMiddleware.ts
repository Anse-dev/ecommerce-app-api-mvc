import { Request, Response, NextFunction } from 'express';
import { ErrorHandler, handleError } from '../utils/errorHandler';

const errorMiddleware = (err: ErrorHandler, req: Request, res: Response, next: NextFunction) => {
    handleError(err, res);
};

export default errorMiddleware;
