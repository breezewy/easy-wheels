<template>
  <div class="row" :style="{marginLeft:-gutter/2+'px',marginRight:-gutter/2+'px'}">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name:'wRow',
  props:{
    gutter:[Number,String]
  },
  created(){
    console.log('row created')
  },
  mounted(){
    console.log(this.$children)
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
  }
</style>