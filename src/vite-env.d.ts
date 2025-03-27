/// <reference types="vite/client" />

interface ImportMetaEnv {
  // Add env variables here
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
  glob(pattern: string, options?: { eager: boolean }): Record<string, any>;
} 