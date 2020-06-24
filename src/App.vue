<template>
  <div id="app">
    <h2>Yoga Sequencer</h2>
    <h4>About</h4>
    <YogaTutorial :poses="poses" />
    <YogaPoses :poses="poses" />
  </div>
</template>

<script>
import YogaPoses from './components/YogaPoses.vue'
import YogaTutorial from './components/YogaTutorial.vue'

const posesArray = [
  {
    id: 1,
    name: "Downward Facing Dog",
    sanscrit: "Adho Mukha Svansana",
    chakras: ["Vishuddha"],
    aliases: [
      "dfd",
      "down dog",
      "downward facing dog",
      "dog"
      ],
    imageUrl:
      "https://github.com/azitowolf/yogaposes/blob/master/DFD.png?raw=true"
  },
  {
    id: 2,
    name: "Mountain",
    sanscrit: "Tadasana",
    aliases: ["mountain", "mtn", "mount"],
    imageUrl:
      "https://github.com/azitowolf/yogaposes/blob/master/mountain.png?raw=true"
  },
  {
    id: 3,
    name: "Chattaranga",
        sanscrit: "Urdhva Mukha Svansana",
        chakras: [""],

    aliases: ["Chattaranga", "chat"],
    imageUrl:
      "https://github.com/azitowolf/yogaposes/blob/master/chattaranga.png?raw=true"
  },
  {
    id: 4,
    name: "Upward Facing Dog",
    sanscrit: "Urdhva Mukha Svansana",
    aliases: ["upward facing dog", "ufd"],
    imageUrl:
      "https://github.com/azitowolf/yogaposes/blob/master/upward_facing_dog.png?raw=true"
  },
  {
    id: 5,
    name: "Half Moon",
    aliases: ["half moon", "hfmn"],
    imageUrl:
      "https://github.com/azitowolf/yogaposes/blob/master/half_moon.png?raw=true"
  }
];

export default {
  name: 'App',
  components: {
    YogaTutorial,
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
