import {expect} from 'chai'
import {mount} from "@vue/test-utils"
import LolCol from "../../../src/components/Layoyt/LolCol"

const testData = {
  span: 5,
  offset: 5,
  iPad: {span: 2, offset: 2},
  narrowPc: {span: 2, offset: 2},
  pc: {span: 2, offset: 2},
  widePc: {span: 2, offset: 2}
}

describe('LolCol.vue', () => {
  it('should exist', () => {
    const wrapper = mount(LolCol)
    expect(wrapper).to.exist
  })

  describe('props', () => {
    it('renders props.span/offset when passed', () => {
      const {span, offset} = testData
      const wrapper = mount(LolCol, {
        propsData: {
          span: span,
          offset: offset
        }
      })
      expect(wrapper.classes().includes(`lol-col-span-${span}`)).to.equal(true)
      expect(wrapper.classes().includes(`lol-col-offset-${offset}`)).to.equal(true)
    })
    it('renders props.iPad when passed', () => {
      const {iPad} = testData
      const wrapper = mount(LolCol, {
        propsData: {
          iPad: iPad
        }
      })
      expect(wrapper.classes().includes(`lol-col-iPad-span-${iPad.span}`)).to.equal(true)
      expect(wrapper.classes().includes(`lol-col-iPad-offset-${iPad.offset}`)).to.equal(true)
    })
    it('renders props.narrowPc when passed', () => {
      const {narrowPc} = testData
      const wrapper = mount(LolCol, {
        propsData: {
          narrowPc: narrowPc
        }
      })
      expect(wrapper.classes().includes(`lol-col-narrowPc-span-${narrowPc.span}`)).to.equal(true)
      expect(wrapper.classes().includes(`lol-col-narrowPc-offset-${narrowPc.offset}`)).to.equal(true)
    })
    it('renders props.pc when passed', () => {
      const {pc} = testData
      const wrapper = mount(LolCol, {
        propsData: {
          pc: pc
        }
      })
      expect(wrapper.classes().includes(`lol-col-pc-span-${pc.span}`)).to.equal(true)
      expect(wrapper.classes().includes(`lol-col-pc-offset-${pc.offset}`)).to.equal(true)
    })
    it('renders props.widePc when passed', () => {
      const {widePc} = testData
      const wrapper = mount(LolCol, {
        propsData: {
          widePc: widePc
        }
      })
      expect(wrapper.classes().includes(`lol-col-widePc-span-${widePc.span}`)).to.equal(true)
      expect(wrapper.classes().includes(`lol-col-widePc-offset-${widePc.offset}`)).to.equal(true)
    })
  })
})