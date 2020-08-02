<template>
<div class="center">
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
			<YogaPoses :poses="poses" :difficulties="difficulties" />
		</div>
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
			poses: [],
			difficulties: []
		};
	},
	mounted: async function() {
		try {
			const poseArray = await axios.get(
				"https://5iv5ywr9.api.sanity.io/v1/data/query/production?query=*[_type%20==%20%22pose%22]"
			);
			this.poses = poseArray.data.result;
			const difficulties = await axios.get(
				"https://5iv5ywr9.api.sanity.io/v1/data/query/production?query=*[_type%20==%20%22difficulty%22]"
			);
			this.difficulties = difficulties.data.result;
		} catch (error) {
			console.warn(`error! Message: ${error.message}`);
		}
	}
};
</script>

<style>
.center {
	display: grid;
	place-items: center;
	width:100vw;
}
#app {
	font-family: Avenir, Helvetica, Arial, sans-serif;
	text-align: left;
	color: #2c3e50;
	margin-top: 60px;
	max-width: 700px;
	width: 95vw;
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
