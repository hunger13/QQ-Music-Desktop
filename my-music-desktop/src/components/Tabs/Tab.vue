<template>
<div v-show="this.active">
  <slot></slot>
</div>
</template>

<script>
export default {
  name: "Tab" ,
  props:{
      name: {required: true } ,
      href: { default: '' } ,
      selsected:  false 
  } ,
  data() {
      return {
          active: false
      }
  } ,
  created() {
      this.active = this.selsected
  }
};
</script>

<style lang="scss" scoped>

</style>
