<template>
	<div class="yoga-poses-component" id="yoga-poses-component">
		<h2>Create a Sequence</h2>
		<p>
			Enter your sequence seperated by new lines, then press enter or 'convert'.
		</p>
		<p>
			Try a demo set
			<button v-on:click="setDemo(demoSequences.surya_a)">Surya A</button>
			<button v-on:click="setDemo(demoSequences.surya_b)">Surya B</button>
		</p>
		<textarea
			v-model="poseInput"
			id="input"
			v-on:keyup.13="convertToPoses()"
		/>
		<button id="convert-button" v-on:click="convertToPoses()">Convert</button>

		<p>...and a yoga sequence diagram will be generated for you below</p>
		<div class="pose-card-list">
			<div v-for="pose in outputPoses" class="pose-card" v-bind:key="pose.id">
				<img
					:src="createImageUrlFromRef(pose.image.asset._ref)"
					alt="pose image"
				/>
				<div>{{ pose.name }}</div>
			</div>
		</div>
	</div>
</template>

<script>
// import sequence data
import demoSequences from "../assets/demosequences.json";

export default {
	name: "YogaPoses",
	data: function() {
		return {
			demoSequences: demoSequences,
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
		console.log("setting poses to blank + rendering the yoga component");
		console.log("--------------");
		this.outputPoses = [];
	},
	methods: {
		createImageUrlFromRef: function(ref) {
			const refParams = ref.split("-");
			const fileType = refParams[3];
			const imageID = refParams[1] + "-" + refParams[2];
			const imageUrl = `https://cdn.sanity.io/images/5iv5ywr9/production/${imageID}.${fileType}`;
			return imageUrl;
		},
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
			this.poseInput = poseArray.reduce((accumulator, pose) => {
				return accumulator + pose + "\n";
			}, "");
			this.convertToPoses(poseArray);
		},
		convertToPoses: function(poseArray = false) {
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
				if (result === undefined)
					console.warn`no pose found with the name ${line}`;
				if (result) this.outputPoses.push(this.objectify(result));
			});
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
}

.pose-card-list {
  display: flex;
  flex-flow: row wrap;
  align-content: flex-start;
  border: 3px solid papayawhip;
  padding:10px
}
.pose-card-list:empty {
    border: none;
}

.pose-card {
  position: relative;
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

</style>
