import LolToast from "../components/Toast/LolToast"

export default {
  install(Vue, options) {
    Vue.prototype.$toast = function (message, toastOptions) {
      let Constructor = Vue.extend(LolToast)
      let toast = new Constructor({
        propsData: toastOptions
      })
      toast.$slots.default = message
      toast.$mount()
      document.body.appendChild(toast.$el)
    }
  }
}