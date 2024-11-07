import { type DataReturnType } from "./types"

export const DataApi = {
  async getData(): Promise<DataReturnType[]> {
    return await $fetch<DataReturnType[]>("/api/getDataFromTxt");
  }
}