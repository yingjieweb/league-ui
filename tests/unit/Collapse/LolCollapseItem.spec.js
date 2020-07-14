import {expect} from 'chai'
import {mount} from '@vue/test-utils'
import LolCollapse from "../../../src/components/Collapse/LolCollapse"
import LolCollapseItem from "../../../src/components/Collapse/LolCollapseItem"
import Vue from 'vue'

const testData = {
  multiSelect: true,
  selected: ['2'],
  slot: `
    <lol-collapse-item class="one" title="一" name="1">111</lol-collapse-item>
    <lol-collapse-item class="two" title="二" name="2">222</lol-collapse-item>
  `
}

describe('LolCollapseItem.vue', () => {
  it('should exist', () => {
    const wrapper= mount(LolCollapse, {
      propsData: {
        selected: testData.selected,
        multiSelect: testData.multiple
      },
      slots: {
        default: testData.slot
      },
      stubs: {LolCollapseItem}
    })
    expect(wrapper.find('.lol-collapse-item')).to.exist
  })

  describe('props', () => {
    it('renders props.selected when passed', () => {
      const wrapper= mount(LolCollapse, {
        propsData: {
          selected: testData.selected,
          multiSelect: testData.multiSelect
        },
        slots: {
          default: testData.slot
        },
        stubs: {LolCollapseItem}
      })
      expect(wrapper.findAllComponents(LolCollapseItem).at(1).classes('two')).to.exist
    })

    it('props.multiSelect can set to false', () => {
      const wrapper = mount(LolCollapse, {
        propsData: {
          multiSelect: false,
          selected: testData.selected
        },
        slots: {default: testData.slot},
        stubs: { LolCollapseItem }
      })

      wrapper.findAllComponents(LolCollapseItem).at(0).trigger('click')

      expect(wrapper.findAllComponents(LolCollapseItem).at(0).classes()).contains('one')
      expect(wrapper.findAll('.lol-collapse-item-content').length).to.equal(2)
    })

    it('props.multiSelect can set to true', (done) => {
      const wrapper = mount(LolCollapse, {
        propsData: {
          multiSelect: true,
          selected: testData.selected
        },
        slots: {default: testData.slot},
        stubs: { LolCollapseItem }
      })

      wrapper.findAllComponents(LolCollapseItem).at(0).trigger('click')
      Vue.nextTick(() => {
        expect(wrapper.findAll('.lol-collapse-item-content').length).to.equal(2)
        done()
      })
    })
  })
})