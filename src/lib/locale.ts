import { englishLocale, type LocaleDefinition } from "@/lib/i18n";
import { frenchLocale } from "@/locales/fr";

export const supportedLocales: readonly LocaleDefinition[] = [englishLocale, frenchLocale];
export const defaultLocale = englishLocale;
