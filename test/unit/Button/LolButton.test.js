import Vue from 'vue'
const expect = chai.expect;
import LolButton from "../../../src/components/Button/LolButton";

Vue.config.productionTip = false
Vue.config.devtools = false

describe('LolButton.vue', () => {
  it('exist', () => {
    expect(LolButton).to.exist
  })
  it('renders props.iconName when passed', () => {
    const Constructor = Vue.extend(LolButton)
    const vm = new Constructor({
      propsData: {
        iconName: 'settings'
      }
    }).$mount()
    const useElement = vm.$el.querySelector('use')
    expect(useElement.getAttribute('xlink:href')).to.equal('#lol-settings')
    vm.$el.remove()
    vm.$destroy()
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
        type: 'danger'
      }
    }).$mount()
    expect(vm.classes.includes('lol-button-danger')).to.equal(true);
    vm.$destroy()
  })

  it('Click on the button to trigger the click event', () => {
    const Constructor = Vue.extend(LolButton)
    const vm = new Constructor({
      propsData: {
        iconName: 'settings',
      }
    }).$mount()

    const callback = sinon.fake();
    vm.$on('click', callback)
    vm.$el.click()
    expect(callback).to.have.been.called
    vm.$el.remove()
    vm.$destroy()
  })
})