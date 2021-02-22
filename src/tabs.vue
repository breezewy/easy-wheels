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
    this.eventBus.$emit('update:selected',this.selected)
  },
}
</script>

<style lang="scss" scoped>
  .tabs{
    
  }
</style>