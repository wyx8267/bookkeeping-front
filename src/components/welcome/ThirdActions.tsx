import { defineComponent } from 'vue';
import { RouterLink } from 'vue-router';
import s from './welcome.module.scss'
import { SkipFeatures } from '../../shared/SkipFeatures';

export const ThirdActions = defineComponent({
  setup: (props, context) => {
    return () => (
      <div class={s.actions}>
        <SkipFeatures class={s.fake} />
        <RouterLink to="/welcome/4">下一页</RouterLink>
        <SkipFeatures />
      </div>
    )
  }
})