import Vue from 'vue'
import App from './App.vue'
import LeagueUI from './entry'

Vue.config.productionTip = false

Vue.use(LeagueUI.plugins.$lolToast)

new Vue({
    components: {
        ...LeagueUI.Components
    },
    render: h => h(App),
}).$mount('#app')
