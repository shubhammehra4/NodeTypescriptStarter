type SuccessResponse<T> = [true, T];
type ErrorResponse<U> = [false, U];
type InvokerResult<T, U> = Promise<SuccessResponse<T> | ErrorResponse<U>>;

/**
 * Custom invoker that wraps around a promise to handle errors
 * @param promise
 * @returns {InvokerResult} [true, result] or [false, error]
 */
export const promiseInvoker = async <T, U extends Error>(
  promise: Promise<T>
): InvokerResult<T, U> => {
  return promise
    .then<SuccessResponse<T>>((data) => [true, data])
    .catch((error) => Promise.resolve([false, error]));
};
