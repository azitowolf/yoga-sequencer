<template>
  <div id="app">
    <h2>Yoga Sequencer <b>About</b> </h2>
    <YogaTutorial :poses="poses" />
    <YogaPoses :poses="poses" />
  </div>
</template>

<script>
import YogaPoses from './components/YogaPoses.vue'
import YogaTutorial from './components/YogaTutorial.vue'
import axios from 'axios'

export default {
  name: 'App',
  components: {
    YogaTutorial,
    YogaPoses
  },
  data: function () {
    return {poses: []}
  },
  mounted: function () {
  axios
    .get('https://5iv5ywr9.api.sanity.io/v1/data/query/production?query=*[_type%20==%20%22pose%22]')
    .then(response => (this.poses = response.data.result))
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin: 60px auto;
  max-width: 700px;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
}
</style>
