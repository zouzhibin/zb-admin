<template>
  <u-container-layout>
    <div style="margin-bottom: 15px; display: flex; align-items: center">
      <el-input
        v-model="input"
        placeholder="请输入文件名"
        style="width: 200px; margin-right: 10px"
      />
      <div>
        <label style="margin-right: 10px">导出格式</label>
        <el-select
          v-model="format"
          class="m-2"
          placeholder="导出格式"
          style="width: 200px; margin-right: 10px"
        >
          <el-option label="xlsx" value="xlsx" />
          <el-option label="csv" value="csv" />
        </el-select>
      </div>
      <el-button @click="exportExcelAction" type="primary">
        <el-icon style="margin-right: 10px"><document-remove /></el-icon>导出 Excel
      </el-button>
    </div>
    <el-table :data="list" style="width: 100%" border>
      <template v-for="(item, index) in column" :key="index">
        <el-table-column :prop="item.name" :label="item.label" :width="item.width" />
      </template>
    </el-table>
  </u-container-layout>
</template>

<script lang="ts" setup>
  import { ref, reactive } from 'vue'
  import * as dayjs from 'dayjs'
  import { ElMessage, ElMessageBox } from 'element-plus'
  import { exportExcel } from '@/utils/exprotExcel'
  const data = []
  for (let i = 0; i < 100; i++) {
    data.push({
      date: '2016-05-02',
      name: '王五' + i,
      price: 1 + i,
      province: '上海',
      admin: 'admin',
      sex: i % 2 ? 1 : 0,
      checked: true,
      id: i + 1,
      age: 0,
      city: '普陀区',
      address: '上海市普上海',
      zip: 200333,
    })
  }
  const column = [
    { name: 'id', label: 'id' },
    { name: 'name', label: '姓名', inSearch: true, valueType: 'input' },
    { name: 'age', label: '年龄', align: 'right' },
    {
      name: 'sex',
      label: '性别',
      slot: true,
      inSearch: true,
      options: [
        {
          value: 1,
          label: '男',
        },
        {
          value: 0,
          label: '女',
        },
      ],
      valueType: 'select',
    },
    {
      name: 'price',
      label: '价格',
      inSearch: true,
      valueType: 'input',
    },
    { name: 'admin', label: '账号', inSearch: true, valueType: 'input' },
    { name: 'address', label: '地址', inSearch: true, valueType: 'input' },
    { name: 'date', label: '日期', sorter: true, inSearch: true, valueType: 'input' },
    { name: 'province', label: '省份' },
    { name: 'city', label: '城市' },
    { name: 'zip', label: '邮编' },
  ]
  const list = ref(data)
  const input = ref('')
  const format = ref('xlsx')
  const exportExcelAction = () => {
    exportExcel({
      column,
      data,
      filename: input.value || '导出 excel',
      format: format.value,
      autoWidth: true,
    })
  }
</script>

<style></style>
