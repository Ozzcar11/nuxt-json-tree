<script lang="ts" setup>
import { UiTree } from "@/components/ui"
import { type TreeItemProps } from "./types"
import { allLanguages } from "@/constants/i18n"

const props = defineProps<TreeItemProps>()

const isOpen = ref(false)

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
  <li class="ui-tree-item">
    <div
      class="flex w-full hover:bg-slate-300 hover:rounded-md"
      @click="isOpen = !isOpen"
    >
      <span class="ui-tree-item__expand">{{ isOpen ? "-" : "+" }}</span>
      <span class="ui-tree-item__container">
        <router-link :to="getLink" class="ui-tree-item__lable">
          {{ getLocaleValue.cg_name }}
        </router-link>
        <span class="ui-tree-item__breadcrumb">
          {{ getParentBreadcrumb }}
        </span>
      </span>
    </div>

    <template v-if="data.childs?.length">
      <ui-tree
        class="ui-tree-item__childs"
        :class="{ 'ui-tree-item--open': isOpen }"
        :data="data.childs"
        :locale="locale"
        :parent-breadcrumb="getParentBreadcrumb"
      />
    </template>
  </li>
</template>

<style lang="scss" scoped>
.ui-tree-item {
  @apply relative cursor-pointer;

  &__container {
    @apply flex flex-col items-start;
  }

  &__expand {
    @apply flex items-center py-2 px-4;
  }

  &__lable {
    @apply hover:underline inline-block w-auto;
  }

  &__breadcrumb {
    font-size: 0.8rem;
    color: gray;
  }

  &__childs {
    @apply h-0 overflow-hidden transition-all duration-300 ease-in-out;
  }

  &--open {
    @apply h-auto overflow-auto;
  }
}
</style>
