import Vue from 'vue'

const expect = chai.expect
import LolFooter from "../../../src/components/Container/LolFooter"

Vue.config.productionTip = false
Vue.config.devtools = false

describe('LolFooter.vue', () => {
  it('exist', () => {
    expect(LolFooter).to.exist
  })

  /*slot*/
})