<template>
  <div class="tabs-header">
    <slot></slot>
    <slot name="actions"></slot>
  </div>
</template>

<script>
export default {
  name:'wTabsHeader',
  inject:['eventBus'],
  created(){
    console.log(this.eventBus)
  }
}
</script>

<style lang="scss" scoped>
  .tabs-header{
    
  }

</style>