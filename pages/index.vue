<script lang="ts" setup>
import { UiTree } from "@/components/ui"
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
  <div>
    <app-header />
    <template v-if="data">
      <ui-tree :data="data" :locale="locale.getLocale" />
    </template>

    <div v-else="data">...Тут должен быть спиннер</div>
  </div>
</template>

<style lang="scss" scoped>
.child {
  margin-left: 20px;
}
</style>
