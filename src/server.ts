import logger, { makeLogger } from './utils/logger';

async function main() {
  const { APP_NAME, NODE_ENV, PORT } = process.env;

  logger.info({ message: 'Hello World', APP_NAME, NODE_ENV, PORT });

  const childeLogger = makeLogger('Query');
  childeLogger.info('child');
}

export default main;
