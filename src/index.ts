import 'dotenv-safe/config';
import main from '@src/server';
import logger from '@utils/logger';

main()
  .catch((error: unknown) => {
    logger.error(error);
  })
  .finally(() => {
    logger.info('Server going down bye...');
  });
