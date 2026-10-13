import { englishLocale, type LocaleDefinition } from "@/lib/i18n";
import { kannadaLocale } from "@/locales/kn";

export const supportedLocales: readonly LocaleDefinition[] = [englishLocale, kannadaLocale];
export const defaultLocale = englishLocale;
