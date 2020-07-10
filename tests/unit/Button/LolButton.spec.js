import {expect} from 'chai'
import sinon from 'sinon'
import {mount} from '@vue/test-utils'
import LolButton from "../../../src/components/Button/LolButton"

const testData = {
  iconNames: ['setting', 'loading'],
  iconPositions: ['left', 'right'],
  isLoading: true,
  types: ['primary', 'warning', 'danger', 'info'],
  events: ['click']
}

describe('LolButton.vue', () => {
  it('should exist', () => {
    const wrapper = mount(LolButton)
    expect(wrapper).to.exist
  })

  describe('props', () => {
    it('renders props.iconName when passed', () => {
      const {iconNames} = testData
      iconNames.forEach((iconName) => {
        const wrapper = mount(LolButton, {
          propsData: {
            iconName: iconName
          }
        })
        const useElement = wrapper.find('use')
        expect(useElement.attributes()['href']).to.equal(`#lol-${iconName}`)
      })
    })

    it('renders props.iconPosition when passed', () => {
      const {iconPositions} = testData
      iconPositions.forEach((iconPosition) => {
        const wrapper = mount(LolButton, {
          propsData: {
            iconName: 'setting',
            iconPosition: iconPosition
          }
        })
        expect(wrapper.classes().includes(`lol-button-icon-${iconPosition}`))
      })
    })

    it('renders props.isLoading when passed', () => {
      const wrapper = mount(LolButton, {
        propsData: {
          iconName: 'loading',
          isLoading: true
        }
      })
      const useElements = wrapper.vm.$el.querySelectorAll('use')
      expect(useElements[0].getAttribute('xlink:href')).to.equal('#lol-loading')
      const svgElement = wrapper.find('svg')
      expect(svgElement.classes().includes(`lol-icon_loading`)).to.equal(true)
    })

    it('renders props.type when passed', () => {
      const {types} = testData
      types.forEach((type) => {
        const wrapper = mount(LolButton, {
          propsData: {
            type: type
          }
        })
        expect(wrapper.classes().includes(`lol-button-${type}`)).to.equal(true)
      })
    })
  })

  describe('event', () => {
    it('handles click event', () => {
      const {events} = testData
      const eventHandler = sinon.stub()
      const wrapper = mount(LolButton, {
        listeners: {
          click: eventHandler
        }
      })
      wrapper.trigger(events[0])
      expect(eventHandler.called).to.equal(true)
    })
  })
})
