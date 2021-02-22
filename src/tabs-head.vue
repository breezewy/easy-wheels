<template>
  <div class="tabs-header">
    <slot></slot>
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
    // console.log('爷爷给爸爸的eventBus')
    // console.log(this.eventBus)
  }
}
</script>

<style lang="scss" scoped>
  $tab-height:40px;
  .tabs-header{
    display:flex;
    height:$tab-height;
    justify-content: flex-start;
    align-items: center;
    border:1px solid red;
    > .actions-warpper{
      margin-left:auto;
    }
  }

</style>