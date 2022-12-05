import { RouterLink } from 'vue-router'
import s from './welcome.module.scss'
import { SkipFeatures } from '../../shared/SkipFeatures'

export const SecondActions = {
  render: () => (
    <div class={s.actions}>
      <SkipFeatures class={s.fake} />
      <RouterLink to="/welcome/3">下一页</RouterLink>
      <SkipFeatures />
    </div>
  )
}
