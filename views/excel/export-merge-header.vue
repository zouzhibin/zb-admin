
<template>
  <div class="app-container">
    <div style="margin-bottom: 15px">
      <el-input v-model="input" placeholder="请输入文件名"  style="width: 200px;margin-right: 10px"/>
      <el-button @click="exportExcelAction" type="primary">
        <el-icon style="margin-right: 10px"><document-remove /></el-icon>导出 Excel
      </el-button>
    </div>
    <el-table :data="list" style="width: 100%" border>
      <template v-for="item,index in column" >
        <template v-if="item.children">
          <el-table-column :prop="item.name" :label="item.label" :width="item.width" :key="index">

            <template v-for="ite,i in item.children" >
              <el-table-column :prop="ite.name" :label="ite.label" :width="ite.width" :key="i"/>
            </template>
          </el-table-column>
        </template>
        <el-table-column :prop="item.name" :label="item.label" :width="item.width"  v-else/>
      </template>
    </el-table>
  </div>
</template>

<script>
import { exportMultiHeaderExcel} from '@/utils/exprotExcel'
const data = []
for(let i=0;i<100;i++){
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
  { name:'id', width:60,label: '序号',},
  { name: 'date', label: '日期'},
  { name: 'address', label: '地址' },
  {
    label: '配送信息',
    children:[
      { name: 'province', label: '省份',width:130 },
      { name: 'city', label: '城市' },
      { name: 'zip', label: '邮编' },
    ]
  },
]

export default {
  data(){
    return{
      input:'',
      column,
      list:data
    }
  },
  methods:{
    exportExcelAction(){
      exportMultiHeaderExcel({
        column,
        data:this.list,
        filename:this.input||'导出 excel',
        autoWidth:true
      })
    }
  }
}
</script>

<style>

</style>
