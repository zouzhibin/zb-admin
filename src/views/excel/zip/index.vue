<template>
  <div class="app-container">
    <div class="header">
      <el-input
        v-model="zipName"
        placeholder="请输入文件名"
        style="width: 200px; margin-right: 10px"
      />
      <el-button @click="exportExcelAction" type="primary">
        <el-icon style="margin-right: 6px"><Download/></el-icon>导出 zip
      </el-button>
    </div>
    <div class="footer">
      <el-table :data="list" style="width: 100%" border>
        <template v-for="(item, index) in column" :key="index">
          <el-table-column
              :prop="item.name"
              :label="item.label"
              :width="item.width" />
        </template>
      </el-table>
    </div>

  </div>
</template>

<script lang="ts" setup>
  import { ref, reactive } from 'vue'
  import * as dayjs from 'dayjs'
  import { downloadFiles2Zip } from '@/utils/downloadzip'
  const data = []
  for (let i = 0; i < 10; i++) {
    data.push({
      date: '2016-05-02',
      name: '王五' + i,
      price: 1 + i,
      province: '上海',
      admin: 'admin',
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
  const zipName = ref('下载zip')
  const format = ref('xlsx')
  const exportExcelAction = () => {
    downloadFiles2Zip({
      zipName: zipName.value,
      files: [
        {
          filename: 'test',
          sheets: [
            {
              sheetName: 'test',
              columns: column,
              dataSource: data,
            },
          ],
        },
      ],
    })
  }
</script>

<style lang="scss" scoped>
.app-container{
  height: 100%;
  width: 100%;
  padding: 10px 12px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
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
  }
}
</style>
