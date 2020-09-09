<template>
	<div>
		<img :src="createImageUrlFromRef(pose.image.asset._ref)" :alt="`image of yoga pose: ${pose.name}`"/>
		<div>{{ pose.name }}</div>
		<div v-if="showInfo.sanskrit">
			{{ pose.sanskrit }}
		</div>
		<div v-if="showInfo.difficulty">
			{{ this.difficulty }}
		</div>
		<div v-if="showInfo.description">
			{{ pose.description }}
		</div>
	</div>
</template>

<script>
	export default {
		name: "YogaPose",
		props: {
			pose: Object,
			showInfo: Object,
			difficulty:String
		},
		methods: {
			createImageUrlFromRef: function(ref) {
				const refParams = ref.split("-");
				const fileType = refParams[3];
				const imageID = refParams[1] + "-" + refParams[2];
				const imageUrl = `https://cdn.sanity.io/images/5iv5ywr9/production/${imageID}.${fileType}`;
				return imageUrl;
			}
		}
	};
</script>

<style lang="scss" scoped>

</style>