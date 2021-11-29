import { HttpErrorCode } from '@src/types';

abstract class CustomError extends Error {
  abstract statusCode: HttpErrorCode;

  constructor(message: string) {
    super(message);
    Object.setPrototypeOf(this, CustomError.prototype);
  }
}

/**
 * Http Request Error
 * @param statusCode HTTP status code
 * @param message Error
 * @example
 * ```
 * if (err instanceof HttpError) {
 *   return res.status(err.statusCode).json({ message:err.message });
 * }
 * ```
 */
export const HttpError = class extends CustomError {
  statusCode: HttpErrorCode;

  constructor(statusCode: HttpErrorCode = 500, message = '') {
    super(message);
    this.statusCode = statusCode;
    Object.setPrototypeOf(this, HttpError.prototype);
  }
};

/**
 * Custom Error for list of errors
 * @example
 * ```
 * if (err instanceof CustomError) {
 * return ({ errors: err.serializeErrors() });
 * }
 * ```
 */
// abstract class CustomError extends Error {
//   abstract statusCode: number;

//   constructor(message: string) {
//     super(message);
//     Object.setPrototypeOf(this, CustomError.prototype);
//   }

//   abstract serializeErrors(): {
//     message: string;
//     code?: string;
//   }[];
// }
