import Vue from 'vue'

const expect = chai.expect
import LolSider from "../../../src/components/Container/LolSider"

Vue.config.productionTip = false
Vue.config.devtools = false

describe('LolSider.vue', () => {
  it('exist', () => {
    expect(LolSider).to.exist
  })

  /*slot*/
  /*props.visible*/
})