<template>
  <div class="login-container">
    <div class="login-box">
      <!--登录功能-->
      <div class="login-box-content-right">
          <!--login-Form-->
          <el-form
              ref="ruleFormRef"
              :model="ruleForm"
              status-icon
              :rules="rules"
              label-width="0"
              class="demo-ruleForm"
          >
            <el-form-item label="" prop="username">
              <el-input v-model="ruleForm.username" type="text" />
            </el-form-item>
            <el-form-item label="" prop="password">
              <el-input
                  v-model="ruleForm.password"
                  type="password"
              />
            </el-form-item>
            <el-form-item style="width: 100%">
              <el-button type="primary" @click="submitForm(ruleFormRef)"
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
    username: '',
    password: '',
  })

  const rules = reactive({
    password: [{ validator: validatePass, trigger: 'blur' }],
    username: [{ validator: validateUsername, trigger: 'blur' }],
  })

  const submitForm = (formEl: FormInstance | undefined) => {
    if (!formEl) return
    formEl.validate(async (valid) => {
      if (valid) {
        // 登录
        await store.dispatch('user/login',ruleForm)
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
  .login-container{
    min-height: 100%;
    width: 100%;
    overflow: hidden;
    background: #2d3a4b;
    background-size:cover;
    display: flex;
    justify-content: center;
    align-items: center;
    .login-box-content-right{
      position: relative;
      display: inline-block;
      margin-left: 10px;
      width: 400px;
      height: 370px;
      overflow: hidden;
      .login-form {
        margin-top: 20px;
      }
    }
  }
</style>
