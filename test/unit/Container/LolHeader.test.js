import Vue from 'vue'

const expect = chai.expect
import LolHeader from "../../../src/components/Container/LolHeader"

Vue.config.productionTip = false
Vue.config.devtools = false

describe('LolHeader.vue', () => {
  it('exist', () => {
    expect(LolHeader).to.exist
  })

  /*slot*/
})