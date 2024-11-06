<script lang="ts" setup>
import { allLanguages } from "@/constants/i18n"

const data = ref(null)

const i18n = ref(null)

onMounted(async () => {
  try {
    const response = await $fetch("/api/getDataFromTxt")
    data.value = response
  } catch (error) {
    console.log(error)
  }
})
</script>

<template>
  <div>
    <ui-select v-model="i18n" :options="allLanguages" />
  </div>
</template>

<style lang="scss" scoped></style>
