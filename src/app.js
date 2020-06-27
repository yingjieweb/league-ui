import Vue from 'vue'
import LolButton from "./components/Button/LolButton"
import LolIcon from "./components/Icon/LolIcon"
import LolButtonGroup from "./components/Button/LolButtonGroup"
import LolInput from "./components/Input/LolInput"
import LolRow from "./components/Layoyt/LolRow"
import LolCol from "./components/Layoyt/LolCol"
import LolContainer from "./components/Container/LolContainer"
import LolHeader from "./components/Container/LolHeader"
import LolSider from "./components/Container/LolSider"
import LolContent from "./components/Container/LolContent"
import LolFooter from "./components/Container/LolFooter"
import LolToast from "./components/Toast/LolToast"
import toast from "./plugins/toast"

Vue.component('lol-button', LolButton)
Vue.component('lol-icon', LolIcon)
Vue.component('lol-button-group', LolButtonGroup)
Vue.component('lol-input', LolInput)
Vue.component('lol-row', LolRow)
Vue.component('lol-col', LolCol)
Vue.component('lol-container', LolContainer)
Vue.component('lol-header', LolHeader)
Vue.component('lol-sider', LolSider)
Vue.component('lol-content', LolContent)
Vue.component('lol-footer', LolFooter)
Vue.component('lol-toast', LolToast)
Vue.use(toast)

new Vue({
  el: '#app',
  data: {
    isLoading1: true,
    isLoading2: false,
    inputMessage: 'xixixi'
  },
  methods: {
    inputChange(value) {
      console.log(value)
    },
    showToast() {
      this.$toast('I am <strong>加粗文字</strong>', {
        closeButton: {
          text: '知道了',
          callback: (toast) => {
            toast.log()
            console.log('用户知道了')
          }
        },
        enableHtml: true
      })
    }
  }
})
