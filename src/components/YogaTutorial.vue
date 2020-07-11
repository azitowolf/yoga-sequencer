<template>
  <div class="yoga-tutorial-component">
    <p>The idea is simple: You enter your sequence in the format below:</p>
    <pre>
      1. Downward facing dog
      2. Upward facing dog
      3. Mountain
      4. etc...
    </pre>
    <p>Or you can get lazy and write the sequence more like this...</p>
    <pre>
      1. DFD
      2. UFD
      3. Mountain
      4. etc...
    </pre>
    <p>The app will create a nice little picture for you</p>
    <img src="../assets/example-seq.png" alt srcset />
    <p>You can then share that picture with your students, friends, etc.</p>

    <div class="tutorial">
      <div class="tutorial-list">
        <p>The following aliases are supported in the app:</p>
        <div v-for="pose in poses" v-bind:key="pose.name" class="alias-name">
          <div id="alias-dropdown" class="alias-dropdown">
            <button v-on:click="expand">{{ pose.name }}</button>
            <div
              v-for="alias in pose.aliases"
              v-bind:key="alias.name"
              :class="alias.name"
              class="pose-alias"
            >
              {{ alias }}
            </div>
          </div>
        </div>
      </div>
      <p>click around to see the terms you can use to define each pose</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "YogaTutorial",
  props: {
    poses: {
      type: Array,
    },
  },
  created: function() {
    console.log("rendering the yoga tutorial component");
    console.log("--------------");
  },
  methods: {
    expand: function(e) {
      let dropdown = e.target.closest(".alias-dropdown");
      document
        .getElementsByClassName("alias-dropdown")
        .forEach((element) => element.classList.remove("open"));
      dropdown.classList.add("open");
    },
  },
};
</script>

<style scoped>
.yoga-tutorial-component,
.tutorial-list {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}

.yoga-tutorial-component pre {
  text-align: left;
}

.pose-alias {
  position: absolute;
  right: 0;
  visibility: hidden;
}
.alias-dropdown {
  text-align: left;
}
.alias-dropdown button {
  font-weight: bold;
}

.alias-dropdown.open .pose-alias {
  visibility: visible;
  position: relative;
}
</style>
