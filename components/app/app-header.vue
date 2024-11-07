<script setup lang="ts">
import { allLanguages } from "@/constants/i18n"
import { UiSelect } from "@/components/ui"
import { useLocale } from "@/store/locale"
import { type LanguageType } from "@/types/i18n"

const locale = useLocale()

const selectHandler = computed({
  get() {
    return locale.getLocale
  },
  set(value: LanguageType) {
    locale.setLocale(value)
  },
})
</script>

<template>
  <header class="header">
    <ui-select v-model="selectHandler" :options="allLanguages" />
  </header>
</template>

<style lang="scss" scoped>
.header {
  @apply flex items-center justify-center p-4;
}
</style>
