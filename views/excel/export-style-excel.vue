<template>
  <div class="app-container">
    <div style="margin-bottom: 15px;display: flex;align-items: center">
      <el-input v-model="input" placeholder="请输入文件名"  style="width: 200px;margin-right: 10px"/>
      <el-button @click="exportExcelAction" type="primary">
        <el-icon style="margin-right: 10px"><document-remove /></el-icon>导出样式 Excel
      </el-button>
    </div>
    <el-table :data="list" style="width: 100%" border>
      <template v-for="item,index in column" >
        <el-table-column :prop="item.name" :label="item.label" :width="item.width" :key="index"/>
      </template>
    </el-table>
  </div>
</template>

<script>
  import {exportStyleExcel} from '@/utils/exprotExcel'
  const data = []
  for(let i=0;i<10;i++){
    data.push({
      date: '2016-05-02',
      name: '王五'+i,
      price: 1+i,
      province: '上海',
      admin:"admin",
      sex:i%2?1:0,
      checked:true,
      id:i+1,
      age:0,
      city: '普陀区',
      address: '上海市普上海',
      zip: 200333
    })
  }
  const column = [
    { name: 'id', label: 'id', },
    { name: 'name',
      label: '姓名',
      inSearch:true,
      valueType:'input',
    },
    { name: 'age',
      label: '年龄',
      align:'right',
    },
    { name: 'sex',
      label: '性别',
      slot:true,
      inSearch:true,
      options:[{
        value:1,
        label:'男'
      },{
        value:0,
        label:'女'
      }],
      valueType:'select',
    },
    {
      name: 'price',
      label: '价格',
      inSearch:true,
      valueType:'input',
    },
    { name: 'admin', label: '账号', inSearch:true,
      valueType:'input',},
    { name: 'address', label: '地址', inSearch:true,
      valueType:'input', },
    { name: 'date', label: '日期',sorter:true, inSearch:true,
      valueType:'input', },
    { name: 'province', label: '省份' },
    { name: 'city', label: '城市' },
    { name: 'zip', label: '邮编' },
  ]
  export default {
    data(){
      return{
        format:'xlsx',
        input:'',
        column,
        list:data
      }
    },
    methods:{
      exportExcelAction(){
        exportStyleExcel({
          column,
          data,
          filename:this.input||'导出 excel',
          format:this.format,
          autoWidth:true
        })
      }
    }
  }

</script>

<style>

</style>
