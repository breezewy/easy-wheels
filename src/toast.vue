<template>
  <div class="toast" ref="wrapper" :class="toastClasses">
    <div class="message">
      <slot v-if="!enableHtml"></slot>
      <div v-else v-html="$slots.default[0]"></div>
    </div>
    <div class="line" ref="line"></div>
    <span class="close" v-if="closeButton" @click="onClickClose">
      {{closeButton.text}}
    </span>
  </div>
</template>

<script>
export default {
  name:'wToast',
  props:{
    autoClose:{
      type:Boolean,
      default:true
    },
    autoCloseDelay:{
      type:Number,
      default:3
    },
    closeButton:{
      type:Object,
      default: ()=>{
        return {
          text:'关闭',callback:undefined
        }
      }
    },
    enableHtml:{
      type:Boolean,
      default:false
    },
    position:{
      type:String,
      default:'top',
      validator(value){
        return ['top','bottom','middle'].indexOf(value) >= 0
      }
    }
  },
  mounted(){
    this.updateStyles()
    this.execAutoClose()
  },
  computed:{
    toastClasses(){
      return {
        [`position-${this.position}`]:true
      }
    }
  },
  methods:{
    execAutoClose(){
      if(this.autoClose){
        setTimeout(()=>{
          this.close()
        },this.autoCloseDelay*1000)
      }
    },
    updateStyles(){
      this.$nextTick(() => {
        this.$refs.line.style.height = this.$refs.wrapper.getBoundingClientRect().height+'px'
      })
    },
    close(){
      this.$el.remove()
      this.$destroy()
    },
    log(){
      console.log('测试')
    },
    onClickClose(){
      this.close()
      if(this.closeButton && typeof this.closeButton.callback === 'function'){
        this.closeButton.callback(this)
      }
    }
  }
}
</script>

<style lang="scss" scoped>
   $font-size: 14px;
   $toast-min-heihgt:40px;
   $toast-bg:rgba(0,0,0,0.75);
  .toast{
    color:#fff;
    position: fixed;
    left:50%;
    transform: translate(-50%);
    font-size: $font-size;
    line-height: 1.8;
    min-height:$toast-min-heihgt;
    display: flex;
    align-items: center;
    background:$toast-bg;
    border-radius: 4px;
    box-shadow: 0px 0px 3px 0px rgba(0,0,0,0.5);
    padding:0 16px;
    .message{
      padding:8px 0;
    }
    .close{
      padding-left:16px;
      flex-shrink: 0;
    }
    .line{
      height:100%;
      border-left:1px solid #666;
      margin-left:16px;
    }
    &.position-top{
      top:0;
      transform: translateX(-50%);
    }
    &.position-bottom{
      bottom:0;
      transform: translateX(-50%);
    }
    &.position-middle{
      top:50%;
      transform: translate(-50%,-50%);
    }
  }

</style>