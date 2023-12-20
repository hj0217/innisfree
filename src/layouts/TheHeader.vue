<template>
	<header>
		<div class="container">
			<nav class="navbar navbar-expand-sm">
				<div class="container-fluid">
					<RouterLink class="navbar-brand" to="/">Innisfree</RouterLink>

					<button
						class="navbar-toggler"
						type="button"
						data-bs-toggle="collapse"
						data-bs-target="#navbarSupportedContent"
						aria-controls="navbarSupportedContent"
						aria-expanded="false"
						aria-label="Toggle navigation"
					>
						<span class="navbar-toggler-icon"></span>
					</button>
					<PostFilter></PostFilter>

					<div class="d-flex flex-row-reverse">
						<ul class="navbar-nav me-auto">
							<li class="nav-item">
								<RouterLink
									class="nav-link"
									active-class="active"
									to="/user/login"
								>
									로그인
								</RouterLink>
							</li>
							<li class="nav-item">
								<RouterLink
									class="nav-link"
									active-class="active"
									to="/user/join"
								>
									회원가입
								</RouterLink>
							</li>
							<li class="nav-item">
								<RouterLink
									class="nav-link"
									active-class="active"
									to="/user/cart"
								>
									장바구니
								</RouterLink>
							</li>
						</ul>
					</div>
				</div>
			</nav>

			<div class="mt-3">
				<nav class="nav nav-pills nav-fill">
					<RouterLink class="nav-link" active-class="active" to="/menu/1">
						특가
					</RouterLink>
					<RouterLink class="nav-link" active-class="active" to="/menu/2">
						이벤트
					</RouterLink>
					<RouterLink class="nav-link" active-class="active" to="/menu/3">
						베스트
					</RouterLink>

					<RouterLink class="nav-link" active-class="active" to="/menu/live">
						라이브
					</RouterLink>
				</nav>
			</div>
		</div>
	</header>
</template>

<script setup>
import { useRouter } from 'vue-router';
import PostFilter from '@/components/posts/PostFilter.vue';

const router = useRouter();
const goPage = () => {
	router.push({
		name: 'PostCreate',
	});
};
</script>

<style scoped></style>
