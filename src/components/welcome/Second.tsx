import clock from '../../assets/icons/clock.svg'
import s from './welcome.module.scss'

export const Second = {
  render: () => (
    <div class={s.card}>
      <img src={clock} />
      <h2>每日提醒<br />不遗漏每一笔账单</h2>
    </div>
  )
}