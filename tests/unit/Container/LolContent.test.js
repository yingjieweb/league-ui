import Vue from 'vue'

const expect = chai.expect
import LolContent from "../../../src/components/Container/LolContent"

Vue.config.productionTip = false
Vue.config.devtools = false

describe('LolContent.vue', () => {
  it('exist', () => {
    expect(LolContent).to.exist
  })

  /*slot*/
})