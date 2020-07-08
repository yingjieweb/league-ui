import Vue from 'vue'
import App from './App.vue'

import LolIcon from "./components/Icon/LolIcon"
import LolButton from "./components/Button/LolButton"
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
import LolCollapse from "./components/Collapse/LolCollapse"
import LolCollapseItem from "./components/Collapse/LolCollapseItem"
import LolCascader from "./components/Cascader/LolCascader"
import LolCascaderList from "./components/Cascader/LolCascaderList"

Vue.component('lol-icon', LolIcon)
Vue.component('lol-button', LolButton)
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
Vue.component('lol-collapse', LolCollapse)
Vue.component('lol-collapse-item', LolCollapseItem)
Vue.component('lol-cascader', LolCascader)
Vue.component('lol-cascader-list', LolCascaderList)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
