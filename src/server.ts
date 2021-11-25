import logger, { makeModuleLogger } from './utils/logger';

async function main() {
  const { APP_NAME, NODE_ENV, PORT } = process.env;

  logger.info({ message: 'Hello World', APP_NAME, NODE_ENV, PORT });
  logger.debug('Debugging');

  const queryLogger = makeModuleLogger('Query');
  queryLogger.info('a query log');
}

export default main;
