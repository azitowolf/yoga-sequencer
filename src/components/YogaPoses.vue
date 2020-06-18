<template>
  <div class="yoga">
    <p>enter your sequence below in the following format</p>
    <div class="tutorial">
      Use any of the following aliases:
      <div class="tutorial-list">
        <div v-for="pose in poses" v-bind:key="pose.name" class="aliases-item">
          <div class="name">{{pose.name}}</div>
          <div class="aliases">{{pose.aliases}}</div>
        </div>
      </div>
    </div>
    <div class="top">
      <textarea id="input"></textarea>
      <button id="convert-button" v-on:click="clickHandler()">Convert</button>
    </div>
    <p>...and a yoga sequence diagram will be generated for you</p>

    <div class="bottom">
      <div class="pose-sequence-list">
        <div v-for="pose in poses" class="pose-card" v-bind:key="pose.name">
          <img :src="pose.imageUrl" alt="pose image" />
          <div>{{pose.name}}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "YogaPoses",
  props: { poses: { type: Array } },
  methods: {
    removeBullets: function(line) {
      return line.replace(/^\s*(?:[\dA-Z]+\.|[a-z]\)|•)\s+/, "");
    },
    clickHandler: function() {
      const sequence = document.getElementById("input");
      const linesArray = sequence.value.split("\n");
      console.log(linesArray);
      // this.poses = [];
      console.log("--- entering loop ---");
      linesArray.forEach(line => {
        console.log(line);
        let result = this.poses.find(
          pose => pose.aliases.indexOf(this.removeBullets(line.trim())) >= 0
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
  flex-direction: column;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  align-items: stretch;
}
.tutorial-list {
  display:flex;
  flex-direction: column;
  }

.aliases-item {
  flex-direction: row;
}
.name, 
.aliases {  
  flex: 1 1 50%;
}

.top,
.bottom {
  font-size: 16px;
  font-family: monospace;
  flex: 1 1 100%;
  margin: 8px;
  padding: 8px;
}

#input {
  height: 100%;
  width: 100%;
}

.pose-sequence-list {
  display: flex;
  flex-direction: row;
}

.pose-card {
  border: 1px solid black;
  margin: 5px;
  display: flex;
  flex-direction: column;
  align-items: center;
  vertical-align: center;
}

h2 {
  font-weight: bold;
  margin-bottom: 15px;
}
</style>
