<template>
	<div id="yoga-tutorial-component" class="yoga-tutorial-component" >
		<h2>About</h2>
		<!-- TODO turn this into a static md file :) -->
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
		<p>
			You can then share that picture with your students, friends, etc.
		</p>
		<div class="supported-poses">
			<h2>Supported Poses</h2>
			<p>
				The following aliases are supported in the app, feel free to click
				around to see the terms you can use to define each pose
			</p>

			<div class="supported-poses-list">
				<div
					class="alias-dropdown"
					v-on:click="expand"
					v-for="pose in poses"
					v-bind:key="pose.name"
					:id="pose.name"
					v-bind:class="{ open: pose.name === browsingPose }"
				>
					{{ pose.name }}
					<div class="aliases-modal">
						<div
							class="pose-alias"
							v-for="alias in pose.aliases"
							v-bind:key="alias.name"
						>
							{{ alias }}
						</div>
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
	data: function() {
		return {
			browsingPose: "Equestrian"
		};
	},
	methods: {
		expand: function(e) {
			let dropdownName = e.target.closest(".alias-dropdown").id;
			this.browsingPose = dropdownName;
		}
	}
};
</script>

<style scoped>
.yoga-tutorial-component,
.supported-poses,
.supported-poses-list {
	position: relative;
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	text-align: left;
}
.yoga-tutorial-component pre {
	text-align: left;
}
.supported-poses-list {
	width: 100%;
	padding: 10px;
	flex-direction: column;
	flex-wrap: wrap;
	position: relative;
	border: 3px solid papayawhip;
}

.aliases-modal {
	position: absolute;
	visibility: hidden;
	right: 10px;
	bottom: 50%;
	text-align: right;
}
.alias-dropdown.open {
	font-weight: bold;
}
.alias-dropdown.open .aliases-modal {
	visibility: visible;
}
</style>
