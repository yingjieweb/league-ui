import Vue from 'vue'

const expect = chai.expect
import LolTabs from "../../../src/components/Tabs/LolTabs"
import LolTabsHead from "../../../src/components/Tabs/LolTabsHead"
import LolTabsItem from "../../../src/components/Tabs/LolTabsItem"
import LolTabsBody from "../../../src/components/Tabs/LolTabsBody"
import LolTabsPane from "../../../src/components/Tabs/LolTabsPane"

Vue.component('lol-tabs', LolTabs)
Vue.component('lol-tabs-head', LolTabsHead)
Vue.component('lol-tabs-item', LolTabsItem)
Vue.component('lol-tabs-body', LolTabsBody)
Vue.component('lol-tabs-pane', LolTabsPane)

Vue.config.productionTip = false
Vue.config.devtools = false

describe('LolTabs.vue', () => {

  it('exist.', () => {
    expect(LolTabs).to.exist
  })

  describe('props', () => {
    it('should pass props.selected', (done) => {
      const div = document.createElement('div')
      document.body.appendChild(div)
      div.innerHTML = `
      <lol-tabs selected="heroes">
        <lol-tabs-head>
          <lol-tabs-item name="heroes">英雄</lol-tabs-item>
          <lol-tabs-item name="career">职业</lol-tabs-item>
          <lol-tabs-item name="position">位置</lol-tabs-item>
        </lol-tabs-head>
        <lol-tabs-body>
          <lol-tabs-pane name="heroes">英雄列表</lol-tabs-pane>
          <lol-tabs-pane name="career">职业属性</lol-tabs-pane>
          <lol-tabs-pane name="position">适合位置</lol-tabs-pane>
        </lol-tabs-body>
      </lol-tabs>
    `
      let vm = new Vue({
        el: div
      })
      vm.$nextTick(() => {
        let x = vm.$el.querySelector(`.lol-tabs-item_active`)
        expect(x.childNodes[0].innerHTML).to.equal('英雄')
        done()
      })
    })

    it('should pass props.direction', () => {

    })
  })
})