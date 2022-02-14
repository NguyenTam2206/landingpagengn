import { en } from "./en.js";
import { vi } from "./vi.js";

const messages = {
  en,
  vi
};

export const i18n = {
  strategy: "no_prefix",
  locales: ["vi", "en"],
  defaultLocale: "en",
  vueI18n: {
    fallbackLocale: "en",
    messages
  }
};
