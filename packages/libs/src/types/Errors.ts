// Error object used in error handling middleware function
export class AppError extends Error {
  statusCode: number;

  constructor(statusCode: number, message: string) {
    super(message);

    Object.setPrototypeOf(this, new.target.prototype);
    this.name = Error.name;
    this.statusCode = statusCode;
    Error.captureStackTrace(this);
  }
}

export const InvalidInputError = (message: string) => new AppError(400, message);
export const NotFoundError = (message: string) => new AppError(404, message);
export const UnauthorizedError = (message: string) => new AppError(401, message);
export const ForbiddenError = (message: string) => new AppError(403, message);
