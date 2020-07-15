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
	</div>
</template>

<script>
export default {
	name: "Options",
	methods: {
		toggleAdditionalInfo: function(field) {
			this.$emit('toggle', field);
		}
	}
};
</script>

<style lang="scss" scoped>
</style>