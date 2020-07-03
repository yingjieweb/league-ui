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
import LolTabs from "./components/Tabs/LolTabs"
import LolTabsHead from "./components/Tabs/LolTabsHead"
import LolTabsItem from "./components/Tabs/LolTabsItem"
import LolTabsBody from "./components/Tabs/LolTabsBody"
import LolTabsPane from "./components/Tabs/LolTabsPane"
import LolPopover from "./components/Popover/LolPopover"

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
Vue.component('lol-tabs', LolTabs)
Vue.component('lol-tabs-head', LolTabsHead)
Vue.component('lol-tabs-item', LolTabsItem)
Vue.component('lol-tabs-body', LolTabsBody)
Vue.component('lol-tabs-pane', LolTabsPane)
Vue.component('lol-popover', LolPopover)


new Vue({
  el: '#app',
  data: {
    isLoading1: true,
    isLoading2: false,
    inputMessage: 'xixixi',
    selectedTab: 'career'
  },
  methods: {
    inputChange(value) {
      console.log(value)
    },
    showToast() {
      this.$toast(`I am <strong>加粗文字</strong> ${parseInt(Math.random()*100)}`, {
        closeButton: {
          text: '知道了',
          callback: (toast) => {
            toast.log()
            console.log('用户知道了')
          }
        },
        enableHtml: true,
        position: 'middle',
        autoClose: 10
      })
    }
  }
})
