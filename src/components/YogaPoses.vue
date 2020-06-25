<template>
  <div class="yoga-poses-component">
    <p>Enter your sequence below in the following format</p>
    <div class="top">
      <textarea v-model="poseInput" id="input"  v-on:keyup.13="convertToPoses()"></textarea>
      <button id="convert-button" v-on:click="convertToPoses()">Convert</button>
    </div>
    <p>...and a yoga sequence diagram will be generated for you below</p>
    <p>try a demo set 
      <button v-on:click="setDemo(['mtn', 'mtn'])">Suriya A</button>
    </p>
    <div class="bottom">
      <div class="pose-sequence-list">
        <div v-for="pose in outputPoses" class="pose-card" v-bind:key="pose.id">
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
  data: function() {
    return {
      outputPoses: [],
      poseInput: ""
    };
  },
  props: {
    poses: {
      type: Array
    }
  },
  created: function() {
    console.log("setting poses to blank");
    console.log("--------------");
    this.outputPoses = [];

    console.log("rendering the yoga component");
    console.log("--------------");
  },
  methods: {
    objectify: function(pose) {
      //generate an id
      let randomID = function() {
        return (
          "_" +
          Math.random()
            .toString(36)
            .substr(2, 9)
        );
      };
      // apply it to the FE so that vue can use it
      return { ...pose, id: randomID() };
    },
    cleanString: function(line) {
      const withoutBulletsOrSpaces = line
        .trim()
        .toLowerCase()
        .replace(/^\s*(?:[\dA-Z]+\.|[a-z]\)|•)\s+/, "");
      return withoutBulletsOrSpaces;
    },
    setDemo: function(poseArray = []) {
      this.poseInput = poseArray.reduce((accumulator, pose) => { return accumulator + pose + '\n'}, '')
      this.convertToPoses(poseArray)
    },
    convertToPoses: function(poseArray=false) {
      const sequence = document.getElementById("input").value;
      const linesArray = poseArray || sequence.split("\n");
      console.log(linesArray);
      this.outputPoses = [];
      console.log("--- entering loop ---");
      linesArray.forEach(line => {
        console.log(this.cleanString(line), this.poses);
        let result = this.poses.find(
          // find the correct pose in pose array
          pose => pose.aliases.indexOf(this.cleanString(line)) >= 0
        );
        console.log(result);
        if (result) this.outputPoses.push(this.objectify(result));
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
  display: flex;
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
  width: 50%;
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
