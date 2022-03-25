<template>
  <div>
    <el-button type="primary" @click="print(1)">打印图片</el-button>
    <el-button type="primary" @click="print(2)">打印表格</el-button>
  </div>
  <div style="margin-top: 20px">
    <img :src="im1" style="width: 50%;"/>
  </div>
  <div>
    <el-table :data="tableData" style="width: 100%">
      <el-table-column prop="date" label="日期" width="180" />
      <el-table-column prop="name" label="名字" width="180" />
      <el-table-column prop="address" label="地址" />
    </el-table>
  </div>
</template>

<script lang="ts" setup>
  import printJS from 'print-js'
  import im1 from '@/assets/image/im1.jpeg'

  const tableData = [
    {
      date: '2016-05-03',
      name: 'Tom',
      address: 'No. 189, Grove St, Los Angeles',
    },
    {
      date: '2016-05-02',
      name: 'Tom',
      address: 'No. 189, Grove St, Los Angeles',
    },
    {
      date: '2016-05-04',
      name: 'Tom',
      address: 'No. 189, Grove St, Los Angeles',
    },
    {
      date: '2016-05-01',
      name: 'Tom',
      address: 'No. 189, Grove St, Los Angeles',
    },
  ]

  const print = (type)=>{
    switch (type) {
      case 1:
        printJS({
          type:'image',
          printable:im1,
          documentTitle: '打印图片'
        })
        break;
      case 2:
        printJS({
          type:'json',
          documentTitle: '打印表格',
          printable: tableData,
          gridStyle: 'text-align: center;border: 1px solid lightgray;font-size: 12px;',
          properties: [
            { field: 'date', displayName: '日期' },
            { field: 'name', displayName: '名字' },
            { field: 'address', displayName: '地址' },
          ],
        })
        break;
      case 3:
        break;
    }
  }
</script>

<style>

</style>
