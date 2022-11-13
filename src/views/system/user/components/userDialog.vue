<template>
  <el-dialog @close="close" v-model="dialogVisible" :title="title" width="50%">
    <el-form
        ref="ruleFormRef"
        :model="ruleForm"
        :rules="rules"
        label-width="100px"
    >
      <el-form-item label="用户名" prop="username">
        <el-input v-model="ruleForm.username" placeholder="请输入用户名"/>
      </el-form-item>
      <el-form-item label="昵称" prop="nickname">
        <el-input v-model="ruleForm.nickname" placeholder="请输入昵称"/>
      </el-form-item>
      <el-form-item label="性别" prop="sex">
        <el-radio-group v-model="ruleForm.sex">
          <el-radio label="男">男</el-radio>
          <el-radio label="女">女</el-radio>
        </el-radio-group>
      </el-form-item>
      <el-form-item label="关联角色" prop="role">
        <el-select v-model="ruleForm.role" placeholder="请选择" style="width: 100%">
          <el-option label="超级管理员" value="超级管理员" :key="0"></el-option>
          <el-option label="管理员" value="管理员" :key="1"></el-option>
          <el-option label="普通用户" value="普通用户" :key="2"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="手机号" prop="photo">
        <el-input v-model="ruleForm.photo" placeholder="请输入手机号"/>
      </el-form-item>
      <el-form-item label="账户密码" >
        <el-input v-model="ruleForm.password"
                  placeholder="请输入账户密码,如果不输入默认123456"
                  type="password" clearable/>
      </el-form-item>
      <el-form-item label="用户状态" >
        <el-switch v-model="ruleForm.status" inline-prompt active-text="启用" inactive-text="禁用"></el-switch>
      </el-form-item>
      <el-form-item label="用户描述" prop="describe" >
        <el-input v-model="ruleForm.describe"
                  type="textarea"
                  placeholder="请输入用户描述"/>
      </el-form-item>
    </el-form>
    <template #footer>
        <span class="dialog-footer">
          <el-button @click="dialogVisible = false">取消</el-button>
          <el-button type="primary" @click="handleClose(ruleFormRef)">确定</el-button>
        </span>
    </template>
  </el-dialog>
</template>
<script lang="ts" setup>
import { ElMessageBox, ElMessage, FormInstance } from 'element-plus'
import {reactive, ref} from "vue";

const ruleFormRef = ref<FormInstance>()
const dialogVisible = ref<boolean>(false)
const title = ref('新增用户')

const rules = reactive({
  nickname: [
    { required: true, message: '请输入昵称', trigger: 'blur' },
    { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' },
  ],
  username: [{ required: true, message: '请输入', trigger: 'blur' }],
  role: [{required: true, message: '请选择角色', trigger: 'change',},],
  sex: [{required: true, message: '请选择性别', trigger: 'change',},],
})

const ruleForm = reactive({
  username: '',
  nickname: null,
  sex: '男',
  role: null,
  photo:null,
  password:null,
  describe:null,
  status:true
})

function close() {
  ruleFormRef.value.resetFields()
  Object.keys(ruleForm).forEach(key=>{
    if(key==='sex') ruleForm[key] = '男'
    else if(key==='status') ruleForm[key] = true
    else ruleForm[key] = null

  })
}

const show = (item={})=>{
  title.value = '新增用户'
  if(item.username){
    title.value = '编辑用户'
    Object.keys(item).forEach(key=>{
      ruleForm[key] = item[key]
    })
  }
  dialogVisible.value = true
}

const handleClose = async (done: () => void) => {
  await ruleFormRef.value.validate((valid, fields) => {
    if (valid) {
      dialogVisible.value = false
      console.log('submit!', ruleForm)
    } else {
      console.log('error submit!', fields)
    }
  })
}

defineExpose({
  show,
})

</script>
<style lang="scss" scoped>

</style>

