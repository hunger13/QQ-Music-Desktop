import Tab from './Tab.vue'
import Tabs from './Tabs.vue'

export default {
  install(Vue) {
    Vue.component('Tabs', Tabs)
    Vue.component('Tab', Tab)
  }
}

export { Tab, Tabs }