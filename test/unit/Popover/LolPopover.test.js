import Vue from 'vue'

const expect = chai.expect
import LolPopover from "../../../src/components/Popover/LolPopover"

Vue.config.productionTip = false
Vue.config.devtools = false

describe('LolPopover.vue', () => {
  it('exist', () => {
    expect(LolPopover).to.exist
  })

  describe('props', () => {
    it('renders props.position when passed.', (done) => {
      Vue.component('lol-popover', LolPopover)
      const div = document.createElement('div')
      document.body.appendChild(div)
      div.innerHTML = `
        <lol-popover position="bottom" ref="a">
          <template slot="content">Popover Content</template>
          <button>button</button>
        </lol-popover>
        `
      const vm = new Vue({
        el: div
      })
      vm.$el.querySelector('button').click()
      vm.$nextTick(() => {
        const {contentWrapper} = vm.$refs.a.$refs
        expect(contentWrapper.classList.contains('lol-popover-content-wrapper-position-bottom')).to.be.true
        done()
      })
    })
    xit('renders props.trigger when passed.', (done) => {
      Vue.component('lol-popover', LolPopover)
      const div = document.createElement('div')
      document.body.appendChild(div)
      div.innerHTML = `
        <lol-popover trigger="hover" ref="a">
          <template slot="content">Popover Content</template>
          <button>button</button>
        </lol-popover>
        `
      const vm = new Vue({
        el: div
      })
      setTimeout(() => {
        let event = new Event('mouseenter')
        vm.$el.dispatchEvent(event)
        vm.$nextTick(() => {
          const {contentWrapper} = vm.$refs.a.$refs
          expect(contentWrapper).to.exist
          done()
        })
      }, 200)
    })

    xit('can unmount listeners when destroy', () => {

    })
  })
})