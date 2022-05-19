<template>
  <div class="login-container">
    <div class="login-box">
      <!--登录功能-->
      <div style="color: white;text-align: center;margin-bottom: 15px">登录系统-密码账号随便填 admin admin</div>
      <div class="login-box-content-right">
          <!--login-Form-->
          <el-form
              ref="ruleFormRef"
              :model="ruleForm"

              :rules="rules"
              label-width="0"
              class="demo-ruleForm"
          >
            <el-form-item label="" prop="username">
              <el-input
                  autoComplete="on"
                  style="position: relative"
                  v-model="ruleForm.username" type="text" @keyup.enter.native="submitForm(ruleFormRef)">
                <template #prefix>
                 <el-icon class="el-input__icon"><UserFilled /></el-icon>
                </template>
              </el-input>
            </el-form-item>
            <el-form-item label="" prop="password">
              <el-input
                  autoComplete="on"
                  @keyup.enter.native="submitForm(ruleFormRef)"
                  v-model="ruleForm.password"
                  :type="passwordType"
              >
                <template #prefix>
                  <el-icon class="el-input__icon"><GoodsFilled/></el-icon>
                </template>
                <template #suffix>
                  <div class="show-pwd" @click="showPwd"><svg-icon :icon-class="passwordType==='password'?'eye':'eye-open'" /></div>

                </template>
              </el-input>
            </el-form-item>
            <el-form-item style="width: 100%">
              <el-button type="primary"
                         @click="submitForm(ruleFormRef)"
                         style="width: 100%;height: 47px"
              >登录</el-button
              >
            </el-form-item>
          </el-form>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
  import { ref, reactive } from 'vue'
  import type { FormInstance } from 'element-plus'
  import {useRouter} from 'vue-router'
  import {useStore} from "vuex";
  import {ElMessage} from "element-plus";
  const ruleFormRef = ref<FormInstance>()
  const router = useRouter()
  const store = useStore()

  const validateUsername = (rule: any, value: any, callback: any) => {
    if (!value) {
      return callback(new Error('请输入用户名'))
    }
    callback()
  }
  const validatePass = (rule: any, value: any, callback: any) => {
    if (value === '') {
      callback(new Error('请输入密码'))
    } else {
      callback()
    }
  }
  const ruleForm = reactive({
    username: 'admin',
    password: 'admin',
  })

  const rules = reactive({
    password: [{ validator: validatePass, trigger: 'blur' }],
    username: [{ validator: validateUsername, trigger: 'blur' }],
  })
  const passwordType = ref('password')
  const showPwd = ()=> {
    if (passwordType.value === 'password') {
      passwordType.value = ''
    } else {
      passwordType.value = 'password'
    }
  }
  const submitForm = (formEl: FormInstance | undefined) => {
    if (!formEl) return
    formEl.validate(async (valid) => {
      console.log('valid==',valid)
      if (valid) {
        // 登录
        await store.dispatch('user/login',ruleForm)
        ElMessage.success('登录成功')
        router.push({
          path:'/'
        })
      } else {
        console.log('error submit!')
        return false
      }
    })
  }
</script>

<style lang="scss" scoped>
$dark_gray:#889aa4;
  ::v-deep{
    input {
      background: transparent;
      border: 0;
      -webkit-appearance: none;
      border-radius: 0;
      padding: 12px 5px 12px 15px;
      color: #fff;
      height: 47px;
      caret-color: #fff;
    }
  }
  .login-box{
    width: 80%;
    max-width: 500px;
  }
  .show-pwd {
    position: absolute;
    right: 10px;
    top: 7px;
    font-size: 16px;
    color: $dark_gray;
    cursor: pointer;
    user-select: none;
  }
  .login-container{
    background-color: #2d3a4b;
    video{
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      width: 100%;
      height: 100%;
      -o-object-fit: cover;
      object-fit: cover;
      z-index: -1;
    }
    .bg{
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      width: 100%;
      height: 100%;
      -o-object-fit: cover;
      object-fit: cover;
      z-index: -1;
    }
    min-height: 100%;
    width: 100%;
    overflow: hidden;
    background-size:cover;
    display: flex;
    justify-content: center;
    align-items: center;
    .login-box-content-right{
      position: relative;
      display: inline-block;
      margin-left: 10px;
      width: 100%;
      height: 370px;
      overflow: hidden;
      .login-form {
        margin-top: 20px;
      }
    }
  }
</style>
