<template>
  <el-dialog v-model="dialogVisible" title="修改密码" width="40%">
    <el-form ref="ruleFormRef" :model="ruleForm" :rules="rules" label-width="120px" class="demo-ruleForm" :size="formSize">
      <el-form-item label="用户名称">
        <el-input v-model="ruleForm.name" disabled></el-input>
      </el-form-item>
      <el-form-item label="旧密码" prop="oldPassword">
        <inputStrength v-model="ruleForm.oldPassword" placeholder="请输入旧密码"></inputStrength>
      </el-form-item>
      <el-form-item label="新密码" prop="newPassword">
        <inputStrength v-model="ruleForm.newPassword" strength placeholder="请输入新密码"></inputStrength>
      </el-form-item>
      <el-form-item label="确认密码" prop="confirmPassword">
        <inputStrength v-model="ruleForm.confirmPassword" strength placeholder="请确认新密码"></inputStrength>
      </el-form-item>
    </el-form>
    <template #footer>
      <span class="dialog-footer">
        <el-button @click="dialogVisible = false">取消</el-button>
        <el-button type="primary" @click="submitForm(ruleFormRef)">确定</el-button>
      </span>
    </template>
  </el-dialog>
</template>

<script lang="ts" setup>
  import { ref, computed, defineExpose, reactive } from 'vue'
  import type { ElForm } from 'element-plus'
  import inputStrength from '@/components/InputStrength/index.vue'

  const dialogVisible = ref(false)
  import { useUserStore } from '@/store/modules/user'
  const UserStore = useUserStore()
  const show = () => {
    dialogVisible.value = true
  }
  const hide = () => {
    dialogVisible.value = false
  }
  type FormInstance = InstanceType<typeof ElForm>

  const userInfo = computed(() => UserStore.userInfo)

  const formSize = ref('')
  const ruleFormRef = ref<FormInstance>()
  const ruleForm = reactive({
    name: userInfo.value?.username,
    oldPassword: userInfo.value?.password,
    newPassword: '',
    confirmPassword: '',
  })

  //确认密码输入值的一致性校验
  const equalToPassword = (_rule, value, callback) => {
    ruleForm.newPassword !== value ? callback(new Error('两次输入密码不一致')) : callback()
  }
  const rules = reactive({
    newPassword: [
      {
        required: true,
        message: '请输入新密码',
        trigger: 'blur',
      },
    ],
    confirmPassword: [
      {
        required: true,
        message: '请输入确认密码',
        trigger: 'blur',
      },
      { required: true, validator: equalToPassword, trigger: 'blur' },
    ],
  })
  const submitForm = (formEl: FormInstance | undefined) => {
    if (!formEl) return
    formEl.validate((valid) => {
      if (valid) {
        console.log('submit!')
      } else {
        console.log('error submit!')
        return false
      }
    })
  }

  const resetForm = (formEl: FormInstance | undefined) => {
    if (!formEl) return
    formEl.resetFields()
  }

  defineExpose({
    show,
  })
</script>

<style scoped>
  .dialog-footer button:first-child {
    margin-right: 10px;
  }
</style>
