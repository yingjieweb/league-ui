import {expect} from 'chai'
import {mount} from '@vue/test-utils'
import LolPopover from "../../../src/components/Popover/LolPopover"
import LolButton from "../../../src/components/Button/LolButton"
import Vue from 'vue'

Vue.component('lol-button', LolButton)

const testData = {
  positions: ['top', 'down', 'right', 'left'],
  triggers: ['click', 'hover'],
  contentSlot: `<div id="hello">Popover</div>`,
  triggerSlot: '<button>Top</button>'
}

describe('LolPopover.vue', () => {
  it('should exist', () => {
    const wrapper = mount(LolPopover)
    expect(wrapper).to.exist
  })

  describe('props', () => {
    it('renders props.position when passed.', (done) => {
      const {positions} = testData
      positions.forEach((position) => {
        const wrapper = mount(LolPopover, {
          propsData: {
            position: position
          },
          slots: {
            default: `<lol-button>Pop It!</lol-button>`,
            content: `<div>Popover Content</div>`
          },
          stubs: {LolButton}
        })
        wrapper.findComponent(LolButton).trigger('click')
        Vue.nextTick(() => {
          const popoverWrapper = document.body.getElementsByClassName(`lol-popover-content-wrapper-position-${position}`)
          expect(popoverWrapper[0].children[0].textContent).to.equal('Popover Content')
          done()
        })
      })
    })

    it('renders props.trigger when passed.', (done) => {
      const wrapper = mount(LolPopover, {
        propsData: {
          trigger: 'hover'
        },
        slots: {
          default: `<lol-button>Pop It!</lol-button>`,
          content: `<div>Popover Content</div>`
        },
        stubs: {LolButton}
      })
      wrapper.trigger('mouseenter')
      Vue.nextTick(() => {
        const popoverWrapper = document.body.getElementsByClassName('lol-popover-content-wrapper')
        expect(popoverWrapper[0].children[0].textContent).to.equal('Popover Content')
        done()
      })
    })

    it('can unmount listeners when destroy', () => {
      const wrapper = mount(LolPopover, {
        propsData: {
          position: 'left'
        },
        slots: {
          default: `<lol-button>Pop It!</lol-button>`,
          content: `<div>Popover Content</div>`
        },
        stubs: {LolButton}
      })
      wrapper.destroy()
      expect(wrapper.element.onclick).to.equal(null)
    })
  })
})