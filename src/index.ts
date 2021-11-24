import 'dotenv-safe/config';
import main from './server';

main()
  .catch((error: unknown) => {
    console.error(error);
  })
  .finally(() => {
    console.error('Server going down bye...');
  });
