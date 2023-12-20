<template>
	<h2>{{ props.tag }}</h2>
	<!-- <div class="d-flex flex-wrap" v-for="item in items.list" :key="item"> -->
	<div class="d-flex flex-wrap justify-content-start mt-4">
		<div v-for="(item, index) in list" :key="index">
			<div class="mb-auto p-2 flex-fill" style="border: solid 1px">
				{{ item }}
			</div>
		</div>
	</div>
	<!-- </div> -->
</template>

<script setup>
//import { ref } from 'vue';

//const items = ref('');
// const props = defineProps({
// 	id: {
// 		type: String,
// 		required: true,
// 	},
// 	list: {
// 		type: String,
// 		required: true,
// 	},
// });

const props = defineProps({
	tag: {
		type: String,
	},
	list: {
		type: Array,
	},
});

console.log('AppMenu:', props.items);
</script>

<style scoped></style>
