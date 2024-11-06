type SelectValue = {
  value: unknown
  key: string | number
}

export type SelectProps = {
  modelValue: SelectValue
  options: SelectValue[]
}