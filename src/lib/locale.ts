import { englishLocale, type LocaleDefinition } from "@/lib/i18n";
import { japaneseLocale } from "@/locales/ja";

export const supportedLocales: readonly LocaleDefinition[] = [englishLocale, japaneseLocale];
export const defaultLocale = englishLocale;
