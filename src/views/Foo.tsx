import { defineComponent, ref } from "vue";

export const Foo =
  defineComponent({
    setup() {
      const refCount = ref(111)
      return () => (
        <>
          <div>{refCount.value}</div>
        </>
      )
    }
  })