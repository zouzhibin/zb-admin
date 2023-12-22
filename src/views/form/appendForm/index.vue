<template>
  <div class="app-container">
    <div class="app-container-inner">
      <el-form ref="formRef" :model="dynamicValidateForm" label-width="120px" class="demo-dynamic">
        <el-row v-for="(domain, index) in dynamicValidateForm.domains" :key="domain.key" :gutter="20">
          <el-col :span="10">
            <el-form-item
              :label="'Domain' + index"
              :prop="'domains.' + index + '.name'"
              :rules="{
                required: true,
                message: 'domain can not be null',
                trigger: 'blur',
              }"
            >
              <el-input v-model="domain.name" />
            </el-form-item>
          </el-col>
          <el-col :span="10">
            <el-form-item
              :label="'Domain' + index"
              :prop="'domains.' + index + '.value'"
              :rules="{
                required: true,
                message: 'domain can not be null',
                trigger: 'blur',
              }"
            >
              <el-input v-model="domain.value" />
            </el-form-item>
          </el-col>
          <el-col :span="4">
            <el-button v-if="index === 0" @click.prevent="addDomain()">
              <el-icon><Plus /></el-icon>
            </el-button>
            <el-button v-else @click.prevent="removeDomain(domain)">
              <el-icon><Minus /></el-icon>
            </el-button>
          </el-col>
        </el-row>

        <el-form-item>
          <el-button type="primary" @click="submitForm(formRef)">Submit</el-button>
          <el-button @click="resetForm(formRef)">Reset</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script lang="ts" setup name="appendForm">
  import { reactive, ref } from 'vue'
  import type { FormInstance } from 'element-plus'
  import { ElMessage } from 'element-plus'

  const formRef = ref<FormInstance>()
  const dynamicValidateForm = reactive<{
    domains: DomainItem[]
  }>({
    domains: [
      {
        key: 1,
        value: '',
        name: '',
      },
    ],
  })

  interface DomainItem {
    key: number
    value: string
    name: string
  }

  const removeDomain = (item: DomainItem) => {
    const index = dynamicValidateForm.domains.indexOf(item)
    if (index !== -1) {
      dynamicValidateForm.domains.splice(index, 1)
    }
  }

  const addDomain = () => {
    dynamicValidateForm.domains.push({
      key: Date.now(),
      value: '',
      name: '',
    })
  }

  const submitForm = (formEl: FormInstance | undefined) => {
    if (!formEl) return
    formEl.validate((valid) => {
      if (valid) {
        ElMessage.success(`提交数据: ${JSON.stringify(dynamicValidateForm.domains)}`)
        console.log('submit!', dynamicValidateForm.domains)
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

<style lang="scss" scoped>
  @import './index.scss';
</style>
