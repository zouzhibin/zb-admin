<template>
  <div class="app-container">
    <el-table :data="list" style="width: 100%">
      <el-table-column prop="date" label="Date" width="150" />
      <el-table-column label="Delivery Info">
        <el-table-column prop="name" label="Name" width="120" />
        <el-table-column label="Address Info">
          <el-table-column prop="state" label="State" width="120" />
          <el-table-column prop="city" label="City" width="120" />
          <el-table-column prop="address" label="Address" />
          <el-table-column prop="zip" label="Zip" width="120" />
        </el-table-column>
      </el-table-column>
    </el-table>

  </div>
</template>
<script lang="ts" setup>
import {ref} from "vue";

const data = [
  {
    date: '2016-05-02',
    name: '',
    price: 0,
    province: '上海',
    admin:"admin",
    sex:'1',
    checked:true,
    id:"20",
    img:"https://img1.baidu.com/it/u=300787145,1214060415&fm=253&fmt=auto&app=138&f=JPEG?w=800&h=500",
    age:0,
    city: '普陀区',
    address: '上海市普上海市普上海市普上海市普',
    zip: 200333
  },
  {
    date: '2016-05-01',
    name: '王小虎2',
    province: '上海',
    sex:'0',
    price: 0,
    id:"2",
    age:12,
    city: '普陀区',
    img:"https://img.pddpic.com/mms-material-img/2020-11-27/84c7fad3-d945-4e71-ab09-7a1ed80f6055.jpeg.a.jpeg",
    address: '上海市普',
    zip: 200333
  },
  {
    date: '2022-03-25T09:27:42',
    name: '王小虎3',
    province: '上海',
    sex:1,
    price: 33,
    id:"3",
    age:'15',
    img:"https://img1.baidu.com/it/u=300787145,1214060415&fm=253&fmt=auto&app=138&f=JPEG?w=800&h=500",
    city: '普陀区',
    address: '上海市普',
    zip: 200333555
  },
  {
    date: '2016-04-02',
    name: '王小虎4',
    province: '上海',
    sex:1,
    age:'11',
    price: 33,
    id:"4",
    img:"https://img1.baidu.com/it/u=300787145,1214060415&fm=253&fmt=auto&app=138&f=JPEG?w=800&h=500",
    city: '普陀区',
    address: '上海市普',
    zip: 200333
  },
  {
    date: '2016-03-02',
    name: '王小虎5',
    province: '上海',
    price: 0,
    sex:1,
    age:'14',
    img:"https://img1.baidu.com/it/u=300787145,1214060415&fm=253&fmt=auto&app=138&f=JPEG?w=800&h=500",
    id:"5",
    city: '普陀区',
    address: '上海市普',
    zip: 200333
  },{
    date: '2014-05-02',
    name: '王小虎6',
    province: '上海',
    price: 33,
    sex:1,
    id:"6",
    age:'12',
    img:"https://img1.baidu.com/it/u=300787145,1214060415&fm=253&fmt=auto&app=138&f=JPEG?w=800&h=500",
    city: '普陀区',
    address: '上海市普',
    zip: 0
  },{
    date: '2019-05-02',
    name: '王小虎7',
    price: 33,
    province: '上海',
    sex:1,
    age:0,
    id:"7",
    city: '普陀区',
    img:"https://img1.baidu.com/it/u=300787145,1214060415&fm=253&fmt=auto&app=138&f=JPEG?w=800&h=500",
    address: '上海市普',
    zip: 200333
  },{
    date: '2012-05-02',
    name: '王小虎8',
    province: '上海',
    price: 0,
    sex:1,
    age:'29',
    id:"8",
    city: '普陀区',
    img:"https://img1.baidu.com/it/u=300787145,1214060415&fm=253&fmt=auto&app=138&f=JPEG?w=800&h=500",
    address: '上海市普',
    zip: 200333
  },{
    date: '2011-05-02',
    name: '王小虎91',
    price: 33,
    img:"https://img1.baidu.com/it/u=300787145,1214060415&fm=253&fmt=auto&app=138&f=JPEG?w=800&h=500",
    province: '上海',
    sex:1,
    id:"9",
    age:'30',
    city: '普陀区',
    address: '上海市普',
    zip: 200333
  },{
    date: '2011-05-02',
    name: '王小虎10',
    province: '上海',
    sex:1,
    id:"10",
    age:'30',
    img:"https://img1.baidu.com/it/u=300787145,1214060415&fm=253&fmt=auto&app=138&f=JPEG?w=800&h=500",
    city: '普陀区',
    address: '上海市普',
    zip: 200333
  },{
    date: '2011-05-02',
    name: '王小虎20',
    province: '上海',
    sex:1,
    price: 33,
    id:"11",
    age:'30',
    city: '普陀区',
    address: '上海市普',
    zip: 200333
  }
]

const list = ref(data)
const listLoading = ref(false)
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
