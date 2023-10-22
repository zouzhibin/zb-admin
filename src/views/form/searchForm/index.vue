<template>
  <PageWrapLayout>
    <SearchForm :columns="searchColumns" @submit="onSubmit" @reset="resetForm" />

    <div v-if="Object.keys(formValue).length">{{ formValue }}</div>
  </PageWrapLayout>
</template>

<script lang="ts" setup>
  import SearchForm from '@/components/SearchForm/index.vue'
  import { ref } from 'vue'
  import { ElMessage } from 'element-plus'
  import { baseSearchColumns } from './constants'

  const formValue = ref({})
  const searchColumns = ref(baseSearchColumns)

  // 查询
  const onSubmit = (formInline) => {
    console.log('获取参数', formInline)
    formValue.value = formInline
    ElMessage.success(JSON.stringify(formInline))
  }

  // 重置
  const resetForm = (formInline) => {
    console.log('获取参数', formInline)
    formValue.value = formInline
    ElMessage.success('重置成功')
  }
</script>

<style lang="scss" scoped>
  @import './index.scss';
</style>
