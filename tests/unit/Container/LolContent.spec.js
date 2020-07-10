import {expect} from 'chai'
import {mount} from "@vue/test-utils"
import LolContent from "../../../src/components/Container/LolContent"

const testData = {
  slot: 'Hello'
}

describe('LolContent.vue', () => {
  it('should exist', () => {
    const wrapper = mount(LolContent)
    expect(wrapper).to.exist
  })

  it('should pass elements to slot', () => {
    const {slot} = testData
    const wrapper = mount(LolContent, {
      slots: {
        default: slot
      }
    })
    expect(wrapper.text()).to.equal(slot)
  })
})