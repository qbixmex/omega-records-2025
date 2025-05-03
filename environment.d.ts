declare global {
  namespace NodeJS {
    interface ProcessEnv {
      AUTH_SECRET: string | null;
      AUTH_GOOGLE_ID: string | null;
      AUTH_GOOGLE_SECRET: string | null;
    }
  }
}

export {};