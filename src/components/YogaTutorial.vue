<template>
  <div class="yoga">
    <p>Enter your sequence below in the following format</p>
    <div class="tutorial">
      Use any of the following aliases:
      <div class="tutorial-list">
        <div v-for="pose in poses" v-bind:key="pose.name" class="aliases-item">
          <div class="name">
            <strong>{{pose.name}}</strong>
            : {{pose.aliases}}
          </div>
        </div>    
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "YogaTutorial",
  props: {
    poses: {
      type: Array
    }
  },
  created: function() {
    console.log("rendering the yoga tutorial component");
    console.log("--------------");
  },
  methods: {
    
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
