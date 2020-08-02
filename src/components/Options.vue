<template>
	<div>
		<button v-on:click="toggleAdditionalInfo('sanskrit')">
			toggle sanskrit
		</button>
		<button v-on:click="toggleAdditionalInfo('difficulty')">
			toggle difficulty
		</button>
		<button v-on:click="toggleAdditionalInfo('Description')">
			toggle description
		</button>
		<button v-on:click="changeImageSet('test')">
			change image set
		</button>
	</div>
</template>

<script>
export default {
	name: "Options",
	methods: {
		toggleAdditionalInfo: function(field) {
			this.$emit('toggle', field);
		},
		changeImageSet: function(set) {
			this.$emit('changeImageSet', set);
		}
	}
};
</script>

<style lang="scss" scoped>
</style>