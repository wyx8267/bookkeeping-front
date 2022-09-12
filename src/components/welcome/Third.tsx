import { defineComponent } from 'vue';
import { RouterLink } from 'vue-router';
import chart from '../../assets/icons/chart.svg'
import { WelcomeLayout } from './WelcomeLayout';
import s from './WelcomeLayout.module.scss'

export const Third = defineComponent({
  setup: (props, context) => {
    return () => (
      <WelcomeLayout>
        {{
          icon: () => <img src={chart} />,
          title: () => <h2>数据可视化<br />收支一目了然</h2>,
          buttons: () => <>
            <RouterLink to="/start" class={s.fake}>跳过</RouterLink>
            <RouterLink to="/welcome/4">下一页</RouterLink>
            <RouterLink to="/start">跳过</RouterLink>
          </>
        }}
      </WelcomeLayout>
    )
  }
})