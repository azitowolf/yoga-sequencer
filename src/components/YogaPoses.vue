<template>
  <div class="yoga">
    <h2>Yoga Sequence</h2>
    <column>
      <p>enter your sequence below in the following format</p>
      <textarea id="input"></textarea>
      <button id="convert-button" v-on:click="clickHandler()">Convert</button>
    </column>
    <column>
      <p>...and a yoga sequence diagram will be generated for you</p>

      <ol>
        <li v-for="pose in poses" class="pose-card" v-bind:key="pose.name">
          <div>{{pose.name}}</div>
          <img :src="pose.imageUrl" alt="pose image" />
        </li>
      </ol>
    </column>
  </div>
</template>

<script>
const testPosesArray = [
  {
    name: "Downward Facing Dog",
    aliases: "DFD",
    imageUrl:
      "https://github.com/azitowolf/yogaposes/blob/master/DFD.png?raw=true"
  },
  {
    name: "Mountain",
    aliases: "MTN",
    imageUrl:
      "https://github.com/azitowolf/yogaposes/blob/master/mountain.png?raw=true"
  },
  {
    name: "Chattaranga",
    aliases: "CHAT",
    imageUrl:
      "https://github.com/azitowolf/yogaposes/blob/master/chattaranga.png?raw=true"
  },
  {
    name: "Upward Facing Dog",
    aliases: "UFD",
    imageUrl:
      "https://github.com/azitowolf/yogaposes/blob/master/upward_facing_dog.png?raw=true"
  },
  {
    name: "Half Moon",
    aliases: "HFMN",
    imageUrl:
      "https://github.com/azitowolf/yogaposes/blob/master/half_moon.png?raw=true"
  }
];

export default {
  name: "YogaPoses",
  props: {
    poses: [
      {
        name: "Downward Facing Dog",
        aliases: "DFD",
        imageUrl:
          "https://github.com/azitowolf/yogaposes/blob/master/DFD.png?raw=true"
      }
    ]
  },
  methods: {
    toggle: function(todo) {
      todo.done = !todo.done;
    },
    clickHandler: function() {
      const sequence = document.getElementById("input");
      const linesArray = sequence.value.split("\n");
      console.log(linesArray);
      this.poses = [];
      console.log("--- entering loop ---");
      linesArray.forEach(line => {
        console.log(line);
        let result = testPosesArray.find(
          pose => pose.aliases.trim() === line.trim()
        );
        console.log(result);
        if (result) this.poses.push(result);
      });
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.yoga {
  background: #fff;
  border-radius: 4px;
  padding: 20px;
  transition: all 0.2s;
  display: flex;
  flex-direction: row;
}

li {
  margin: 8px 0;
}

li img {
  height: 100px;
  width: 100px;
}

h2 {
  font-weight: bold;
  margin-bottom: 15px;
}

column {
  width: 50%;
}

.pose-card {
  border: 2px solid black;
}

#input {
  height: 500px;
  width: 150p;
}
</style>
