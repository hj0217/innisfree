<template>
	<div>
		<AppMenu :id="items.tag" :list="items.list"></AppMenu>
	</div>

	와이러노 와이러노 와이러노 와이러노 와이러노 와이러노 와이러노
</template>

<script setup>
import AppMenu from '@/components/app/AppMenu.vue';
//import AppCard from '@/components/app/AppCard.vue';
import { ref, watch } from 'vue';
import { getMenu } from '@/api/menu.js';
//import { useRoute } from 'vue-router';

const items = ref({}); //객체로 선언 시 데이터 하나하나 넣어줘야함
//const route = useRoute();

const props = defineProps({
	id: [String, Number],
});

const fetchMenu = async () => {
	const { id, tag, list } = await getMenu(props.id);
	console.log('data type:', typeof { id, tag, list });
	items.value.id = id; // 첫 번째 항목의 id
	items.value.list = list; // 첫 번째 항목의 list
	//items.value = data;
	console.log('data:', { id, tag, list });
	console.log('MenuEventView확인용:', items.value);
	console.log('MenuEventView확인용 ID:', items.value.id);
};

watch(fetchMenu());
</script>

<style scoped></style>
