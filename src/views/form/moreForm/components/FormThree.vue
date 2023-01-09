<template>
  <el-card header="表单组件3">
    <el-form :model="form" :rules="rules" ref="formRuleThreeRef" label-width="100px" >
      <el-row :gutter="35">
        <el-col :xs="24" :sm="12" :md="8" :lg="6" :xl="4" >
          <el-form-item label="创建用户" prop="createUser">
            <el-input v-model="form.createUser" placeholder="请输入创建用户" clearable></el-input>
          </el-form-item>
        </el-col>
        <el-col :xs="24" :sm="12" :md="8" :lg="6" :xl="4" >
          <el-form-item label="修改用户" prop="editUser">
            <el-input v-model="form.editUser" placeholder="请输入修改用户" clearable></el-input>
          </el-form-item>
        </el-col>
        <el-col :xs="24" :sm="12" :md="8" :lg="6" :xl="4" >
          <el-form-item label="所属用户" prop="user">
            <el-input v-model="form.user" placeholder="请输入所属用户" clearable></el-input>
          </el-form-item>
        </el-col>
        <el-col :xs="24" :sm="12" :md="8" :lg="6" :xl="4" >
          <el-form-item label="所属部门" prop="department">
            <el-input v-model="form.department" placeholder="请输入所属部门" clearable></el-input>
          </el-form-item>
        </el-col>
      </el-row>
    </el-form>
  </el-card>
</template>

<script lang="ts" setup>
import {reactive, ref} from 'vue';

const formRuleThreeRef = ref()
const form = reactive( { createUser: '', editUser: '', user: '', department: '' })
const rules = reactive( {
  createUser: { required: true, message: '请输入创建用户', trigger: 'blur' },
  editUser: { required: true, message: '请输入修改用户', trigger: 'blur' },
  user: { required: true, message: '请输入所属用户', trigger: 'blur' },
  department: { required: true, message: '请输入所属部门', trigger: 'blur' },
})

</script>
