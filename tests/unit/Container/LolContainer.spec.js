import {expect} from 'chai'
import {mount} from "@vue/test-utils"
import LolContainer from "../../../src/components/Container/LolContainer"
import LolSider from "../../../src/components/Container/LolSider"
import Vue from 'vue'

const testData = {
  slot: 'Hello'
}

describe('LolContainer.vue', () => {
  it('should exist', () => {
    const wrapper = mount(LolContainer)
    expect(wrapper).to.exist
  })

  it('should pass elements to slot', () => {
    const {slot} = testData
    const wrapper = mount(LolContainer, {
      slots: {
        default: slot
      }
    })
    expect(wrapper.text()).to.equal(slot)
  })

  it('should add hasSider class if contains', (done) => {
    const wrapper = mount(LolContainer, {
      slots: {
        default: '<lol-sider></lol-sider>'
      },
      stubs: {LolSider}
    })

    Vue.nextTick(() => {
      expect(wrapper.classes().includes('lol-container-has-sider')).to.equal(true)
      done()
    })
  })
})