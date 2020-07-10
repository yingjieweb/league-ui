import {expect} from 'chai'
import {mount} from "@vue/test-utils"
import LolHeader from "../../../src/components/Container/LolHeader"

const testData = {
  slot: 'Hello',
}

describe('LolHeader.vue', () => {
  it('should exist', () => {
    const wrapper = mount(LolHeader)
    expect(wrapper).to.exist
  })

  it('should pass elements to slot', () => {
    const {slot} = testData
    const wrapper = mount(LolHeader, {
      slots: {
        default: slot
      }
    })
    expect(wrapper.text()).to.equal(slot)
  })
})