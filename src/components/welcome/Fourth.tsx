import cloud from '../../assets/icons/cloud.svg'
import s from './welcome.module.scss'

export const Fourth = () => {
  return (
    <div class={s.card}>
      <img src={cloud} />
      <h2>云备份<br />再也不怕数据丢失</h2>
    </div>
  )
}

Fourth.displayName = 'Fourth'