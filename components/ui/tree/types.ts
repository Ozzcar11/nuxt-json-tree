export type TreeValue = {
  [key: string]: any
  childs?: TreeValue[]
}

export type TreeProps = {
  data: TreeValue[]
  locale: string
  parentBreadcrumb?: string
}