<template>
  <div class="toast">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name:'wToast'
}
</script>

<style lang="scss" scoped>
   $font-size: 14px;
   $toast-heihgt:40px;
   $toast-bg:rgba(0,0,0,0.75);
  .toast{
    color:#fff;
    position: fixed;
    top:0;
    left:50%;
    transform: translate(-50%);
    font-size: $font-size;
    line-height: 1.8;
    height:$toast-heihgt;
    display: flex;
    align-items: center;
    background:$toast-bg;
    border-radius: 4px;
    box-shadow: 0px 0px 3px 0px rgba(0,0,0,0.5);
    padding:0 16px;
  }
</style>