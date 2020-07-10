import {expect} from 'chai'
import {mount} from "@vue/test-utils"
import LolRow from "../../../src/components/Layoyt/LolRow"
import LolCol from "../../../src/components/Layoyt/LolCol"
import Vue from 'vue'

Vue.component('lol-row', LolRow)
Vue.component('lol-col', LolCol)

const testData = {
  gutter: 10,
  aligns: ['left', 'right', 'center']
}

describe('LolRow.vue', () => {
  it('should exist', () => {
    const wrapper = mount(LolRow)
    expect(wrapper).to.exist
  })

  describe('props', () => {
    it('renders props.gutter when passed', (done) => {
      const {gutter} = testData
      const wrapper = mount(LolRow, {
        slots: {
          default: `
            <lol-col :pc="{span: 12}"></lol-col>
            <lol-col :pc="{span: 12}"></lol-col>
          `
        },
        stubs: {
          LolCol
        },
        propsData: { gutter },
      })

      Vue.nextTick(() => {
        expect(wrapper.findComponent(LolCol).element.style.paddingLeft).to.equal(`${gutter / 2}px`)
        done()
      })
    })

    it('renders props.align when passed', () => {
      const {aligns} = testData
      aligns.forEach((align) => {
        const wrapper = mount(LolRow, {
          slots: {
            default: `
            <lol-col :pc="{span: 12}"></lol-col>
            <lol-col :pc="{span: 12}"></lol-col>
          `
          },
          stubs: {
            LolRow
          },
          propsData: { align }
        })
        expect(wrapper.classes().includes(`lol-row-align-${align}`)).to.equal(true)
      })
    })
  })
})
