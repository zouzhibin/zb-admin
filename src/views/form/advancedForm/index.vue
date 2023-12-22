<template>
  <div class="advancedForm">
    <el-card class="box-card">
      <template #header>
        <div class="card-header">
          <span style="margin-right: 100px">收缩表单 通过v-show来控制显隐藏 设置 showRow 为number</span>
          <el-button type="primary" link @click="showRow(2)">显示两行</el-button>
          <el-button type="primary" link @click="showRow(1)">显示一行</el-button>
        </div>
      </template>
      <AdvancedForm :columns="baseColumns" :show-row="row" @submit="onSubmit" />
    </el-card>

    <el-card class="box-card" style="margin-top: 20px">
      <template #header>
        <div class="card-header">
          <span>收缩表单 通过高度来控制显隐藏 byHeight</span>
        </div>
      </template>
      <AdvancedForm :columns="baseColumns" :by-height="true" @submit="onSubmit" />
    </el-card>
  </div>
</template>

<script lang="ts" setup>
  import AdvancedForm from '@/components/SearchForm/index.vue'
  import { reactive, ref } from 'vue'
  import { ElMessage } from 'element-plus'
  let columns = [
    {
      valueType: 'input',
      name: 'name1',
      label: '字段1',
      span: 8,
      attrs: {
        placeholder: '字段1',
      },
    },
    {
      valueType: 'date-picker',
      name: 'name2',
      label: '字段2',
      span: 8,
      attrs: {
        placeholder: '字段2',
      },
    },
    {
      valueType: 'input',
      name: 'name3',
      label: '字段3',
      span: 8,
      attrs: {
        placeholder: '字段3',
      },
    },
    {
      valueType: 'input',
      name: 'name4',
      label: '字段4',
      span: 8,
      attrs: {
        placeholder: '字段4',
      },
    },
    {
      valueType: 'input',
      name: 'name5',
      label: '字段5',
      span: 8,
      attrs: {
        placeholder: '字段5',
      },
    },
    {
      valueType: 'input',
      name: 'name6',
      label: '字段6',
      span: 8,
      attrs: {
        placeholder: '字段6',
      },
    },
    {
      valueType: 'input',
      name: 'name7',
      label: '字段7',
      span: 8,
      attrs: {
        placeholder: '字段7',
      },
    },
    {
      valueType: 'input',
      name: 'name8',
      label: '字段8',
      span: 8,
      attrs: {
        placeholder: '字段8',
      },
    },
    {
      valueType: 'input',
      name: 'name9',
      label: '字段9',
      span: 8,
      attrs: {
        placeholder: '字段9',
      },
    },
  ]

  const baseColumns = reactive(columns)

  const formValue = ref({})
  const row = ref(1)
  const onSubmit = (formInline) => {
    formValue.value = formInline
    ElMessage.success(JSON.stringify(formInline))
  }
  const showRow = (number) => {
    row.value = number
  }
</script>

<style lang="scss" scoped>
  @import './index.scss';
</style>
