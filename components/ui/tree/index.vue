<script lang="ts" setup>
import { UiTreeItem } from "@/components/ui"
import { type TreeProps } from "./types"

defineProps<TreeProps>()
</script>

<template>
  <ul class="ui-tree">
    <ui-tree-item
      v-for="item in data"
      :data="item"
      :locale="locale"
      :parent-breadcrumb="parentBreadcrumb"
    />
  </ul>
</template>

<style lang="scss" scoped>
.ui-tree {
  @apply ml-4;
}
</style>
