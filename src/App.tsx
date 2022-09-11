import { defineComponent, ref } from "vue"
import { RouterView } from "vue-router"

export const App = defineComponent({
  setup() {
    return () => (
      <>
        <header>
          <ul>
            <li><router-link to="/">Home</router-link></li>
            <li><router-link to="/about">About</router-link></li>
          </ul>
        </header>
        <RouterView />
        <footer>页脚</footer>
      </>
    )
  }
})