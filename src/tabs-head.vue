<template>
  <div class="tabs-header">
    <slot></slot>
    <div class="line" ref="line"></div>
    <div class="actions-warpper">
          <slot name="actions"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name:'wTabsHeader',
  inject:['eventBus'],
  created(){
    this.eventBus.$on('update:selected',(item,vm) => {
      console.log(item)
      console.log(vm)
    })
  }
}
</script>

<style lang="scss" scoped>
  $tab-height:40px;
  $blue:blue;
  .tabs-header{
    display:flex;
    height:$tab-height;
    justify-content: flex-start;
    position: relative;
    > .line {
      position: absolute;
      bottom:0;
      border-bottom:1px solid $blue;
      width:100px;
    }
    > .actions-warpper{
      margin-left:auto;
    }
  }

</style>