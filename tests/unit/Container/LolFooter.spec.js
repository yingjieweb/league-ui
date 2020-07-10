import {expect} from 'chai'
import {mount} from "@vue/test-utils"
import LolFooter from "../../../src/components/Container/LolFooter"

const testData = {
  slot: 'Hello'
}

describe('LolFooter.vue', () => {
  it('should exist', () => {
    const wrapper = mount(LolFooter)
    expect(wrapper).to.exist
  })

  it('should pass elements to slot', () => {
    const {slot} = testData
    const wrapper = mount(LolFooter, {
      slots: {
        default: slot
      }
    })
    expect(wrapper.text()).to.equal(slot)
  })
})