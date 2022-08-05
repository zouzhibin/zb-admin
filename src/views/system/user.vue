<template>
  <u-container-layout class="components-container">
    <el-form :inline="true" :model="formInline" class="demo-form-inline" ref="ruleFormRef1">
      <el-form-item label="用户名" prop="username">
        <el-input v-model="formInline.username" />
      </el-form-item>
      <el-form-item>
        <el-button @click="reset(ruleFormRef1)">重置</el-button>
        <el-button type="primary" @click="onSubmit">查询</el-button>
      </el-form-item>
    </el-form>
    <div style="margin-bottom: 15px; display: flex; justify-content: flex-end">
      <el-button type="primary" @click="add">新增</el-button>
    </div>
    <el-table :data="tableData" style="width: 100%" border>
      <el-table-column prop="username" label="用户名" />
      <el-table-column prop="nickname" label="昵称" />
      <el-table-column prop="sex" label="性别" />
      <el-table-column prop="role" label="角色" />
      <el-table-column prop="status" label="状态">
        <template #default="scope">
          <el-switch v-model="scope.row.status" @change="changeStatus(scope.row)" />
        </template>
      </el-table-column>
      <el-table-column prop="status" label="操作">
        <template #default="scope">
          <el-button type="primary" size="small" icon="Edit" @click="edit(scope.row)">
            编辑
          </el-button>
          <el-button @click="del(scope.row)" type="danger" size="small" icon="Delete">
            删除
          </el-button>
        </template>
      </el-table-column>
    </el-table>
    <el-dialog @close="close" v-model="dialogVisible" :title="title" width="50%">
      <el-form
        ref="ruleFormRef"
        :model="ruleForm"
        :rules="rules"
        label-width="120px"
        class="demo-ruleForm"
        :size="formSize"
      >
        <el-form-item label="用户名" prop="username">
          <el-input v-model="ruleForm.username" />
        </el-form-item>
        <el-form-item label="昵称" prop="nickname">
          <el-input v-model="ruleForm.nickname" />
        </el-form-item>
        <el-form-item label="性别" prop="sex">
          <el-radio-group v-model="ruleForm.sex">
            <el-radio label="男">男</el-radio>
            <el-radio label="女">女</el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item label="角色" prop="role">
          <el-select v-model="ruleForm.role" placeholder="请选择">
            <el-option label="超级管理员" value="超级管理员" :key="0"></el-option>
            <el-option label="管理员" value="管理员" :key="1"></el-option>
            <el-option label="普通用户" value="普通用户" :key="2"></el-option>
          </el-select>
        </el-form-item>
      </el-form>
      <template #footer>
        <span class="dialog-footer">
          <el-button @click="dialogVisible = false">取消</el-button>
          <el-button type="primary" @click="handleClose(ruleFormRef)">确定</el-button>
        </span>
      </template>
    </el-dialog>
  </u-container-layout>
</template>

<script lang="ts" setup>
  import { ElMessageBox, ElMessage, FormInstance } from 'element-plus'
  import { reactive, ref } from 'vue'
  import { userData } from './data/user'
  import * as dayjs from 'dayjs'
  const tableData = ref(userData)
  const dialogVisible = ref(false)
  const title = ref('新增')
  const formSize = ref('default')
  const ruleFormRef = ref<FormInstance>()
  const ruleFormRef1 = ref<FormInstance>()
  const formInline = reactive({})
  const rules = reactive({
    nickname: [
      { required: true, message: '请输入昵称', trigger: 'blur' },
      { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' },
    ],
    username: [{ required: true, message: '请输入', trigger: 'blur' }],
    role: [
      {
        required: true,
        message: '请选择角色',
        trigger: 'change',
      },
    ],
    sex: [
      {
        required: true,
        message: '请选择性别',
        trigger: 'change',
      },
    ],
  })
  const onSubmit = () => {
    console.log('submit!', formInline)
  }
  const reset = (formEl: FormInstance | undefined) => {}
  const add = () => {
    title.value = '新增'
    dialogVisible.value = true
  }
  const ruleForm = reactive({
    username: '',
    nickname: null,
    sex: null,
    role: null,
  })
  const edit = (row) => {
    title.value = '编辑'
    dialogVisible.value = true
    ruleForm.nickname = row.nickname
    ruleForm.username = row.username
    ruleForm.sex = row.sex
    ruleForm.role = row.role
  }
  function close() {
    ruleFormRef.value.resetFields()
  }
  const del = (row) => {
    ElMessageBox.confirm('你确定要删除当前项吗?', '温馨提示', {
      confirmButtonText: '确定',
      cancelButtonText: '取消',
      type: 'warning',
      draggable: true,
    })
      .then(() => {})
      .catch(() => {})
  }
  const changeStatus = (row) => {
    ElMessageBox.confirm(
      `确定要${!row.status ? '禁用' : '启用'} ${row.username} 账户吗？`,
      '提示',
      {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning',
      },
    )
      .then(async () => {})
      .catch(() => {
        row.status = !row.status
      })
  }

  const handleClose = async (done: () => void) => {
    await ruleFormRef.value.validate((valid, fields) => {
      if (valid) {
        dialogVisible.value = false
        console.log('submit!', obj)
      } else {
        console.log('error submit!', fields)
      }
    })
  }
</script>

<style scoped></style>
