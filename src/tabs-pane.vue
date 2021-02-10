<template>
  <div class="tabs-pane">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name:'wTabsPane',
  inject:['eventBus'],
}
</script>

<style lang="scss" scoped>
  .tabs-pane{
    
  }

</style>