<template>
  <div id="top-item">
      <!-- {{item.pic_v12}} -->
      <div class="image-content">
         <img class="image" :src= "item.pic_v12">
         <Playable />
         <span class="paly-count">{{(item.listennum / 10000).toFixed(1)  + '万'}}</span>
      </div>

     <ul class="song-list">
         <li v-for="(song , idx) in item.songlist.slice(0, 3)" :key="idx">
             <span>{{idx + 1}} </span>
             <span>{{song.songname}}</span>
             <span>- {{song.singername}}</span>
         </li>
     </ul>
  </div>
</template>

<script>
import Playable from "../shared/Playable";
export default {
  name: "topitem",
  props: ["item"],
  components: { Playable }
};
</script>

<style lang="scss" scoped>
#top-item {
  width: 360px;
  height: 124px;
  background-color: rgb(250, 250, 250);
  margin-top: 20px;
  margin-left: 20px;
  display: flex;
  flex-direction: row;
  .image-content {
    width: 124px;
    height: 124px;
    position: relative;
    .paly-count {
      position: absolute;
      bottom: 2px;
      right: 4px;
      font-size: 12px;
      font-weight: bold;
      color: #ffffff;
    }
  }
  .image {
    width: 100%;
    height: 100%;
  }
  .song-list {
    width: 230px;
    text-align: left;
    margin-left: 10px;
    font-size: 12px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    overflow: hidden;

    li {
      margin-top: 10px;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
  }
}
</style>

