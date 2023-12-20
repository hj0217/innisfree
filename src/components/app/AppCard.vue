<template>
	<div class="card mb-5">
		<div class="card-header">
			<img src="@/assets/dart.jpg" class="card-img-top" alt="..." />
		</div>

		<div class="card-body">
			<slot name="default"></slot>
		</div>

		<div class="card-footer">
			<a href="#" class="btn btn-primary">구매하기</a>
		</div>
	</div>
</template>
