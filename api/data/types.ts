import { type LanguageType } from "@/types/i18n"

export type LocaleType = {
  id: number
  cg_name: string
  cg_description: string
  cg_title: string
  cg_slug: string
  meta_description: string
  meta_keywords: string
  link: string
}

export type DataReturnType = {
  id: number
  depth: number
  numchild: number
  category_image: string
  logo_image: string
  menu_image: string
  separate_menu: boolean
  c_images: number
  product_rep_1_id: number
  product_rep_2_id: number
  c_views: number
  og: null
  twitter: null
  locale: Record<LanguageType, LocaleType>
  path_to_top: number[]
  childs: DataReturnType[]
}