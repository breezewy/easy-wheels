<template>
  <div class="tabs">
    <slot></slot>
  </div>
</template>

<script>
import Vue from 'vue'
export default {
  name:'wTabs',
  data(){
    return {
      eventBus: new Vue()
    }
  },
  props:{
    selected:{
      type:String,
      required:true
    },
    direction:{
      type:String,
      default:'horizontal',
      validator(value){
        return ['horizontal','vertival'].indexOf(value) >= 0
      }
    }
  },
  provide(){
    return {
      eventBus: this.eventBus,
      foo:'bar'
    }
  },
  mounted(){
    if(this.$children.length === 0){
      console && console.warn &&
      console.warn('tabs的子组件应该是tabs-head和tabs-body,但你没有写子组件')
    }
    this.$children.forEach((vm) => {
      if(vm.$options.name ==='wTabsHeader'){
        vm.$children.forEach((childVm) => {
          if(childVm.$options.name === 'wTabsItem' && childVm.name=== this.selected) {
            this.eventBus.$emit('update:selected',this.selected,childVm)
          }
        })
      }
    })
    
  },
}
</script>

<style lang="scss" scoped>
  .tabs{
    
  }
</style>