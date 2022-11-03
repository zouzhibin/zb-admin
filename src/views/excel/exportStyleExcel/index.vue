<template>
  <div class="app-container">
    <div class="header">
      <el-input
        v-model="input"
        placeholder="默认文件名导出 excel"
        style="width: 200px; margin-right: 10px"
      />
      <el-button @click="exportExcelAction" type="primary">
        <el-icon style="margin-right: 6px"><Download /></el-icon>导出样式 Excel
      </el-button>
    </div>
    <div class="footer">
      <div class="footer-inner">
        <el-table :data="list" class="table" border>
          <template v-for="(item, index) in column" :key="index">
            <el-table-column :prop="item.name" :label="item.label" :width="item.width" />
          </template>
        </el-table>
      </div>
    </div>
  </div>
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
    { name: 'name', label: '姓名' },
    { name: 'age', label: '年龄', align: 'right' },
    {name: 'price', label: '价格', },
    { name: 'admin', label: '账号' },
    { name: 'address', label: '地址',width:180 },
    { name: 'date', label: '日期' ,width:140},
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
  padding: 16px 16px 16px 16px;
  margin-bottom: 16px;
  border-radius: 4px;
  background: white;
  box-shadow: 0 0 12px rgb(0 0 0 / 5%);
}
.footer{
  flex: 1;
  display: flex;
  padding: 16px;
  flex-direction: column;
  border-radius: 4px;
  overflow: hidden;
  background: white;
  box-shadow: 0 0 12px rgb(0 0 0 / 5%);
  position: relative;
  box-sizing: border-box;
  .footer-inner{
    position: relative;
    width: 100%;
    height: 100%;
  }
  .table{
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%
  }
}
</style>
