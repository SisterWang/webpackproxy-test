<template>
  <div id="app">
    <div>
      <p>{{info.data.title}}</p>
      <table>
        <tr>
          <td>名称</td>
          <td>上映年份</td>
          <td>图片</td>
          <td>链接</td>
        </tr>
        <tr>
          <td>{{info.data.subjects[0].title}}</td>
          <td>{{info.data.subjects[0].year}}</td>
          <td>
            <img :src="info.data.subjects[0].images.small" alt="">
          </td>
          <td>{{info.data.subjects[0].images.small}}</td>
        </tr>
      </table>
    </div>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
// import axios from 'axios'
// Vue.prototype.$axios = axios

export default {
  name: 'app',
  components: {
    HelloWorld
  },
  data() {
    return {
      info: null,
    }
  },
  mounted() {
    this.axios
      .get("./v2/movie/in_theaters")
      .then(response => (this.info = response))
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
