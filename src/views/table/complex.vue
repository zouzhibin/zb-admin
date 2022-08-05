<template>
  <div class="app-container">
    <comprehensive :columns="column" :data="data" @reset="reset" @onSubmit="onSubmit">
      <template v-slot:btn>
        <div style="display: flex; justify-content: flex-end">
          <el-button type="primary"
            ><el-icon><plus /></el-icon> 添加</el-button
          >
          <el-button type="danger"
            ><el-icon><delete /></el-icon>删除</el-button
          >
        </div>
      </template>
      <template v-slot:sex="scope">{{ scope.row.sex ? '男' : '女' }}</template>
      <template v-slot:operation="scope">
        <el-button type="primary" size="small" icon="Edit"> 编辑 </el-button>
        <el-button type="danger" size="small" icon="Delete"> 删除 </el-button>
      </template>
    </comprehensive>
  </div>
</template>
<script lang="ts" setup>
  import { ref } from 'vue'
  import { ElMessage } from 'element-plus'
  import Comprehensive from './components/comprehensive.vue'
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
    { type: 'selection', width: 60 },
    { name: 'id', label: 'id', width: 80 },
    { name: 'name', label: '姓名', inSearch: true, valueType: 'input', width: 80 },
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
    { name: 'operation', slot: true, fixed: 'right', width: 200 },
  ]

  const reset = () => {
    ElMessage.success('触发重置方法')
  }
  const onSubmit = (val) => {
    console.log('val===', val)
    ElMessage.success('触发查询方法')
  }
</script>
<style scoped>
  .edit-input {
    padding-right: 100px;
  }
  .cancel-btn {
    position: absolute;
    right: 15px;
    top: 10px;
  }
</style>
