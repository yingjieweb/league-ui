import Vue from 'vue'

const expect = chai.expect
import LolRow from "../../../src/components/Layoyt/LolRow"
import LolCol from "../../../src/components/Layoyt/LolCol"

Vue.config.productionTip = false
Vue.config.devtools = false

describe('LolRow.vue', () => {
  it('exist', () => {
    expect(LolRow).to.exist
  })

  describe('props', () => {
    it('renders props.gutter when passed', (done) => {
      Vue.component('lol-row', LolRow)
      Vue.component('lol-col', LolCol)
      const div = document.createElement('div')
      document.body.appendChild(div)
      div.innerHTML = `
      <lol-row gutter="20">
        <lol-col span="12"></lol-col>
        <lol-col span="12"></lol-col>
      </lol-row>
    `
      const vm = new Vue({
        el: div
      })
      setTimeout(() => {
        const row = vm.$el.querySelector('.lol-row')
        expect(getComputedStyle(row).marginLeft).to.eq('-10px')
        expect(getComputedStyle(row).marginRight).to.eq('-10px')
        const cols = vm.$el.querySelectorAll('.lol-col')
        expect(getComputedStyle(cols[0]).paddingRight).to.eq('10px')
        expect(getComputedStyle(cols[1]).paddingLeft).to.eq('10px')
        done()
        vm.$el.remove()
        vm.$destroy()
      }, 0)
    })

    it('renders props.align when passed', () => {
      const div = document.createElement('div')
      document.body.appendChild(div)
      const Constructor = Vue.extend(LolRow)
      const vm = new Constructor({
        propsData: {
          align: 'right'
        }
      }).$mount(div)
      const element = vm.$el
      expect(getComputedStyle(element).justifyContent).to.equal('flex-end')
      div.remove()
      vm.$destroy()
    })
  })
})