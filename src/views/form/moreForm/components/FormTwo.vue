<template>
  <el-card header="表单组件2">
    <el-form :model="form" :rules="rules" ref="formRuleTwoRef" label-width="100px" >
      <el-row :gutter="35">
        <el-col :xs="24" :sm="12" :md="8" :lg="6" :xl="4" >
          <el-form-item label="手机" prop="phone">
            <el-input v-model="form.phone" placeholder="请输入手机" clearable></el-input>
          </el-form-item>
        </el-col>
        <el-col :xs="24" :sm="12" :md="8" :lg="6" :xl="4" >
          <el-form-item label="性别">
            <el-select v-model="form.sex" placeholder="请选择性别" clearable class="w100">
              <el-option label="男" value="1"></el-option>
              <el-option label="女" value="2"></el-option>
            </el-select>
          </el-form-item>
        </el-col>
        <el-col :xs="24" :sm="12" :md="8" :lg="6" :xl="4" >
          <el-form-item label="登录密码" prop="password">
            <el-input v-model="form.password" placeholder="请输入登录密码" clearable></el-input>
          </el-form-item>
        </el-col>
        <el-col :xs="24" :sm="12" :md="8" :lg="6" :xl="4" >
          <el-form-item label="权限角色" prop="auth">
            <el-input v-model="form.auth" placeholder="请输入权限角色" clearable></el-input>
          </el-form-item>
        </el-col>
      </el-row>
    </el-form>
  </el-card>
</template>

<script lang="ts" setup>
import {reactive, ref} from 'vue';

const formRuleTwoRef = ref()
const form = reactive({ phone: '', sex: '', password: '', auth: '' })
const rules = reactive( {
  phone: { required: true, message: '请输入手机', trigger: 'blur' },
  password: { required: true, message: '请输入登录密码', trigger: 'blur' },
  auth: { required: true, message: '请输入权限角色', trigger: 'blur' },
})

</script>
