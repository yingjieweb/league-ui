import Vue from 'vue'
const expect = chai.expect;
import LolInput from "../src/components/Input/LolInput";

Vue.config.productionTip = false
Vue.config.devtools = false

describe('LolInput.vue', () => {

  it('exist', () => {
    expect(LolInput).to.exist
  })

  describe('props', () => {
    const Constructor = Vue.extend(LolInput)
    let vm
    afterEach(() => {
      vm.$destroy()
    })

    it('renders props.value when passed', () => {
      vm = new Constructor({
        propsData: {
          value: 'input value'
        }
      }).$mount()
      const inputElement = vm.$el.querySelector('input')
      expect(inputElement.value).to.equal('input value')
    })

    it('renders props.disabled when passed', () => {
      vm = new Constructor({
        propsData: {
          disabled: true
        }
      }).$mount()
      const inputElement = vm.$el.querySelector('input')
      expect(inputElement.disabled).to.equal(true)
    })

    it('renders props.readonly when passed', () => {
      vm = new Constructor({
        propsData: {
          readonly: true
        }
      }).$mount()
      const inputElement = vm.$el.querySelector('input')
      expect(inputElement.readOnly).to.equal(true)
    })

    it('renders props.placeholder when passed', () => {
      vm = new Constructor({
        propsData: {
          placeholder: 'please input info'
        }
      }).$mount()
      const inputElement = vm.$el.querySelector('input')
      expect(inputElement.placeholder).to.equal('please input info')
    })

    it('renders props.hint when passed', () => {
      vm = new Constructor({
        propsData: {
          iconName: 'settings',
          hint: 'settings tips',
          hintType: 'danger'
        }
      }).$mount()
      const useElement = vm.$el.querySelector('use')
      expect(useElement.getAttribute('xlink:href')).to.equal('#lol-settings')

      const smallElement = vm.$el.querySelector('small')
      expect(smallElement.innerText).to.equal('settings tips')

      expect(vm.$el.className.includes('lol-input-wrapper-danger')).to.equal(true);
      vm.$el.remove()
      vm.$destroy()
    })
  })

  describe('event', () => {
    const Constructor = Vue.extend(LolInput)
    let vm
    afterEach(() => {
      vm.$destroy()
    })

    it('support change/input/focus/blur event', () => {
      ['change', 'input', 'focus', 'blur'].forEach((eventName) => {
        vm = new Constructor({}).$mount()
        const callback = sinon.fake();
        vm.$on(eventName, callback)

        let event = new Event(eventName);
        Object.defineProperty(
            event, 'target', {
              value: {value: 'hi'}, enumerable: true
            }
        )

        let inputElement = vm.$el.querySelector('input')
        inputElement.dispatchEvent(event)
        expect(callback).to.have.been.calledWith('hi')
      })
    })
  })
})