<template>
	<div id="app">
		<h1>🧘‍♂️ Yoga Sequencer</h1>
		<p>
			A little app to help yoga teachers or practitioners
			<b>visualize their practice</b> in sequence.
		</p>
		<a href="#yoga-tutorial-component" class="to-tutorial">Learn More</a>
		<a href="#yoga-poses-component" class="to-sequencer"
			>Take Me to the Sequencer</a
		>

		<div class="app-body">
			<!-- TODO remove routes if not needed -->
			<YogaTutorial :poses="poses" />
			<YogaPoses :poses="poses" />
		</div>
	</div>
</template>

<script>
import YogaPoses from "./components/YogaPoses.vue";
import YogaTutorial from "./components/YogaTutorial.vue";
import axios from "axios";

export default {
	name: "App",
	components: {
		YogaTutorial,
		YogaPoses
	},
	data: function() {
		return {
			page: "home",
			poses: []
		};
	},
	mounted: function() {
		axios
			.get(
				"https://5iv5ywr9.api.sanity.io/v1/data/query/production?query=*[_type%20==%20%22pose%22]"
			)
			.then(response => (this.poses = response.data.result))
			.catch(error => console.warn(`error! Message: ${error.message}`));
	}
};
</script>

<style>
#app {
	font-family: Avenir, Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: left;
	color: #2c3e50;
	margin: 60px auto;
	max-width: 700px;
	display: flex;
	align-items: flex-start;
	flex-direction: column;
	position: relative;
}
.app-body {
	margin-top: 10px;
}
button {
	border: 3px solid papayawhip;
	padding: 4px;
	font-weight: bold;
	background-color: white;
	margin: 0.5em;
}

@media (max-width: 500px) {
	#app {
		padding: 5px;
	}
}
</style>
