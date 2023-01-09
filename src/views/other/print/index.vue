<template>
  <PageWrapLayout>
    <div id="wrap" style="margin-bottom: 20px">
      <div>
        <el-button type="primary" @click="print(1)" >打印图片</el-button>
        <el-button type="primary" @click="print(2)">打印Json数据</el-button>
        <el-button type="primary" @click="print(3)">打印HTML</el-button>
      </div>
      <div style="margin-top: 20px">
        <img :src="logo" style="width: 200px" />
      </div>
      <div id="tableBox">
        <el-table :data="tableData" style="width: 100%">
          <el-table-column prop="date" label="日期" width="180" />
          <el-table-column prop="name" label="名字" width="180" />
          <el-table-column prop="address" label="地址" />
        </el-table>
      </div>
    </div>

    <el-descriptions title="配置项 " :column="1" border class="descriptions">
      <el-descriptions-item label="官方文档"> <a href="https://github.com/crabbly/Print.js" target="_blank">https://github.com/crabbly/Print.js</a> </el-descriptions-item>
      <el-descriptions-item label="printable"> 文档来源：pdf或图像的url，html元素的id或json数据的对象 </el-descriptions-item>
      <el-descriptions-item label="type"> 可打印类型。可用的打印选项包括：pdf，html，image，json和raw-html。 </el-descriptions-item>
      <el-descriptions-item label="documentTitle"> 打印html，image或json时，它将显示为文档标题。如果用户尝试将打印作业保存为pdf文件，它也将是文档的名称。 </el-descriptions-item>
      <el-descriptions-item label="scanStyles">设置为false时，库不会处理应用于正在打印的html的样式。使用css参数时很有用 </el-descriptions-item>
      <el-descriptions-item label="targetStyle"> 默认情况下，在打印HTML元素时，库仅处理某些样式。此选项允许您传递要处理的样式数组。例如：['padding-top'，'border-bottom'] </el-descriptions-item>
      <el-descriptions-item label="gridHeaderStyle"> 打印JSON数据时网格标题的可选样式。 </el-descriptions-item>
      <el-descriptions-item label="properties"> 在打印JSON时使用。这些是对象属性名称。 </el-descriptions-item>
      <el-descriptions-item label="honorColor"> 要以彩色打印文本，请将此属性设置为true。默认情况下，所有文本都将以黑色打印。 </el-descriptions-item>
      <el-descriptions-item label="css"> 这允许我们传递一个或多个应该应用于正在打印的html的css文件URL。值可以是包含单个URL的字符串，也可以是包含多个URL的数组。 </el-descriptions-item>
    </el-descriptions>
  </PageWrapLayout>
</template>

<script lang="ts" setup>
  import printJS from 'print-js'
  import '@/utils/Print'
  import logo from '@/assets/image/logo.png'

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

  const print = (type) => {
    switch (type) {
      case 1:
        printJS({
          type: 'image',
          printable: [logo],
          documentTitle: '打印图片',
        })
        break
      case 2:
        printJS({
          type: 'json',
          documentTitle: '打印表格',
          printable: tableData,
          gridStyle: 'text-align: center;border: 1px solid lightgray;font-size: 12px;',
          properties: [
            { field: 'date', displayName: '日期' },
            { field: 'name', displayName: '名字' },
            { field: 'address', displayName: '地址' },
          ],
        })
        break
      case 3:
        // printJS({
        //   type: 'wrap',
        //   documentTitle: '打印页面',
        //   printable: "tableBox",
        //   scanStyles:false,
        //   targetStyles: ['*'], // 允许打印所有样式属性
        //   honorColor: true, // 是否打印彩色文本
        //   style: '@page {margin: 0 10mm};', // 不打印页眉和页脚
        //   gridStyle: 'border: 1px solid lightgray;font-size: 12px;',
        // })
        Print('#wrap', {
          onStart: function () {
            console.log('onStart', new Date())
          },
          onEnd: function () {
            console.log('onEnd', new Date())
          }
        })
        break
    }
  }
</script>

<style></style>
