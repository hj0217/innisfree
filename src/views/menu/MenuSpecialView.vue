<template>
	<div>
		<AppMenu
			:id="items.id"
			:tag="items.tag"
			:list="items.list"
			@click="selectedMenu"
		></AppMenu>
		<RouterView></RouterView>
	</div>
</template>

<script setup>
import AppMenu from '@/components/app/AppMenu.vue';

import { ref, watchEffect } from 'vue';
import { getMenu } from '@/api/menu.js';
import { getProducts } from '@/api/products';

const items = ref([]); //배열로 선언 시 객체할당 가능

const props = defineProps({
	id: [String, Number],
});

const fetchMenu = async () => {
	const { data } = await getMenu(props.id);
	console.log('props.id:', props.id);
	console.log('data type:', typeof data);
	items.value = data;
};

const products = ref([]);
const selectedMenu = async () => {
	console.log('들어오나요?');
	const { data } = await getProducts(`${props.id}/${props.tag}`);
	products.value = data;
};

watchEffect(() => {
	fetchMenu(props.id);
	selectedMenu(props.id);
});
</script>

<style scoped></style>
