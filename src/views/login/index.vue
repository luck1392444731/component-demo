<template>
	<div class="login-container">
		<el-form
			class="login-form"
			ref="loginFromRef"
		>
			<div class="title-container">
				<h3 class="title">111</h3>
			</div>

			<el-form-item prop="username">
				<span>11</span>
				<el-input
					placeholder="username"
					name="username"
					type="text"
				/>
			</el-form-item>

			<el-form-item prop="password">
				<span class="svg-container">
					<el-icon>
						<avatar/>
					</el-icon>
				</span>
				<el-input
					placeholder="password"
					name="password"
				/>
				<span class="show-pwd">
					<el-icon>
						<avatar/>
					</el-icon>
				</span>
			</el-form-item>

			<el-button
				type="primary"
				style="width: 100%; margin-bottom: 30px"
			>登录</el-button>
		</el-form>
	</div>
</template>

<script seutp>
// import { Avatar } from '@/element-plus/icons'

</script>

<style lang="scss" scoped>
</style>
