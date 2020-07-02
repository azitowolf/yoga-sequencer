<template>
  <div class="yoga-tutorial-component">
    <p>Explanation text goes here to tell you about this component</p>
    <div class="tutorial">
      <div class="tutorial-list">
        <p>Use any of the following aliases:</p>
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
.yoga-tutorial-component, .tutorial-list {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}
</style>
