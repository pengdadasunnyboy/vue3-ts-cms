<template>
  <div class="login-panel">
    <h1>后台管理系统</h1>
    <el-tabs type="border-card" stretch>
      <el-tab-pane>
        <template #label>
          <span><i class="el-icon-user-solid"></i>账号登陆</span>
        </template>
        <login-account />
      </el-tab-pane>
      <el-tab-pane>
        <template #label>
          <span><i class="el-icon-mobile-phone"></i>手机登录</span>
        </template>
        <login-phone />
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import LoginAccount from './login-account.vue'
import LoginPhone from './login-phone.vue'

export default defineComponent({
  name: 'login-panel',
  components: {
    LoginAccount,
    LoginPhone
  }
})
</script>

<style lang="less" scoped>
.login-panel {
  margin-bottom: 150px;
  width: 320px;
  h1 {
    text-align: center;
  }
  .title {
    text-align: center;
  }
}
</style>
