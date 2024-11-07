import { allLanguages } from "@/constants/i18n";
import { type LanguageType } from "@/types/i18n"

export const useLocale = defineStore('locale', () => {
  const locale = ref(allLanguages[0].key);

  function setLocale(key: LanguageType) {
    locale.value = key
  }

  const getLocale = computed(() => {
    return locale.value
  })

  return {
    setLocale,
    getLocale
  }
});