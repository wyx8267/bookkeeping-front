import { defineComponent, ref } from "vue"

export const App = defineComponent({
  setup() {
    const refCount = ref(0)
    const onclick = () => {
      refCount.value += 1
    }
    return () => (
      <>
        <div>{refCount.value}</div>
        <button onClick={onclick}>+1</button>
      </>
    )
  }
})