import TContainer from './container.vue'

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