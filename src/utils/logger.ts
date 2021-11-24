import pino from 'pino';

const { NODE_ENV } = process.env;

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
      }).child({}, { formatters: { bindings: () => ({ hostname: 'APP' }) } })
    : pino({ level: 'info', base: undefined }).child({ hostname: 'APP' });

/**
 * Creates a child logger for a module
 * @param {string} module name of the module, as hostname in Prod
 * @returns {pino.Logger} child pino logger
 */
export const makeLogger = (module: string): pino.Logger => {
  return logger.child({}, { formatters: { bindings: () => ({ hostname: module }) } });
};

export default logger;
