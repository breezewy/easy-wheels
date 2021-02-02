<template>
  <button class="w-button" :class="{ [`icon-${iconPosition}`]: true }"
    @click="$emit('click')"
  >
    <w-icon class="icon" v-if="icon && !loading" :name="icon"></w-icon>
    <w-icon v-if="loading" class="loading icon" name="loading"></w-icon>
    <div class="content">
      <slot></slot>
    </div>
  </button>
</template>

<script>
import icon from './icon'
export default {
  name:'wButton',
  components:{
    'w-icon':icon
  },
  // props: ["icon", "iconPosition"],
  props:{
    icon:{},
    loading:{
      type:Boolean,
      default:false
    },
    iconPosition:{
      type:String,
      default:'left',
      validator(value){
        // if(value !== 'left' && value !== 'right'){
        //   return false
        // }else{
        //   return true
        // }
        return value === 'left' || value === 'right'
      }
    }
  }
};
</script>

<style lang="scss" scoped>
@keyframes spin {
  0% {transform: rotate(0deg);}
  100% {transform: rotate(360deg);}
}
.w-button {
  font-size: var(--font-size);
  height: var(--button-height);
  padding: 0 1em;
  border-radius: var(--border-radius);
  border: 1px solid var(--border-color);
  background: var(--button-bg);
  display: inline-flex;
  justify-content: center;
  align-items: center;
  vertical-align: middle;
  &:hover {
    border-color: var(--border-color-hover);
  }
  &:active {
    background-color: var(--button-active-bg);
  }
  &:focus {
    outline: none;
  }
  > .icon {
    order:1;
    margin-right:.3em;
  }
  > .content{
    order:2;
  }
  &.icon-right {
    > .icon {
      order: 2;
      margin-left:.3em;
      margin-right:0;
    }
    > .content{
      order:1;
    }
  }
  .loading{
    animation: spin 1s infinite linear;
  }
}
</style>