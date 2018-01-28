
<template>
  <div class="radio-list">
    <RadioItem v-for="(item , idx ) in list" :key="idx" 
    :item="item"></RadioItem>
  </div>
</template>

<script>

import RadioItem from './Redioitem'

export default {
    name: 'radiolist' ,
    components: {RadioItem} ,
    props: ["list"]

}
</script>

<style lang="scss" scoped>
  .radio-list {
    display: flex;
    flex-wrap: wrap;
    font-size: 100px;
  }
</style>
