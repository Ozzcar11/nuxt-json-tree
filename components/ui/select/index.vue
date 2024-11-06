<script lang="ts" setup>
import { type SelectProps } from "./types"
defineProps<SelectProps>()

const model = defineModel()
</script>

<template>
  <select v-model="model">
    <option v-for="(option, index) in options" :value="index">
      {{ option.value }}
    </option>
  </select>
</template>

<style lang="scss" scoped></style>
