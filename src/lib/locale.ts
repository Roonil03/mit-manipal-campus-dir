import { englishLocale, type LocaleDefinition } from "@/lib/i18n";
import { hindiLocale } from "@/locales/hi";

export const supportedLocales: readonly LocaleDefinition[] = [englishLocale, hindiLocale];
export const defaultLocale = englishLocale;
