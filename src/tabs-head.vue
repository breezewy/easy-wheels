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
  mounted(){
    this.eventBus.$on('update:selected',(item,vm) => {
      let {width,height,top,left} = vm.$el.getBoundingClientRect()
      this.$refs.line.style.width = `${width}px`
      this.$refs.line.style.left = `${left}px`
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
      transition: all 200ms;
    }
    > .actions-warpper{
      margin-left:auto;
    }
  }

</style>