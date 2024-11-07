import { type TreeValue } from "../../types"

export type TreeItemProps = {
  data: TreeValue
  locale: string
  parentBreadcrumb?: string
}