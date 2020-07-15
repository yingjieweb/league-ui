import {expect} from 'chai'
import {mount} from '@vue/test-utils'
import LolBadge from "../../../src/components/Badge/LolBadge"

describe('LolBadge.vue', () => {
  it('should exist', () => {
    const wrapper = mount(LolBadge)
    expect(wrapper).to.exist
  })

  describe('props', () => {
    it('renders props.title when passed', () => {
      const wrapper = mount(LolBadge, {
        propsData: {
          title: 'New'
        },
        slots: '<span>Badge</span>'
      })
      expect(wrapper.find('.lol-badge-none').text()).to.equal('New')
    })

    it('renders props.isDot when passed', () => {
      const wrapper = mount(LolBadge, {
        propsData: {
          isDot: true
        }
      })
      expect(wrapper.find('.lol-badge-dot')).to.exist
    })
  })
})