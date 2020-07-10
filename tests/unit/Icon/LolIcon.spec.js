import {expect} from 'chai'
import {mount} from '@vue/test-utils'
import LolIcon from "../../../src/components/Icon/LolIcon";

const testData = {
  names: ['setting', 'loading'],
  colors: ['rgb(189, 40, 48)'],
  isLoading: true,
  size: '20px'
}

describe('LolIcon.vue', () => {
  it('should exist', () => {
    const wrapper = mount(LolIcon)
    expect(wrapper).to.exist
  })

  describe('props', () => {
    it('renders props.name when passed', () => {
      const {names} = testData
      names.forEach((name) => {
        const wrapper = mount(LolIcon, {
          propsData: {
            name: name
          }
        })
        const useElement = wrapper.find('use')
        expect(useElement.attributes()['href']).to.equal(`#lol-${name}`)
      })
    })

    it('renders props.color when passed', () => {
      const {colors} = testData
      const wrapper = mount(LolIcon, {
        propsData: {
          name: 'loading',
          color: colors[0]
        }
      })
      expect(wrapper.vm.$el.style.fill).to.equal(colors[0])
    })

    it('renders props.isLoading when passed', () => {
      const {isLoading} = testData
      const wrapper = mount(LolIcon, {
        propsData: {
          name: 'loading',
          isLoading: isLoading
        }
      })

      const useElements = wrapper.vm.$el.querySelectorAll('use')
      expect(useElements[0].getAttribute('xlink:href')).to.equal('#lol-loading')
      const svgElement = wrapper.find('svg')
      expect(svgElement.classes().includes(`lol-icon_loading`)).to.equal(true)
    })

    it('renders props.size when passed', () => {
      const {size} = testData
      const wrapper = mount(LolIcon, {
        propsData: {
          name: 'loading',
          size: size
        }
      })
      expect(wrapper.vm.$el.style.width).to.equal(size)
    })
  })
})