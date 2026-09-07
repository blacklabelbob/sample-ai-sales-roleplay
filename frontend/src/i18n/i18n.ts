import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

// Import language resource files
import jaTranslation from "./locales/ja.json";
import enTranslation from "./locales/en.json";

const resources = {
  ja: {
    translation: jaTranslation,
  },
  en: {
    translation: enTranslation,
  },
};

i18n
  // Use language detection
  .use(LanguageDetector)
  // Use react-i18next plugin
  .use(initReactI18next)
  .init({
    resources,
    // Default language
    fallbackLng: "en",
    // Debug option, true only during development
    debug: process.env.NODE_ENV === "development",

    interpolation: {
      // React already escapes values, so this is not needed
      escapeValue: false,
    },

    // Language detection options
    detection: {
      // Language detection order
      order: ["localStorage", "navigator"],
      // Key name in localStorage
      lookupLocalStorage: "i18nextLng",
      // Save the user's language setting
      caches: ["localStorage"],
    },

    // Wait until translations are loaded during initialization
    initImmediate: false,
  });

export default i18n;
