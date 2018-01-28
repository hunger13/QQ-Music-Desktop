<template>
<div id="slider">
    <div class="section user">
    </div>
    <div class="section music-house">
        <div class="title">音乐馆</div>
        <div class="links">
            <router-link class="link recommend" to="/home">精选</router-link>
            <router-link class="link ranking" to="/toplist">排行</router-link>
            <router-link class="link playlist" to="/songlist">歌单</router-link>
            <router-link class="link radio" to="/radio">电台</router-link>
            <router-link class="link mv" to="/mv">MV</router-link>
        </div>
    </div>
</div>
</template>

<script>
export default {
  name: "sliderbar"
};
</script>

<style lang="scss" scoped>
.section {
  margin: 0 15px;
  &.user {
    height: 155px;
    border-bottom: 1px solid #e8e8e8;
    text-align: center;
    line-height: 155px;
  }
  .title {
    color: #777;
    text-align: left;
    font-size: 12px;
    margin: 18px 0 7px 8px;
    padding-left: 2px;
  }
  &.music-house {
      padding-bottom: 20px;
      border-bottom: 1px solid #e8e8e8;
  }
}
.links{
  display: flex;
  flex-direction: column;
}
 .link {
    color: #222;
    height: 26px;
    display: flex;
    align-items: center;
    font-size: 13px;
    border-radius: 3px;
    padding-left: 28px;
    background-size: 20px;
    background-repeat: no-repeat;
    background-position: 5px;
    $icons: recommend ranking playlist radio mv;
    @each $item in $icons {
      &.#{$item} {
        background-image: url(../../assets/images/icon-#{$item}.png);
        &.router-link-active {
          background-image: url(../../assets/images/icon-#{$item}-active.png);
        }
      }
    }
  }
#slider {
  background-color: #eee;
  min-width: 200px;
  height: calc(100vh - 60px);
}
  .router-link-active {
    color: #fff;
    background-color: #31c27c;
  }
</style>


