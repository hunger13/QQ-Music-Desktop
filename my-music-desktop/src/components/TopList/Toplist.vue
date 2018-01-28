<template>
  <div >
    <Top v-for="(list , idx) in topJson " :items="list" :key="idx" ></Top>
  </div>
</template>

<script>
import Top from './Top'
import TopJson from '../../json/TopList'
export default {
  name: 'Toplist',
  components:{Top},
  data () {
    return {
     topJson:  TopJson
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
