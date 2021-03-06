import Vue from 'vue';
import Button from './button'
import Icon from './icon'
import ButtonGroup from './button-group'
import Input from './input'
import Row from './row'
import Col from './col'
import Layout from './layout'
import Header from './header'
import Content from './content'
import Footer from './footer'
import Sider from './sider'
import Toast from './toast'
import plugin from './plugin'
import Tabs from './tabs'
import TabsHead from './tabs-head'
import TabsBody from './tabs-body'
import TabsItem from './tabs-item'
import TabsPane from './tabs-pane'

Vue.component('w-button', Button)
Vue.component('w-icon', Icon)
Vue.component('w-button-group', ButtonGroup)
Vue.component('w-input', Input)
Vue.component('w-row', Row)
Vue.component('w-col', Col)
Vue.component('w-layout', Layout)
Vue.component('w-header', Header)
Vue.component('w-content', Content)
Vue.component('w-footer', Footer)
Vue.component('w-sider',Sider)
Vue.component('w-toast', Toast)
Vue.component('w-tabs', Tabs)
Vue.component('w-tabs-head', TabsHead)
Vue.component('w-tabs-body', TabsBody)
Vue.component('w-tabs-item', TabsItem)
Vue.component('w-tabs-pane', TabsPane)
Vue.use(plugin)
import chai from 'chai'
import spies from 'chai-spies'


const expect = chai.expect
chai.use(spies)

new Vue({
  el: '#app',
  data: {
    selectedTab:'sports'
  },
  created() {

  },
  methods: {
    showToast1() {
      this.showToast('top')
    },
    showToast2() {
      this.showToast('middle')
    },
    showToast3() {
      this.showToast('bottom')
    },
    showToast(position) {
      this.$toast(`你的智商余额为${parseInt(Math.random()*100)},你智商需要充值！`, {
        position,
        enableHtml: false,
        closeButton: {
          text: '已充值',
          callback() {
            console.log('他说已经充值了')
          }
        },
        autoClose: 3
      })
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