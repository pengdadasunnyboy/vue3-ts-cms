<template>
  <div class="login-account">
    <el-form label-width="60px">
      <el-form-item label="账号">
        <el-input v-model="account.name" />
      </el-form-item>
      <el-form-item label="密码">
        <el-input v-model="account.password" />
      </el-form-item>
    </el-form>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive } from 'vue'

export default defineComponent({
  name: 'login-account',
  components: {},
  setup() {
    const account = reactive({
      name: '',
      password: ''
    })
    return {
      account
    }
  }
})
</script>

<style lang="less" scoped>
.login-account {
  width: 100%;
}
</style>
