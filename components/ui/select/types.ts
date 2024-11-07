export type SelectValue = {
  value: unknown
  key: string | number
}

export type SelectProps = {
  modelValue: string
  options: SelectValue[]
}