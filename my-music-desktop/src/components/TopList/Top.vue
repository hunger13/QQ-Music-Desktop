
<template>
  <div id="top">
    <div class="title">{{items.GroupName}}</div>
    <div class="list">
        <TopList class="item" v-for="(item , idx) in items.List" :key="idx"
        :item="item" ></TopList>
    </div>
    <!-- <div class="content">content</div> -->
  </div>
</template>

<script>
import TopList from './TopItem'
export default {
    name: 'top',
    props: ['items'],
    components: {TopList} 
}
</script>

<style lang="scss" scoped>
  #top {
    margin-bottom: 10px;
    .title {
      height: 60px;
      width: 100%;
      border-bottom: 1px solid #eeeeee;
      margin: 0 20px;
      text-align: left;
      line-height: 60px;
      font-size: 20px;
      color: #666;
    }
    .list {
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
    }
  }
</style>

