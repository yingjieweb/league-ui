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

describe('LolTabsItem.vue', () => {

  it('exist.', () => {
    expect(LolTabsItem).to.exist
  })

  describe('props', () => {
    it('should pass props.name', () => {
      const Constructor = Vue.extend(LolTabsItem)
      const vm = new Constructor({
        propsData: {
          name: 'xxx',
        }
      }).$mount()
      expect(vm.$el.getAttribute('data-name')).to.eq('xxx')
    })
    it('should pass props.disabled', () => {
      const Constructor = Vue.extend(LolTabsItem)
      const vm = new Constructor({
        propsData: {
          disabled: true,
        }
      }).$mount()
      expect(vm.$el.classList.contains('lol-tabs-item_disabled')).to.be.true
      const callback = sinon.fake();
      vm.$on('click', callback)
      vm.$el.click()
      expect(callback).to.have.not.been.called
    })
  })
})