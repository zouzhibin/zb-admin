<template>
  <div class="app-container">
    <div class="header">
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
        <el-icon style="margin-right: 6px"><Download /></el-icon>导出 Excel
      </el-button>
    </div>
    <div class="footer">
      <div class="footer-inner">
        <el-table :data="list"  border class="table">
          <template v-for="(item, index) in column" :key="index">
            <el-table-column :prop="item.name" :label="item.label" :width="item.width" />
          </template>
        </el-table>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import {tableList} from "@/mock/table"
import { ref } from 'vue'
import { exportExcel } from '@/utils/exprotExcel'
const column = [
  { name: 'id', label: 'id' },
  { name: 'name', label: '姓名' },
  { name: 'age', label: '年龄', align: 'right' },
  {name: 'price', label: '价格', },
  { name: 'admin', label: '账号' },
  { name: 'address', label: '地址',width:250 },
  { name: 'date', label: '日期' ,width:140},
  { name: 'province', label: '省份' },
  { name: 'city', label: '城市' },
  { name: 'zip', label: '邮编' },
]
const list = ref(tableList)
const input = ref('')
const format = ref('xlsx')
const exportExcelAction = () => {
  exportExcel({
    column,
    data:list.value,
    filename: input.value || '导出 excel',
    format: format.value,
    autoWidth: true,
  })
}
</script>

<style lang="scss" scoped>
@import "./index";
</style>
