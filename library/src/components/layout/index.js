import TFlex from './flex.vue'
import TGrid from './grid.vue'
import TContainer from './container.vue'
import TScroll from './scroll.vue'
import TAnimate from './animate.vue'

import { registerComponent } from '../../utils/helper'

const Plugin = {
  install (Vue) {
    registerComponent(Vue, TContainer)
  }
}


export default Plugin

export {
  TContainer,
}