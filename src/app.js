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

//Unit testing    npm install -D chai-spies
import chai from 'chai'
import spies from 'chai-spies'
chai.use(spies)

const expect = chai.expect
// 单元测试
{
  const Constructor = Vue.extend(LolButton)
  const vm = new Constructor({
    propsData: {
      icon: 'settings'
    }
  })
  vm.$mount()
  let useElement = vm.$el.querySelector('use')
  let href = useElement.getAttribute('xlink:href')
  expect(href).to.eq('#lol-settings')
  vm.$el.remove()
  vm.$destroy()
}
{
  const Constructor = Vue.extend(LolButton)
  const vm = new Constructor({
    propsData: {
      icon: 'settings',
      isLoading: true
    }
  })
  vm.$mount()
  let useElement = vm.$el.querySelector('use')
  let href = useElement.getAttribute('xlink:href')
  expect(href).to.eq('#lol-loading')
  vm.$el.remove()
  vm.$destroy()
}
{
  const div = document.createElement('div')
  document.body.appendChild(div)
  const Constructor = Vue.extend(LolButton)
  const vm = new Constructor({
    propsData: {
      icon: 'settings'
    }
  })
  vm.$mount(div)
  let svg = vm.$el.querySelector('svg')
  let {order} = window.getComputedStyle(svg)
  expect(order).to.eq('1')
  vm.$el.remove()
  vm.$destroy()
}
{
  const div = document.createElement('div')
  document.body.appendChild(div)
  const Constructor = Vue.extend(LolButton)
  const vm = new Constructor({
    propsData: {
      icon: 'settings',
      iconPosition: 'right'
    }
  })
  vm.$mount(div)
  let svg = vm.$el.querySelector('svg')
  let {order} = window.getComputedStyle(svg)
  expect(order).to.eq('2')
  vm.$el.remove()
  vm.$destroy()
}
{
  const Constructor = Vue.extend(LolButton)
  const vm = new Constructor({
    propsData: {
      icon: 'settings',
    }
  })
  vm.$mount()
  let spy = chai.spy(function(){})

  vm.$on('click', spy)
  // 希望这个函数被执行
  let button = vm.$el
  button.click()
  expect(spy).to.have.been.called()
}