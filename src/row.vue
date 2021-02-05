<template>
  <div class="row" :style="rowStyle" :class="rowClass">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name:'wRow',
  props:{
    gutter:[Number,String],
    align:{
      type:String,
      validator(value){
        return ['left','right','center'].includes(value)
      }
    }
  },
  computed:{
    rowStyle(){
      let {gutter} = this
      return {
        marginLeft:-gutter/2+'px',
        marginRight:-gutter/2+'px'
      }
    },
    rowClass(){
      let {align} = this
      return [align&& `align-${align}`]
    }
  },
  mounted(){
    this.$children.forEach((vm)=>{
      vm.gutter = this.gutter
    })
  }
}
</script>

<style lang="scss">
  .row{
    display: flex;
    margin:0 -10px;
    &.align-left{
      justify-content: flex-start;
    }
    &.align-right{
      justify-content: flex-end;
    }
    &.align-center{
      justify-content: center;
    }
  }
</style>