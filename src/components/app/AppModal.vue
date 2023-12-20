<template>
	<Transition>
		<div v-if="modelValue">
			<div class="modal-backdrop fade show"></div>
			<div
				class="modal fade show d-block"
				tabindex="-1"
				aria-labelledby="exampleModalLabel"
				aria-hidden="true"
			>
				<div class="modal-dialog">
					<div class="modal-content">
						<div class="modal-header">
							<slot name="header">
								<h5 class="modal-title" id="exampleModalLabel"></h5>
								<button
									type="button"
									class="btn-close"
									aria-label="Close"
									@click="$emit('update:modelValue', false)"
								></button>
							</slot>
						</div>
						<div class="modal-body">
							<slot></slot>
						</div>
					</div>
				</div>
			</div>
		</div>
	</Transition>
</template>

<script setup>
// defineProps({
// 	modelValue: Boolean,
// 	title: String,
// });
//defineEmits(['close', 'update:modelValue']);
</script>

<style scoped>
.modal {
	position: fixed;
	z-index: 999;
	top: 20%;
	left: 50%;
	width: 300px;
	margin-left: -150px;
}
</style>
