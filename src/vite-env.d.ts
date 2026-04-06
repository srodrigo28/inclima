/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_CONTACT_PHONE: string;
  readonly VITE_CONTACT_EMAIL: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
