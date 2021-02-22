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
    this.$children.forEach((vm) => {
      if(vm.$options.name ==='wTabsHeader'){
        vm.$children.forEach((item) => {
          if(item.$options.name === 'wTabsItem' && item.name=== this.selected) {
            console.log(item.$el)
            this.eventBus.$emit('update:selected',this.selected,item)
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