<template>
<div class="main-tab">
    <Tabs >
      <Tab  v-for="(item , idx) in list" :key="idx" 
      :name="item.name" 
      :href="href(item.name)" 
      :selsected="idx === 0">
        <RadioList :list="item.radioList"></RadioList>
      </Tab>
    </Tabs>
</div>

</template>

<script>

import radioJson from '../../json/radio'
import RadioList from './RadioList'

export default {
  name: 'Radio' ,
  components: {RadioList} ,
  data() {
    return {
      list : radioJson
    }
  } ,
  methods: {
    href(name) {
      return `#/radio/${name}`
    }
  }
}
</script>

<style lang="scss" scoped>
  .main-tab {
    width: 100%;
    height: calc(100vh - 46px);
    overflow: auto;
  }
</style>

