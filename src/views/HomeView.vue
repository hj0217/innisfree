<template>
	<AppFullImg @click="$router.push('/promotion')" class="mb-5"></AppFullImg>
	<AppGrid :items="posts" col-class="col-12 col-md-6 col-lg-4">
		<template v-slot="{ item }">
			<AppCard :name="item.title" :content="item.content">
				카드 내용 들어감</AppCard
			>
		</template>
	</AppGrid>

	<!-- <Teleport to="#modal">
		<AppModal v-if="isModalOpen"> 모달불러오기 </AppModal>
	</Teleport> -->
</template>

<script setup>
import { reactive, ref, toRef, toRefs } from 'vue';
import AppFullImg from '@/components/app/AppFullImg.vue';
import AppModal from '@/components/app/AppModal.vue';
import AppCard from '@/components/app/AppCard.vue';
import { getPosts } from '@/api/posts.js';

const posts = ref([]);

const fetchPosts = async () => {
	const { data } = await getPosts();
	posts.value = data;
};

fetchPosts();
</script>

<style scoped></style>
