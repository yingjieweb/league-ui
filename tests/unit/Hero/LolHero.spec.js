import {expect} from 'chai'
import {mount} from '@vue/test-utils'
import LolHero from "../../../src/components/Hero/LolHero"

describe('LolHero.vue', () => {
  it('should exist', () => {
    const wrapper = mount(LolHero)
    expect(wrapper).to.exist
  })

  describe('props', () => {
    it('renders props.hero when passed', () => {
      const wrapper = mount(LolHero, {
        propsData: {
          hero: 'Vi'
        }
      })
      expect(wrapper.find('.lol-hero-avatar').attributes().style).to.equal('background-image: url("https://game.gtimg.cn/images/lol/act/img/champion/Vi.png");');
    })

    it('renders props.size when passed', () => {
      const wrapper = mount(LolHero, {
        propsData: {
          hero: 'Vi',
          size: 'large'
        }
      })

      expect(wrapper.find('.large').exists()).to.equal(true)
    })

    it('renders props.isActive when passed', () => {
      const wrapper = mount(LolHero, {
        propsData: {
          hero: 'Vi',
          isActive: true
        }
      })

      expect(wrapper.find('.active').exists()).to.equal(true)
    })

    it('renders props.url when passed', () => {
      const wrapper = mount(LolHero, {
        propsData: {
          url: '/xxx'
        }
      })
      expect(wrapper.find('.lol-hero-avatar').attributes().style).to.equal('background-image: url("/xxx");');
    })
  })
})