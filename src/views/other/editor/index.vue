<template>
  <div class="app-container">
    <div class="app-container-inner">
      <el-form ref="formRef" :model="dynamicValidateForm" label-width="80px" class="demo-dynamic">
        <el-form-item
            prop="title"
            label="标题"
            :rules="[{ required: true, message: '请输入标题', trigger: 'blur' }]"
        >
          <el-input v-model="dynamicValidateForm.title" />
        </el-form-item>
        <el-form-item
            prop="content"
            label="标题"
            :rules="[{ required: true, message: '请输入内容', trigger: 'blur' }]"
        >
          <wang-edior v-model="dynamicValidateForm.content" />
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="submitForm(formRef)">保存</el-button>
          <el-button type="primary" @click="preview(formRef)">预览</el-button>
          <el-button @click="resetForm(formRef)">重置</el-button>
        </el-form-item>
      </el-form>
      <el-descriptions title="配置项 " :column="1" border class="descriptions">
        <el-descriptions-item label="value"> 双向绑定的 value 值，使用示例：v-model='content' </el-descriptions-item>
        <el-descriptions-item label="参考文档"> 	<a href="https://www.wangeditor.com/v5/for-frame.html" target="_blank"> https://www.wangeditor.com/v5/for-frame.html </a> </el-descriptions-item>

      </el-descriptions>
      <el-dialog
          v-model="dialogVisible"
          title="预览"
          width="60%"
      >
        <div style="display: flex;align-items: center;margin-bottom: 20px">
          <span style="width: 50px;font-weight: bold">标题：</span>
          <div>{{dynamicValidateForm.title}}</div>
        </div>
        <div style="display: flex;align-items: center;margin-bottom: 20px">
          <span style="width: 50px;font-weight: bold">内容</span>
          <div v-html="dynamicValidateForm.content"></div>
        </div>
        <template #footer>
        </template>
      </el-dialog>
    </div>
  </div>
</template>

<script lang="ts" setup>
import WangEdior from '@/components/WangEdior/index.vue'
import { reactive, ref } from 'vue'
import type { FormInstance } from 'element-plus'
import { ElMessage } from 'element-plus'

const formRef = ref<FormInstance>()
const dialogVisible = ref<boolean>(false)
const dynamicValidateForm = reactive<{
  title: string
  content: string
}>({
  title: '',
  content: '',
})

const submitForm = (formEl: FormInstance | undefined) => {
  if (!formEl) return
  formEl.validate((valid) => {
    console.log('valid', valid)
    if (valid) {
      ElMessage.success('保存成功')
    } else {
      console.log('error submit!')
      return false
    }
  })
}

const preview = (formEl) => {
  if (!formEl) return
  formEl.validate((valid) => {
    console.log('valid', valid)
    if (valid) {
      dialogVisible.value = true
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
</script>


