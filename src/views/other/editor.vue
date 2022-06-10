<template>
  <u-container-layout>
    <el-form
        ref="formRef"
        :model="dynamicValidateForm"
        label-width="80px"
        class="demo-dynamic"
    >
      <el-form-item
          prop="title"
          label="标题"
          :rules="[
        {  required: true,  message: '请输入标题', trigger: 'blur',  },

      ]"
      >
        <el-input v-model="dynamicValidateForm.title" />
      </el-form-item>
      <el-form-item
          prop="content"
          label="标题"
          :rules="[
        {  required: true,  message: '请输入内容', trigger: 'blur',  },

      ]"
      >
        <u-wang-edior v-model="dynamicValidateForm.content"/>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm(formRef)">保存</el-button>
        <!--      <el-button @click="preview">预览</el-button>-->
        <el-button @click="resetForm(formRef)">取消</el-button>
      </el-form-item>
    </el-form>
  </u-container-layout>

</template>

<script lang="ts" setup>
import UWangEdior from '@/components/u-wangEdior/index.vue'
import { reactive, ref } from 'vue'
import type { FormInstance } from 'element-plus'
import { ElMessage } from 'element-plus'

const formRef = ref<FormInstance>()
const dynamicValidateForm = reactive<{
  title: string,
  content:string
}>({
  title: '',
  content:''
})




const submitForm = (formEl: FormInstance | undefined) => {
  if (!formEl) return
  formEl.validate((valid) => {
    console.log('valid',valid)
    if (valid) {
      ElMessage.success('保存成功')
    } else {
      console.log('error submit!')
      return false
    }
  })
}

const preview = ()=>{

}

const resetForm = (formEl: FormInstance | undefined) => {
  if (!formEl) return
  formEl.resetFields()
}
</script>
