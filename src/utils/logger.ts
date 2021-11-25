import pino from 'pino';

const { NODE_ENV, APP_NAME } = process.env;

/**
 * Custom pino logger
 *
 * info, warn, error - logs to stdout in Prod/Dev env
 *
 * debug - logs to stdout in DEV env
 */
const logger =
  NODE_ENV !== 'production'
    ? pino({
        level: 'debug',
        transport: {
          target: 'pino-pretty',
          options: {
            colorize: true,
            ignore: 'time,pid,hostname',
            messageFormat: '[{hostname}] {msg}',
          },
        },
        formatters: { bindings: () => ({ hostname: APP_NAME }) },
      })
    : pino({
        level: 'info',
        base: undefined,
        formatters: { bindings: () => ({ hostname: APP_NAME }) },
      });

/**
 * Creates a logger for a specified module
 * @param {string} module name of the module, as hostname in Prod
 * @returns {pino.Logger} child pino logger
 */
export const makeModuleLogger = (module: string): pino.Logger => {
  return logger.child({}, { formatters: { bindings: () => ({ hostname: module }) } });
};

export default logger;
