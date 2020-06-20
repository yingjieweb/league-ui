import Vue from 'vue'
import LolButton from "./components/Button/LolButton";
import LolIcon from "./components/Icon/LolIcon";
import LolButtonGroup from "./components/Button/LolButtonGroup";

Vue.component('lol-button', LolButton);
Vue.component('lol-icon', LolIcon);
Vue.component('lol-button-group', LolButtonGroup);

new Vue({
  el: '#app',
  data: {
    isLoading1: false,
    isLoading2: true,
    isLoading3: false
  }
})
