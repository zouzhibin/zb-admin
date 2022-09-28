<template>
  <u-container-layout>
    <div class=".header">
      <el-input
        v-model="input"
        placeholder="请输入文件名"
        style="width: 200px; margin-right: 10px"
      />
      <el-button @click="exportExcelAction" type="primary">
        <el-icon style="margin-right: 10px"><document-remove /></el-icon>导出样式 Excel
      </el-button>
    </div>
    <div class="footer">
      <el-table :data="list" class="table" border>
        <template v-for="(item, index) in column" :key="index">
          <el-table-column :prop="item.name" :label="item.label" :width="item.width" />
        </template>
      </el-table>
    </div>
  </u-container-layout>
</template>

<script lang="ts" setup>
  import { ref, reactive } from 'vue'
  import * as dayjs from 'dayjs'
  import { ElMessage, ElMessageBox } from 'element-plus'
  import { exportStyleExcel } from '@/utils/exprotExcel'
  const data = []
  for (let i = 0; i < 10; i++) {
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
    exportStyleExcel({
      column,
      data,
      filename: input.value || '导出 excel',
      format: format.value,
      autoWidth: true,
    })
  }
</script>

<style lang="scss" scoped>
.header{
  display: flex;
  align-items: center;
  margin-bottom: 15px;
  flex-shrink: 0;
}
.footer{
  flex: 1;
  position: relative;
  .table{
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%
  }
}
</style>
