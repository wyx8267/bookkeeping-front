import { RouterLink } from 'vue-router';
import s from './welcome.module.scss'

export const FourthActions = () => {
  return (
    <div class={s.actions}>
      <RouterLink to="/start" class={s.fake}>跳过</RouterLink>
      <RouterLink to="/start">开启应用</RouterLink>
      <RouterLink to="/start" class={s.fake}>跳过</RouterLink>
    </div>
  )
}

FourthActions.displayName = 'FourthActions'