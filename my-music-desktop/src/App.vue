<template>
  <div id="app">
    <SliderBar></SliderBar>
    <div id="nav"> <NavBar/> </div>
    <!-- <div id="view"> -->
      
    <router-view id="view"></router-view>
    <!-- </div> -->
    <div id="player"><Player/></div>
  </div>
</template>


<script>
import SliderBar from './components/shared/SliderBar'
import NavBar from './components/shared/NavBar'
import Player from './components/Player/Player'

export default {
  name: 'app',
  components:{SliderBar,NavBar,Player}
  
}
</script>

<style lang="scss">
  @import './assets/scss/reset.scss';
</style>

<style lang="scss" scoped>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  display: flex;

}

#nav {
  position: fixed;
  top: 0;
  right: 0;
  width: calc(100% - 200px) ;
  z-index: 1001;
}
#view {
  width: 100%;
  height: calc(100vh - 46px);
  padding-top: 60px;
  overflow: auto;
}
#player {
  position: fixed;
  bottom: 0;
}
</style>
