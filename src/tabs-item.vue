<template>
  <div class="tabs-item" @click="onClick" :class="classes" :data-name="name">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name:'wTabsItem',
  inject:['eventBus'],
  props:{
    disabled:{
      type:Boolean,
      default:false
    },
    name: {
      type:String | Number,
      required:true
    }
  },
  data(){
    return {
      active:false,
    }
  },
  computed:{
    classes(){
      return {
        active:this.active,
        disabled:this.disabled
      }
    }
  },
  created(){
    if(this.eventBus){
      this.eventBus.$on('update:selected',(name)=>{
        this.active = name === this.name
      })
    }
  },
  methods:{
    onClick(){
      if(this.disabled) { return }
      this.eventBus && this.eventBus.$emit('update:selected',this.name,this)
      this.$emit('click',this)
    }
  }
}
</script>

<style lang="scss" scoped>
  $blue:blue;
  $disabled-text-color:grey;
  .tabs-item{
    &.active{
      color:$blue;
      font-weight: blod;
    }
    &.disabled{
      color:$disabled-text-color;
      cursor:not-allowed;
    }
    cursor: pointer;
    flex-shrink: 0;
    padding:0 2em;
    height:100%;
    display: flex;
    align-items: center;
  }

</style>