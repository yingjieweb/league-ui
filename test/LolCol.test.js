import Vue from 'vue'

const expect = chai.expect
import LolCol from "../src/components/Layoyt/LolCol"

Vue.config.productionTip = false
Vue.config.devtools = false

describe('LolCol.vue', () => {
  it('exist', () => {
    expect(LolCol).to.exist
  })

  describe('props', () => {
    it('renders props.span when passed', () => {
      const div = document.createElement('div')
      document.body.appendChild(div)
      const Constructor = Vue.extend(LolCol)
      const vm = new Constructor({
        propsData: {
          span: 1
        }
      }).$mount(div)
      expect(vm.$el.classList.contains('lol-col-span-1')).to.eq(true)
      div.remove()
      vm.$destroy()
    })
    it('renders props.offset when passed', () => {
      const div = document.createElement('div')
      document.body.appendChild(div)
      const Constructor = Vue.extend(LolCol)
      const vm = new Constructor({
        propsData: {
          offset: 1
        }
      }).$mount(div)
      expect(vm.$el.classList.contains('lol-col-offset-1')).to.eq(true)
      div.remove()
      vm.$destroy()
    })
    it('renders props.iPad when passed', () => {
      const div = document.createElement('div')
      document.body.appendChild(div)
      const Constructor = Vue.extend(LolCol)
      const vm = new Constructor({
        propsData: {
          iPad: {span: 1, offset: 2}
        }
      }).$mount(div)
      expect(vm.$el.classList.contains('lol-col-iPad-span-1')).to.eq(true)
      expect(vm.$el.classList.contains('lol-col-iPad-offset-2')).to.eq(true)
      div.remove()
      vm.$destroy()
    })
    it('renders props.narrowPc when passed', () => {
      const div = document.createElement('div')
      document.body.appendChild(div)
      const Constructor = Vue.extend(LolCol)
      const vm = new Constructor({
        propsData: {
          narrowPc: {span: 1, offset: 2}
        }
      }).$mount(div)
      expect(vm.$el.classList.contains('lol-col-narrowPc-span-1')).to.eq(true)
      expect(vm.$el.classList.contains('lol-col-narrowPc-offset-2')).to.eq(true)
      div.remove()
      vm.$destroy()
    })
    it('renders props.pc when passed', () => {
      const div = document.createElement('div')
      document.body.appendChild(div)
      const Constructor = Vue.extend(LolCol)
      const vm = new Constructor({
        propsData: {
          pc: {span: 1, offset: 2}
        }
      }).$mount(div)
      expect(vm.$el.classList.contains('lol-col-pc-span-1')).to.eq(true)
      expect(vm.$el.classList.contains('lol-col-pc-offset-2')).to.eq(true)
      div.remove()
      vm.$destroy()
    })
    it('renders props.widePc when passed', () => {
      const div = document.createElement('div')
      document.body.appendChild(div)
      const Constructor = Vue.extend(LolCol)
      const vm = new Constructor({
        propsData: {
          widePc: {span: 1, offset: 2}
        }
      }).$mount(div)
      const element = vm.$el
      expect(vm.$el.classList.contains('lol-col-widePc-span-1')).to.eq(true)
      expect(vm.$el.classList.contains('lol-col-widePc-offset-2')).to.eq(true)
      div.remove()
      vm.$destroy()
    })
  })
})