<template>
	<div class="f-flex justify-content-center">
		<main class="form-signin w-50 m-auto">
			<form class="mt-4">
				<img
					class="mb-4"
					src="@/assets/innisfree-logo.png"
					alt=""
					width="200"
					height="auto"
				/>

				<div class="form-floating">
					<input
						type="email"
						class="form-control"
						id="floatingInput"
						placeholder="name@example.com"
					/>
					<label for="floatingInput">Email address</label>
				</div>
				<div class="form-floating">
					<input
						type="password"
						class="form-control"
						id="floatingPassword"
						placeholder="Password"
					/>
					<label for="floatingPassword">Password</label>
				</div>

				<div class="form-check text-start my-3">
					<input
						class="form-check-input"
						type="checkbox"
						value="remember-me"
						id="flexCheckDefault"
					/>
					<label class="form-check-label" for="flexCheckDefault">
						Remember me
					</label>
				</div>
				<button class="btn btn-success w-100 py-2" type="submit">
					Sign in
				</button>
				<p class="mt-5 mb-3 text-body-success">&copy; 2017–2023</p>
			</form>
		</main>
	</div>
</template>

<script setup></script>

<style lang="scss" scoped></style>
