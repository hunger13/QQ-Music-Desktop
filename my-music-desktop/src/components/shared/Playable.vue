<template>
  <div id="palyable">
      <div :class="[paused && 'paused','icon']" @click="clicked"></div>
  </div>
</template>

<script>
export default {
  name: "playable",
  data() {
    return {
      paused: false
    };
  },
  methods: {
    clicked() {
      this.paused = !this.paused;
    }
  }
};
</script>

<style lang="scss" scoped>
#palyable {
  position: absolute;
  top: 0;
  width: 100%;
  height: 100%;
  z-index: 1000;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: 0.5s;
  opacity: 0;
  cursor: pointer;
  &:hover {
    opacity: 1;
    background-color: rgba(0, 0, 0, 0.5);
  }
  .icon {
    width: 45px;
    height: 45px;
    background: url(../../assets/images/icon-rank-play.png) no-repeat;
    background-size: 45px;
    &:hover {
      background-image: url(../../assets/images/icon-rank-play-hover.png);
    }
    &.paused {
      background: url(../../assets/images/icon-rank-pause.png) no-repeat;
      background-size: 45px;
      &:hover {
        background-image: url(../../assets/images/icon-rank-pause-hover.png);
      }
    }
  }
}
</style>

