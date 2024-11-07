<script lang="ts" setup>
import { UiTree, UiSpinner } from "@/components/ui"
import { type DataReturnType } from "@/api/data/types"
import { useLocale } from "@/store/locale"

import AppHeader from "@/components/app/app-header.vue"

import { DataApi } from "@/api/data"

const locale = useLocale()

const data = ref<DataReturnType[]>()

onMounted(async () => {
  try {
    data.value = await DataApi.getData()
  } catch (error) {
    console.log(error)
  }
})
</script>

<template>
  <div class="main">
    <app-header />
    <template v-if="data">
      <ui-tree :data="data" :locale="locale.getLocale" />
    </template>

    <div v-else="data" class="flex justify-center">
      <ui-spinner />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.main {
  @apply min-h-screen bg-slate-200;
}
</style>
