import { type LanguageType } from "@/types/i18n"

type AllLanguages = {
  key: LanguageType,
  value: string
}

export const allLanguages: AllLanguages[] = [
  {
    key: "ru",
    value: "Русский",
  },
  {
    key: "en",
    value: "Английский",
  },
  {
    key: "fr",
    value: "Французкий",
  },
] as const