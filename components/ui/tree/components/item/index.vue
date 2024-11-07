<script lang="ts" setup>
import { UiTree } from "@/components/ui"
import { type TreeItemProps } from "./types"
import { allLanguages } from "@/constants/i18n"

const props = defineProps<TreeItemProps>()

const getLocaleValue = computed(() => {
  const locale = props.data.locale[props.locale]
  if (Object.keys(locale).length > 0) return locale

  for (const language of allLanguages) {
    const validLocale = props.data.locale[language.key]
    if (Object.keys(validLocale).length > 0) return validLocale
  }
})

const getLink = computed(() => {
  return getLocaleValue.value.link + props.data.id
})

const getParentBreadcrumb = computed(() => {
  if (!props.parentBreadcrumb) return getLocaleValue.value.cg_name

  return `${props.parentBreadcrumb} => ${getLocaleValue.value.cg_name}`
})
</script>

<template>
  <li class="ui-tree">
    <div class="ui-tree-item">
      <router-link :to="getLink" class="ui-lable">
        {{ getLocaleValue.cg_name }}
      </router-link>
      <span class="ui-breadcrumb"> {{ getParentBreadcrumb }} </span>
    </div>

    <template v-if="data.childs?.length">
      <ui-tree
        :data="data.childs"
        :locale="locale"
        :parent-breadcrumb="getParentBreadcrumb"
      />
    </template>
  </li>
</template>

<style lang="scss" scoped>
.ui-tree-item {
  display: flex;
  flex-direction: column;

  .ui-breadcrumb {
    font-size: 0.8rem;
    color: gray;
  }
}
</style>
