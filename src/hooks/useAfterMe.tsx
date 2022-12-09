import { onMounted } from "vue"
import { useMeStore } from "../stores/useMeStore"

export const useAfterMe = (fn: () => void) => {
  onMounted(async () => {
    const meStore = useMeStore()
    meStore.mePromise!.then(fn, () => undefined)
  })
}