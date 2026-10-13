import { englishLocale, type LocaleDefinition } from "@/lib/i18n";
import { russianLocale } from "@/locales/ru";

export const supportedLocales: readonly LocaleDefinition[] = [englishLocale, russianLocale];
export const defaultLocale = englishLocale;
