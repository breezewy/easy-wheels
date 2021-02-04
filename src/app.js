import Vue from 'vue';
import Button from './button'
import Icon from './icon'
import ButtonGroup from './button-group'
import Input from './input'
import Row from './row'
import Col from './col'
Vue.component('w-button', Button)
Vue.component('w-icon', Icon)
Vue.component('w-button-group', ButtonGroup)
Vue.component('w-input', Input)
Vue.component('w-row', Row)
Vue.component('w-col',Col)

import chai from 'chai'
import spies from 'chai-spies'
const expect = chai.expect
chai.use(spies)

new Vue({
  el: '#app',
  data: {
    loading1: false,
    loading2: false,
    loading3: false,
    message:'hi'
  },
  created() {
    setTimeout(() => {
      let event = new Event('change')
      let inputElement = this.$el.querySelector('input')
      inputElement.dispatchEvent(event)
    },2000)
  },
  methods: {
    inputChange(e) {
      console.log(e)
    },
    changeMessage() {
      this.message += 'i'
    }
  }
})

try {
    // 单元测试
  {
    // 测试按钮含有 icon
    const Constructor = Vue.extend(Button)
    const vm = new Constructor({
      propsData: {
        icon:'settings'
      }
    })
    vm.$mount()

    const useElement = vm.$el.querySelector('use')
    const href = useElement.getAttribute('xlink:href')
    expect(href).to.eq('#i-settings')
  }

  {
    // 测试 按钮为 loading 状态
    const Constructor = Vue.extend(Button)
    const vm = new Constructor({
      propsData: {
        icon: 'settings',
        loading:true
      }
    })
    vm.$mount()

    const useElement = vm.$el.querySelector('use')
    const href = useElement.getAttribute('xlink:href')
    expect(href).to.eq('#i-loading')
  }

  {
    // 测试 默认情况下 icon 的排序为1
    const div = document.createElement('div')
    document.body.appendChild(div)
    const Constructor = Vue.extend(Button)
    const vm = new Constructor({
      propsData: {
        icon: 'settings'
      }
    })
    vm.$mount(div)

    let svg = vm.$el.querySelector('svg')
    let { order } = window.getComputedStyle(svg)
    expect(order).to.eq('1')
    vm.$el.remove()
    vm.$destroy()
  }
  {
    // 测试 iconPosition 为 right情况下 icon的排序为2
    const div = document.createElement('div')
    document.body.appendChild(div)
    const Constructor = Vue.extend(Button)
    const vm = new Constructor({
      propsData: {
        icon: 'settings',
        iconPosition:'right'
      }
    })
    vm.$mount(div)

    let svg = vm.$el.querySelector('svg')
    let { order } = window.getComputedStyle(svg)
    expect(order).to.eq('2')
    vm.$el.remove()
    vm.$destroy()
  }
  {
    // 测试 事件函数是否被调用
    const Constructor = Vue.extend(Button)
    const vm = new Constructor({
      propsData: {
        icon: 'settings'
      }
    })
    vm.$mount()
    let spy = chai.spy(function(){})
    vm.$on('click', spy)
    let button = vm.$el
    button.click()
    // 期望间谍函数被调用了
    expect(spy).to.have.been.called()
  }
} catch (error) {
  window.errors = [error]
} finally {
  window.errors && window.errors.forEach((error) => {
    console.error(error.message)
  })
}