import { contentEn } from "./content/en";
import { contentEs } from "./content/es";
import { Language, type Locale, type PortfolioData, type UiCopy } from "./types";

export * from "./types";

type LocalizedContent = {
  portfolio: PortfolioData;
  ui: UiCopy;
};

const localizedContent: Record<Locale, LocalizedContent> = {
  es: contentEs,
  en: contentEn,
};

export class ContentStore {
  static supportedLocales: Locale[] = [Language.ES, Language.EN];

  static resolveLocaleFromPathname(pathname: string): Locale {
    const segment = pathname.split("/").filter(Boolean)[0];
    if (segment && ContentStore.supportedLocales.includes(segment as Locale)) {
      return segment as Locale;
    }
    return Language.ES;
  }

  static getPortfolioData(locale: Locale = Language.ES): PortfolioData {
    return localizedContent[locale].portfolio;
  }

  static getUiCopy(locale: Locale): UiCopy {
    return localizedContent[locale].ui;
  }
}
