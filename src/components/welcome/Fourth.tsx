import { FunctionalComponent } from 'vue';
import { RouterLink } from 'vue-router';
import cloud from '../../assets/icons/cloud.svg'
import { WelcomeLayout } from './WelcomeLayout';
import s from './WelcomeLayout.module.scss'

export const Fourth = {
  render: () => {
    const slots = {
      icon: () => <img src={cloud} />,
          title: () => <h2>云备份<br />再也不怕数据丢失</h2>,
          buttons: () => <>
            <RouterLink to="/start" class={s.fake}>跳过</RouterLink>
            <RouterLink to="/start">开启应用</RouterLink>
            <RouterLink to="/start" class={s.fake}>跳过</RouterLink>
          </>
    }
    return (
      <WelcomeLayout v-slots={slots} />
    )
  }
}