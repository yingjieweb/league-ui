import Vue from 'vue'

const expect = chai.expect
import LolTabs from "../../../src/components/Tabs/LolTabs"
import LolTabsHead from "../../../src/components/Tabs/LolTabsHead"
import LolTabsItem from "../../../src/components/Tabs/LolTabsItem"
import LolTabsBody from "../../../src/components/Tabs/LolTabsBody"
import LolTabsPane from "../../../src/components/Tabs/LolTabsPane"

Vue.component('lol-tabs', LolTabs)
Vue.component('lol-tabs-head', LolTabsHead)
Vue.component('lol-tabs-item', LolTabsItem)
Vue.component('lol-tabs-body', LolTabsBody)
Vue.component('lol-tabs-pane', LolTabsPane)

Vue.config.productionTip = false
Vue.config.devtools = false

describe('LolTabsPane.vue', () => {

  it('exist.', () => {
    expect(LolTabsPane).to.exist
  })

  describe('props', () => {
    it('should pass props.name', () => {
      const Constructor = Vue.extend(LolTabsPane)
      const vm = new Constructor({
        propsData: {
          name: 'xxx',
        }
      }).$mount()
      expect(vm.$el.getAttribute('data-name')).to.eq('xxx')
    })
  })
})