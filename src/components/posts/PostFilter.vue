<template>
	<form @submit.prevent>
		
				<input
					:value="title"
					@input="changeTitle"
					type="text"
					class="form-control"
					placeholder="포인트+쿠폰이 쏟아지는 룰렛 돌리기!"
					id="inputWidth"
				/>
	</form>
</template>

<script setup>
import { ref } from 'vue';

defineProps({
	title: String,
	limit: [Number, String],
});
const emit = defineEmits(['update:title', 'update:limit']);

const valid = ref(true);
const changeTitle = e => {
	if (valid.value === false) {
		return;
	}
	valid.value = false;
	setTimeout(() => {
		emit('update:title', e.target.value);
		valid.value = true;
	}, 500);
};
</script>

<style scoped>
#inputWidth{
	width: 350px;	
}

</style>
