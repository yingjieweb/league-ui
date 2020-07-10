import Vue from 'vue'
const expect = chai.expect;
import LolIcon from "../../../src/components/Icon/LolIcon";

Vue.config.productionTip = false
Vue.config.devtools = false

describe('LolIcon.vue', () => {

  it('exist', () => {
    expect(LolIcon).to.exist
  })

  describe('props', () => {
    const Constructor = Vue.extend(LolIcon)
    let vm
    afterEach(() => {
      vm.$el.remove()
      vm.$destroy()
    })

    it('renders props.name when passed', () => {
      vm = new Constructor({
        propsData: {
          name: 'settings'
        }
      }).$mount()
      const useElement = vm.$el.querySelector('use')
      expect(useElement.getAttribute('xlink:href')).to.equal('#lol-settings')
    })

    it('renders props.color when passed', () => {
      const div = document.createElement('div')
      document.body.appendChild(div)
      vm = new Constructor({
        propsData: {
          name: 'settings',
          color: '#F56C6C'
        }
      }).$mount(div)
      expect(getComputedStyle(vm.$el).fill).to.equal('rgb(245, 108, 108)')
    })

    it('renders props.isLoading when passed', () => {
      const div = document.createElement('div')
      document.body.appendChild(div)
      vm = new Constructor({
        propsData: {
          name: 'loading',
          isLoading: true
        }
      }).$mount(div)
      expect(vm.$el.classList.value.split(' ').includes('lol-icon_loading')).to.equal(true)
    })

    it('renders props.size when passed', () => {
      const div = document.createElement('div')
      document.body.appendChild(div)
      vm = new Constructor({
        propsData: {
          name: 'loading',
          size: '2em'
        }
      }).$mount(div)
      expect(getComputedStyle(vm.$el).width).to.equal('32px')
      expect(getComputedStyle(vm.$el).height).to.equal('32px')
    })
  })
})