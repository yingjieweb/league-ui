import LolToast from "../components/Toast/LolToast"

let currentToast

export default {
  install(Vue, options) {
    Vue.prototype.$toast = function (toastOptions) {
      if (currentToast) {
        currentToast.close()
      }
      currentToast = createToast({
        Vue,
        propsData: toastOptions,
        onClose: () => {
          currentToast = null
        }
      })
    }
  }
}

/*helper*/
function createToast({Vue, propsData, onClose}) {
  let Constructor = Vue.extend(LolToast)
  let toast = new Constructor({
    propsData: propsData
  })
  toast.$slots.default = propsData.message
  toast.$mount()
  toast.$on('close', onClose)
  document.body.appendChild(toast.$el)
  return toast
}