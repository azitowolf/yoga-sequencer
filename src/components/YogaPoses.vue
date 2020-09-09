<template>
	<div id="yoga-poses-component" class="yoga-poses-component">
		<h2>Create a Sequence</h2>
		<p>
			Enter your sequence seperated by new lines, then press enter or 'convert'.
		</p>
		<p>
			Try a demo set:
			<button v-on:click="setDemo(demoSequences.surya_a)">Surya A</button>
			<button v-on:click="setDemo(demoSequences.surya_b)">Surya B</button>
			<!-- TODO add surya c -->
		</p>

		<textarea id="input" v-model="poseInput" v-on:keyup.13="convertToPoses()" />
		<button id="convert-button" v-on:click="convertToPoses()">
			Convert
		</button>
		<p>...and a yoga sequence diagram will be generated for you below</p>
		<button v-on:click="optionsOpen = !optionsOpen">
			Display Options
		</button>

		<div class="optionsPanel" v-if="optionsOpen">
			<Options @toggle="toggleAdditionalInfo" />
		</div>

		<div id="pose-card-list" class="pose-card-list">
			<div v-for="pose in outputPoses" class="pose-card" v-bind:key="pose.id">
				<YogaPose :pose="pose" :difficulty="difficultyString(pose.difficulty._ref)" :showInfo="showInfo" />
			</div>
		</div>
	</div>
</template>

<script>
// import sequence data
import demoSequences from "../assets/demosequences.json";
import Options from "./Options";
import YogaPose from "./YogaPose";

export default {
	name: "YogaPoses",
	components: {
		Options,
		YogaPose
	},
	data: function() {
		return {
			demoSequences: demoSequences,
			outputPoses: [],
			poseInput: "",
			optionsOpen: false,
			showInfo: {
				sanskrit: false,
				description: false,
				difficulty: false
			},
			imageSet: 1
		};
	},
	props: {
		poses: {
			type: Array
		},
		difficulties: {
			type: Array
		}
	},
	created: function() {
		this.outputPoses = [];
	},
	methods: {
		// HELPERS
		objectify: function(pose) {
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

		// DATA MANAGEMENT
		difficultyString: function(refId) {
			// TODO: Refactor to run once on created for performance, explore computed props?
			const matchedDifficulty = this.difficulties.find(
				difficulty => refId === difficulty._id
			);
			return matchedDifficulty.value;
		},
		convertToPoses: function(poseArray = false) {
			const sequence = document.getElementById("input").value;
			const linesArray = poseArray || sequence.split("\n");
			this.outputPoses = [];
			linesArray.forEach(line => {
				let result = this.poses.find(
					// find the correct pose in pose array
					pose => pose.aliases.indexOf(this.cleanString(line)) >= 0
				);
				if (result === undefined) {
					console.warn`no pose found with the name ${line}`;
				}
				if (result) this.outputPoses.push(this.objectify(result));
			});
		},
		toggleAdditionalInfo: function(field) {
			this.showInfo[field] = !this.showInfo[field];
		},
		setDemo: function(poseArray = []) {
			this.poseInput = poseArray.reduce((accumulator, pose) => {
				return accumulator + pose + "\n";
			}, "");
			this.convertToPoses(poseArray);
		}
	}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.yoga-poses-component {
	flex-direction: column;
	display: flex;
	align-items: flex-start;
}

#input {
	min-height: 200px;
	width: 100%;
	box-sizing: border-box;
	border: 3px solid papayawhip;
}

#convert-button {
	margin-left: 0px;
}

.pose-card-list {
	display: flex;
	flex-flow: row wrap;
	align-content: flex-start;
	border: 3px solid papayawhip;
	padding: 10px;
	box-sizing: border-box;
}
.pose-card-list:empty {
	border: none;
}

.pose-card {
	position: relative;
	text-align: center;
}

.pose-card::after {
	content: "→";
	position: absolute;
	font-size: 20px;
	right: 0px;
	top: 50%;
}
.pose-card:last-child::after {
	content: "";
}

@media (max-width: 500px) {
	.pose-card-list {
		display: flex;
		width: 100%;
		flex-flow: column wrap;
		justify-content: center;
		align-items: center;
		align-content: space-around;
	}
	.pose-card::after {
		content: "";
	}
}
</style>
