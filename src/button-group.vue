<template>
  <div class="w-button-group">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name:'wButtonGroup',
  mounted(){
    let childNode = this.$el.children
    for(let node of childNode){
      let nodeName = node.nodeName.toLowerCase()
      if( nodeName !== 'button'){
        console.warn(`w-button-group的子元素应该全是 w-button,但你写的是 ${nodeName}`)
      }
    }
  }
}
</script>

<style lang="scss" scoped>
  .w-button-group{
    display: inline-flex;
    vertical-align: middle;
    > .w-button{
      border-radius: 0;
      &:not(:first-child){
        margin-left:-1px;
      }
      &:first-child{
        border-top-left-radius: var(--border-radius);
        border-bottom-left-radius: var(--border-radius);
      }
      &:last-child{
        border-top-right-radius: var(--border-radius);
        border-bottom-right-radius: var(--border-radius);
      }
      &:hover{
        position: relative;
        z-index: 1;
      }
    }

  }
</style>