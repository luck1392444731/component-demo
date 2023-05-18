<template>
  <div class="login-container">
    <el-form
      class="login-form"
      ref="loginFromRef"
    >
      <div class="title-container">
        <h3 class="title"></h3>
      </div>

      <el-form-item prop="username">
        </span>
        <el-input
          placeholder="username"
          name="username"
          type="text"
          v-model="loginForm.username"
        />
      </el-form-item>

      <el-form-item prop="password">
        <span class="svg-container">
        </span>
        <el-input
          placeholder="password"
          name="password"
        />
        <span class="show-pwd">
        </span>
      </el-form-item>

      <el-button
        type="primary"
        style="width: 100%; margin-bottom: 30px"
        :loading="loading"
        >登录</el-button
      >

    </el-form>
  </div>
</template>

<script seutp>
import { defineComponent } from "vue";
import { ref, computed } from 'vue'
export default defineComponent({
  setup() {},
});
const loginFromRef = ref(null)

</script>

<style lang="" scoped></style>
