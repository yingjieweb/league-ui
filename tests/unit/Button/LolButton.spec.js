import chai, {expect} from 'chai'
import sinon from 'sinon'
import sinonChai from 'sinon-chai'
import {shallowMount, mount} from '@vue/test-utils'
import LolButton from "../../../src/components/Button/LolButton"
import Vue from "vue"
chai.use(sinonChai)

const testData = {
  iconNames: ['setting', 'add'],
  iconPositions: ['left', 'right'],
  isLoading: true,
  types: ['primary', 'warning', 'danger', 'info'],
  events: ['click']
}

describe('LolButton.vue', () => {
  it('exists', () => {
    const LolButtonWrapper = shallowMount(LolButton)
    expect(LolButtonWrapper).to.exist
  })

  describe('props', () => {
    it('renders props.iconName when passed', () => {
      const wrapper = mount(LolButton, {
        propsData: {
          icon: 'settings'
        }
      })
      const useElement = wrapper.find('use')
      expect(useElement.attributes()['href']).to.equal('#i-settings')
    })
    it('renders props.iconPosition when passed', () => {
      const div = document.createElement('div')
      document.body.appendChild(div)
      const Constructor = Vue.extend(LolButton)
      const vm = new Constructor({
        propsData: {
          iconName: 'settings',
          iconPosition: 'right'
        }
      }).$mount(div)
      const icon = vm.$el.querySelector('svg')
      expect(getComputedStyle(icon).order).to.eq('2')
      vm.$el.remove()
      vm.$destroy()
    })
    it('renders props.isLoading when passed', () => {
      const Constructor = Vue.extend(LolButton)
      const vm = new Constructor({
        propsData: {
          iconName: 'loading',
          isLoading: true
        }
      }).$mount()
      const useElements = vm.$el.querySelectorAll('use')
      expect(useElements.length).to.equal(1)
      expect(useElements[0].getAttribute('xlink:href')).to.equal('#lol-loading')
      vm.$el.remove()
      vm.$destroy()
    })
    it('renders props.type when passed', () => {
      const Constructor = Vue.extend(LolButton)
      const vm = new Constructor({
        propsData: {
          type: 'primary'
        }
      }).$mount()
      expect(vm.$el.className.includes('lol-button-primary')).to.equal(true);
      vm.$destroy()
    })
  })

  describe('event', () => {
    it('can be handled', () => {
      const Constructor = Vue.extend(LolButton)
      const vm = new Constructor({}).$mount()
      const callback = sinon.fake();
      vm.$on('click', callback)
      vm.$el.click()
      expect(callback).to.have.been.called
      vm.$el.remove()
      vm.$destroy()
    })
  })
})
