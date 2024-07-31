import { Request, Response, NextFunction } from "express";
import HttpError from "../errors/httpError";

export default function errorMiddleware(
  err: Error,
  req: Request,
  res: Response,
  next: NextFunction
) {
  if (err instanceof HttpError) {
    return res.status(err.statusCode).json({ message: err.message });
  }

  const statusCode = 500;
  const message = "An unexpected error occurred.";

  res.status(statusCode).json({ message });
}
