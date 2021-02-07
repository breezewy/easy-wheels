const expect = chai.expect;
import Vue from 'vue'
import Row from '../src/row'
import Col from '../src/col'

Vue.config.productionTip = false
Vue.config.devtools = false

describe('Row', () => {
    // BDD 行为驱动测试

  it('存在.', () => {
    expect(Row).to.be.exist
  })
  it('接收 gutter 属性', (done) => {
      Vue.component('w-row', Row)
      Vue.component('w-col', Col)
      const div = document.createElement('div')
      document.body.appendChild(div)
      div.innerHTML = `
        <w-row gutter="20">
          <w-col span="12"></w-col>
          <w-col span="12"></w-col>
        <w-row>  
      `
      const vm = new Vue({
        el:div
      })
    setTimeout(() => {
        const row = vm.$el.querySelector('.row')
        expect(getComputedStyle(row).marginRight).to.eq('-10px')
        expect(getComputedStyle(row).marginLeft).to.eq('-10px')
        const cols = vm.$el.querySelectorAll('.col')
        expect(getComputedStyle(cols[0]).paddingRight).to.eq('10px')
        expect(getComputedStyle(cols[1]).paddingLeft).to.eq('10px')
      done()
      vm.$destroy()
      },0)
  })
  it('接收 align 属性', () => {
    const div = document.createElement('div')
    document.body.appendChild(div)
    const Constructor = Vue.extend(Row)
    const vm = new Constructor({
      propsData: {
          align:'right'
      }
    }).$mount(div)
    const element = vm.$el
    expect(getComputedStyle(element).justifyContent).to.eq('flex-end')
    div.remove()
    vm.$destroy()
  })
})