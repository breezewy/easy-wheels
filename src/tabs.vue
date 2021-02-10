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
  created(){
    console.log(this)
    console.log(this.eventBus)
    this.$emit('update:selected','xxx')
  }
}
</script>

<style lang="scss" scoped>
  .tabs{
    
  }
</style>