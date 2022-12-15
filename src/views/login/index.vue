<template>
  <div class="login-container">
    <div class="login-box">
      <SwitchDark class="login-dark"/>
      <div class="login-left">
        <img src="@/assets/image/login/side-logo.png" >
      </div>
      <div class="login-form">
        <div class="info-qrcode" >{{ accountLogin?'扫码登录':'账号登录' }}</div>
        <img src="@/assets/image/login/qrcode-icon.png" class="qrcode" @click="handleClick">

        <LoginForm v-if="accountLogin"/>
        <LoginQrcode v-else/>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
  import {ref} from 'vue'
  import LoginForm from './components/LoginForm.vue'
  import SwitchDark from '@/components/SwitchDark/index.vue'
  import LoginQrcode from './components/LoginQrcode.vue'

  const accountLogin = ref<boolean>(true)

  const handleClick = ()=>{
    console.log('=======',accountLogin)
    accountLogin.value=!accountLogin.value
  }
</script>
<style lang="scss" scoped>
  @import "./index";
</style>
