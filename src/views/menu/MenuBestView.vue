<template>
	<div>
		<!-- <AppMenu :id="items.id" :list="items.list"></AppMenu> -->
		<AppMenu :tag="item.tag" :list="item.list"></AppMenu>
	</div>
</template>

<script setup>
import AppMenu from '@/components/app/AppMenu.vue';
//import AppCard from '@/components/app/AppCard.vue';
import { ref, watchEffect } from 'vue';
import { getMenu } from '@/api/menu.js';
//import { useRoute } from 'vue-router';
import { getPosts } from '@/api/posts.js';

const items = ref({});
//const route = useRoute();

const props = defineProps({
	id: [String, Number],
});

const fetchMenu = async () => {
	const { id, tag, list } = await getMenu(props.id);
	items.value.id = id; // 첫 번째 항목의 id
	items.value.list = list; // 첫 번째 항목의 list
	items.value.tag = tag; // 첫 번째 항목의 list
	//items.value = data;
	console.log('data:', { id, tag, list });
	console.log('MenuSpecialView확인용:', items.value);
	console.log('MenuSpecialView확인용 ID:', items.value.id);
};

watchEffect(fetchMenu());

const posts = ref([]);

const fetchPosts = async () => {
	const { data } = await getPosts();
	posts.value = data;
};

fetchPosts();
</script>

<style scoped></style>
