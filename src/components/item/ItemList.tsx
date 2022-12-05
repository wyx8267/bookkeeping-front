import { defineComponent } from 'vue'
import { TimeTabsLayout } from '../../layouts/TimeTabsLayout'
import s from './ItemList.module.scss'
import { ItemSummary } from './ItemSummary'
export const ItemList = defineComponent({
  setup: (props, context) => {
    return () => <TimeTabsLayout component={ItemSummary} />
  }
})
