import {expect} from 'chai'
import sinon from 'sinon'
import {mount} from '@vue/test-utils'
import LolToast from "../../../src/components/Toast/LolToast"
import Vue from 'vue'

const testData = {
  titles: ['Hello', 'World'],
  messages: ['Yes', 'No'],
  types: ['info', 'success', 'danger', 'warning', 'loading'],
  autoCloseDelay: 0.5,
  closeButton: {
    text: 'OK',
    callback: sinon.stub()
  }
}

describe('LolToast.vue', () => {
  it('exist.', () => {
    const wrapper = mount(LolToast)
    expect(wrapper).to.exist
  })

  describe('props', function () {
    it('renders props.autoClose when passed', (done) => {
      const wrapper = mount(LolToast, {
        propsData: {
          autoClose: 1
        }
      })
      wrapper.vm.$on('close', () => {
        expect(document.body.contains(wrapper.vm.$el)).to.eq(false)
        done()
      })
    })

    it('renders props.closeButton when passed', (done) => {
      const callback = sinon.fake()
      const wrapper = mount(LolToast, {
        propsData: {
          closeButton: {
            text: '关闭toast',
            callback,
          },
        }
      })
      let closeButton = wrapper.vm.$el.querySelector('.closeButton')
      expect(closeButton.textContent.trim()).to.eq('关闭toast')
      setTimeout(() => {
        closeButton.click()
        expect(callback.called).to.equal(true)
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
      let strong = vm.$el.querySelector('#test')
      expect(strong).to.exist
    })

    it('renders props.position when passed', () => {
      const wrapper = mount(LolToast, {
        propsData: {
          position: 'bottom'
        }
      })
      expect(wrapper.classes('lol-toast-position-bottom')).to.eq(true)
    })
  })
})