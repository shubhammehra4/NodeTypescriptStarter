declare namespace NodeJS {
  interface ProcessEnv {
    APP_NAME: string;
    PORT: string;
    NODE_ENV: 'production' | 'development';
    DATABASE_URL: string;
  }
}
