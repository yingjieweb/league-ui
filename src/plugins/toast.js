import LolToast from "../components/Toast/LolToast"

let currentToast

export default {
  install(Vue, options) {
    Vue.prototype.$toast = function (message, toastOptions) {
      if (currentToast) {
        currentToast.close()
      }
      currentToast = createToast({
        Vue,
        message,
        propsData: toastOptions,
        onClose: () => {
          currentToast = null
        }
      })
    }
  }
}

/*helper*/
function createToast({Vue, message, propsData, onClose}) {
  let Constructor = Vue.extend(LolToast)
  let toast = new Constructor({
    propsData: propsData
  })
  toast.$slots.default = message
  toast.$mount()
  toast.$on('close', onClose)
  document.body.appendChild(toast.$el)
  return toast
}