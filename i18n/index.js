import { en } from "./en.js";
import { vi } from "./vi.js";

const messages = {
  en,
  vi
};

export const i18n = {
  strategy: "no_prefix",
  locales: ["vi", "en"],
  defaultLocale: "vi",
  vueI18n: {
    fallbackLocale: "vi",
    messages
  }
};
