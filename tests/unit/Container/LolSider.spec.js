import {expect} from 'chai'
import {mount} from "@vue/test-utils"
import LolSider from "../../../src/components/Container/LolSider"

const testData = {
  slot: 'Hello',
  visible: false
}

describe('LolSider.vue', () => {
  it('should exist', () => {
    const wrapper = mount(LolSider)
    expect(wrapper).to.exist
  })

  it('should pass elements to slot', () => {
    const {slot} = testData
    const wrapper = mount(LolSider, {
      slots: {
        default: slot
      }
    })
    expect(wrapper.text()).to.equal(slot)
  })

  it('should pass props.visible to slot', () => {
    const {slot, visible} = testData
    const wrapper = mount(LolSider, {
      propsData: {visible},
      slot: {default: slot}
    })
    expect(wrapper.text()).to.equal('')
  })
})