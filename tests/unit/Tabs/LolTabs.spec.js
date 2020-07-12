import {expect} from 'chai'
import {mount} from '@vue/test-utils'
import LolTabs from "../../../src/components/Tabs/LolTabs"
import LolTabsHead from "../../../src/components/Tabs/LolTabsHead"
import LolTabsItem from "../../../src/components/Tabs/LolTabsItem"
import LolTabsBody from "../../../src/components/Tabs/LolTabsBody"
import LolTabsPane from "../../../src/components/Tabs/LolTabsPane"
import Vue from 'vue'

Vue.component('lol-tabs', LolTabs)
Vue.component('lol-tabs-head', LolTabsHead)
Vue.component('lol-tabs-item', LolTabsItem)
Vue.component('lol-tabs-body', LolTabsBody)
Vue.component('lol-tabs-pane', LolTabsPane)

const testData = {
  selected: 'career',
  slot: `<lol-tabs-head>
    <lol-tabs-item name="heroes">heroes</lol-tabs-item>
    <lol-tabs-item name="career">career</lol-tabs-item>
    <lol-tabs-item name="position">position</lol-tabs-item>
  </lol-tabs-head>
  <lol-tabs-body>
    <lol-tabs-pane name="heroes">heroes</lol-tabs-pane>
    <lol-tabs-pane name="career">career</lol-tabs-pane>
    <lol-tabs-pane name="position">position</lol-tabs-pane>
  </lol-tabs-body>`
}

describe('LolTabs.vue', () => {
  it('should exist', () => {
    const {selected, slot} = testData
    const wrapper = mount(LolTabs, {
      propsData: {selected},
      slots: {default: slot},
      stubs: { LolTabsHead, LolTabsBody, LolTabsItem, LolTabsPane }
    })
    expect(wrapper).to.exist
  })

  describe('props', () => {
    it('should pass props.selected', () => {
      const {slot, selected} = testData
      const wrapper = mount(LolTabs, {
        propsData: {selected},
        slots: { default: slot },
        stubs: { LolTabsHead, LolTabsBody, LolTabsItem, LolTabsPane }
      })
      wrapper.findComponent(LolTabsItem).trigger('click')
      expect(wrapper.findComponent(LolTabsPane).text()).to.equal('heroes')
    })
  })
})