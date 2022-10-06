import { defineComponent } from 'vue';
import { RouterLink } from 'vue-router';
import s from './welcome.module.scss'

export const ThirdActions = defineComponent({
  setup: (props, context) => {
    return () => (
      <div class={s.actions}>
        <RouterLink to="/start" class={s.fake}>跳过</RouterLink>
        <RouterLink to="/welcome/4">下一页</RouterLink>
        <RouterLink to="/start">跳过</RouterLink>
      </div>
    )
  }
})