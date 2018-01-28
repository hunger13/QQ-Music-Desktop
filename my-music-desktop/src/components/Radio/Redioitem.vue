<template>
  <div class="rediolist-item" >
      <div class="image">
         <img :src="item.radioImg" alt="">
         <span class="listenNum">{{(item.listenNum / 10000).toFixed(1) + '万' }}</span>
        <Playable />
      </div>
        <div class="title">
            <span >{{item.radioName}}</span>
        </div>
  </div>
</template>

<script>
import Playable from "../shared/Playable";
export default {
  name: "rediolist-item",
  props: ["item"],
  components: { Playable }
};
</script>

<style lang="scss" scoped>
.rediolist-item {
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  text-align: left;
  padding: 0 0 15px 15px;
  .image {
    width: 135px;
    height: 135px;
    position: relative;

    .listenNum {
      font-size: 12px;
      position: absolute;
      right: 4px;
      bottom: 2px;
      color: white;
      font-weight: bold;
    }
    img {
      width: 135px;
      height: 135px;
    }
  }
  .title {
    margin-top: 4px;
    font-size: 13px;
  }
}
</style>

