import {expect} from 'chai'
import sinon from "sinon"
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

describe('LolTabsItem.vue', () => {
  it('should exist', () => {
    const {selected, slot} = testData
    const wrapper = mount(LolTabs, {
      propsData: {selected},
      slots: {default: slot},
      stubs: {LolTabsHead, LolTabsBody, LolTabsItem, LolTabsPane}
    })
    expect(wrapper.findComponent(LolTabsItem)).to.exist
  })

  describe('props', () => {
    xit('should pass props.name', () => {
      const wrapper = mount(LolTabsItem, {
        propsData: {
          name: 'erha'
        }
      })
      expect(wrapper.attributes('data-name')).to.eq('erha')
    })

    xit('should pass props.disabled', () => {
      const eventHandler = sinon.stub()
      const wrapper = mount(LolTabsItem, {
        propsData: {disabled: true},
        listeners: {click: eventHandler}
      })
      expect(wrapper.classes().includes('lol-tabs-item_disabled')).to.equal(true)
      wrapper.trigger('click')
      expect(eventHandler.called).to.equal(false)
    })
  })
})