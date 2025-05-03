declare global {
  namespace NodeJS {
    interface ProcessEnv {
      AUTH_SECRET: string | null;
      AUTH_GOOGLE_ID: string | null;
      AUTH_GOOGLE_SECRET: string | null;
      DATABASE_URL: string | null;
      DB_USER: string | null;
      DB_PASSWORD: string | null;
      DB_NAME: string | null;
    }
  }
}

export {};