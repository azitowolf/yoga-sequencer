<template>
  <div id="app">
    <h2>Yoga Sequencer</h2>
    <YogaPoses 
    msg="Welcome to Your Vue.js App" 
    :poses="poses" 
  />
  </div>
</template>

<script>
import YogaPoses from './components/YogaPoses.vue'

const posesArray = [
  {
    id: 1,
    name: "Downward Facing Dog",
    aliases: [
      "DFD",
      "Down Dog",
      "Downward Facing Dog",
      "Dog"
      ],
    imageUrl:
      "https://github.com/azitowolf/yogaposes/blob/master/DFD.png?raw=true"
  },
  {
    id: 2,
    name: "Mountain",
    aliases: ["Mountain", "MTN", "Mount"],
    imageUrl:
      "https://github.com/azitowolf/yogaposes/blob/master/mountain.png?raw=true"
  },
  {
    id: 3,
    name: "Chattaranga",
    aliases: ["Chattaranga", "CHAT"],
    imageUrl:
      "https://github.com/azitowolf/yogaposes/blob/master/chattaranga.png?raw=true"
  },
  {
    id: 4,
    name: "Upward Facing Dog",
    aliases: ["Upward Facing Dog", "UFD"],
    imageUrl:
      "https://github.com/azitowolf/yogaposes/blob/master/upward_facing_dog.png?raw=true"
  },
  {
    id: 5,
    name: "Half Moon",
    aliases: ["Half Moon", "HFMN"],
    imageUrl:
      "https://github.com/azitowolf/yogaposes/blob/master/half_moon.png?raw=true"
  },
    {
    id: 1,
    name: "Downward Facing Dog",
    aliases: [
      "DFD",
      "Down Dog",
      "Downward Facing Dog",
      "Dog"
      ],
    imageUrl:
      "https://github.com/azitowolf/yogaposes/blob/master/DFD.png?raw=true"
  },
  {
    id: 2,
    name: "Mountain",
    aliases: ["Mountain", "MTN", "Mount"],
    imageUrl:
      "https://github.com/azitowolf/yogaposes/blob/master/mountain.png?raw=true"
  },
  {
    id: 3,
    name: "Chattaranga",
    aliases: ["Chattaranga", "CHAT"],
    imageUrl:
      "https://github.com/azitowolf/yogaposes/blob/master/chattaranga.png?raw=true"
  },
  {
    id: 4,
    name: "Upward Facing Dog",
    aliases: ["Upward Facing Dog", "UFD"],
    imageUrl:
      "https://github.com/azitowolf/yogaposes/blob/master/upward_facing_dog.png?raw=true"
  },
  {
    id: 5,
    name: "Half Moon",
    aliases: ["Half Moon", "HFMN"],
    imageUrl:
      "https://github.com/azitowolf/yogaposes/blob/master/half_moon.png?raw=true"
  }
];

export default {
  name: 'App',
  components: {
    YogaPoses
  },
  data: function () {
    return {poses: posesArray}
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
  margin-top: 60px;
}
</style>
