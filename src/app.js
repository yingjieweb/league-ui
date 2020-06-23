import Vue from 'vue'
import LolButton from "./components/Button/LolButton";
import LolIcon from "./components/Icon/LolIcon";
import LolButtonGroup from "./components/Button/LolButtonGroup";
import LolInput from "./components/Input/LolInput";

Vue.component('lol-button', LolButton);
Vue.component('lol-icon', LolIcon);
Vue.component('lol-button-group', LolButtonGroup);
Vue.component('lol-input', LolInput);

new Vue({
  el: '#app',
  data: {
    isLoading1: true,
    isLoading2: false,
  },
  methods: {
    inputChange(value){
      console.log(value);
    }
  }
})
