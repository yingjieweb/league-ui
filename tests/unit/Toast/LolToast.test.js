import Vue from 'vue'

const expect = chai.expect
import LolToast from "../../../src/components/Toast/LolToast"

Vue.config.productionTip = false
Vue.config.devtools = false

describe('LolToast.vue', () => {

  it('exist.', () => {
    expect(LolToast).to.exist
  })

  describe('props', function () {
    it('renders props.autoClose when passed', (done) => {
      let div = document.createElement('div')
      document.body.appendChild(div)
      const Constructor = Vue.extend(LolToast)
      const vm = new Constructor({
        propsData: {
          autoClose: 1
        }
      }).$mount(div)
      vm.$on('close', () => {
        expect(document.body.contains(vm.$el)).to.eq(false)
        done()
      })
    })
    it('renders props.closeButton when passed', (done) => {
      const callback = sinon.fake()
      const Constructor = Vue.extend(LolToast)
      const vm = new Constructor({
        propsData: {
          closeButton: {
            text: '关闭toast',
            callback,
          },
        }
      }).$mount()
      let closeButton = vm.$el.querySelector('.closeButton')
      expect(closeButton.textContent.trim()).to.eq('关闭toast')
      setTimeout(() => {
        closeButton.click()
        expect(callback).to.have.been.called
        done()
      }, 200)
    })
    it('renders props.enableHtml when passed', () => {
      const Constructor = Vue.extend(LolToast)
      const vm = new Constructor({
        propsData: {
          enableHtml: true
        }
      })
      vm.$slots.default = `<strong id="test">hi</strong>`
      vm.$mount()
      let strong = vm.$el.querySelector('#tests')
      expect(strong).to.exist
    })
    it('接受 position', () => {
      const Constructor = Vue.extend(LolToast)
      const vm = new Constructor({
        propsData: {
          position: 'bottom'
        }
      }).$mount()
      expect(vm.$el.classList.contains('lol-toast-position-bottom')).to.eq(true)
    })
  })
})