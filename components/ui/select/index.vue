<script lang="ts" setup>
import { type SelectProps } from "./types"
defineProps<SelectProps>()

const model = defineModel<string>()
</script>

<template>
  <select v-model="model" class="ui-select">
    <option
      v-for="(option, index) in options"
      :key="index"
      :value="option.key"
      class="ui-select__option"
    >
      {{ option.value }}
    </option>
  </select>
</template>

<style lang="scss" scoped>
.ui-select {
  @apply border rounded py-1 px-2 outline-slate-300;
}
</style>
