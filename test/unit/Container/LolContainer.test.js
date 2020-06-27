import Vue from 'vue'

const expect = chai.expect
import LolContainer from "../../../src/components/Container/LolContainer"

Vue.config.productionTip = false
Vue.config.devtools = false

describe('LolContainer.vue', () => {
  it('exist', () => {
    expect(LolContainer).to.exist
  })

  /*slot*/
  /*class: lol-container-has-sider*/
})