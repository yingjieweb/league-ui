const expect = chai.expect;
import Vue from 'vue'
import LolButton from "../src/components/Button/LolButton";

Vue.config.productionTip = false
Vue.config.devtools = false

describe('LolButton', () => {
  it('exists', () => {
    expect(LolButton).to.be.ok
  })
  it('can set the icon', () => {
    const Constructor = Vue.extend(LolButton)
    const vm = new Constructor({
      propsData: {
        icon: 'settings'
      }
    }).$mount()
    const useElement = vm.$el.querySelector('use')
    expect(useElement.getAttribute('xlink:href')).to.equal('#lol-settings')
    vm.$destroy()
  })
  it('can sest thi isLoading props', () => {
    const Constructor = Vue.extend(LolButton)
    const vm = new Constructor({
      propsData: {
        icon: 'settings',
        isLoading: true
      }
    }).$mount()
    const useElements = vm.$el.querySelectorAll('use')
    expect(useElements.length).to.equal(1)
    expect(useElements[0].getAttribute('xlink:href')).to.equal('#lol-loading')
    vm.$destroy()
  })
  it('The default order for icon is 1', () => {
    const div = document.createElement('div')
    document.body.appendChild(div)
    const Constructor = Vue.extend(LolButton)
    const vm = new Constructor({
      propsData: {
        icon: 'settings',
      }
    }).$mount(div)
    const icon = vm.$el.querySelector('svg')
    expect(getComputedStyle(icon).order).to.eq('1')
    vm.$el.remove()
    vm.$destroy()
  })
  it('Set iconPosition to change icon order', () => {
    const div = document.createElement('div')
    document.body.appendChild(div)
    const Constructor = Vue.extend(LolButton)
    const vm = new Constructor({
      propsData: {
        icon: 'settings',
        iconPosition: 'right'
      }
    }).$mount(div)
    const icon = vm.$el.querySelector('svg')
    expect(getComputedStyle(icon).order).to.eq('2')
    vm.$el.remove()
    vm.$destroy()
  })
  it('Click on the button to trigger the click event', () => {
    const Constructor = Vue.extend(LolButton)
    const vm = new Constructor({
      propsData: {
        icon: 'settings',
      }
    }).$mount()

    const callback = sinon.fake();
    vm.$on('click', callback)
    vm.$el.click()
    expect(callback).to.have.been.called
  })
})