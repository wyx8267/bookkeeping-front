import { RouterLink } from 'vue-router';
import s from './welcome.module.scss'
import { SkipFeatures } from '../../shared/SkipFeatures';

export const FourthActions = () => {
  const onClick = () => {
    localStorage.setItem('skipFeatures', 'yes')
  }
  return (
    <div class={s.actions}>
      <SkipFeatures class={s.fake} />
      <span onClick={onClick}>
        <RouterLink to="/start">开启应用</RouterLink>
      </span>
      <SkipFeatures class={s.fake} />
    </div>
  )
}

FourthActions.displayName = 'FourthActions'