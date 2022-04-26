<template>
  <div class="m-edit-table">
    <el-table :data="list" style="width: 100%" >
      <template v-for="item in columns" >
        <el-table-column v-if="item.type" :type="item.type"  :width="item.width" :align="item.align" :fixed="item.fixed" :label="item.label"/>
        <el-table-column
            v-else
            :prop="item.name" :width="item.width" :align="item.align" :fixed="item.fixed" :label="item.label">
          <template #default="scope">
            <span v-if="!item.slot">{{ scope.row[item.name] }}</span>
            <slot v-else :name="item.name" :item="item" :row="scope.row"></slot>
          </template>
        </el-table-column>
      </template>
      <el-table-column prop="operator" label="操作" width="180px" fixed="right">
        <template #default="scope">
          <el-button
              v-if="scope.row.edit"
              type="success"
              size="small"
              icon="CircleCheckFilled"
              @click="confirmEdit(scope.row)"
          >
            保存
          </el-button>
          <el-button
              v-else
              type="primary"
              size="small"
              icon="Edit"
              @click="scope.row.edit=!scope.row.edit"
          >
            编辑
          </el-button>

          <el-button
              type="danger"
              size="small"
              icon="Delete"
              @click="deleteAction(scope.row)"
          >
            删除
          </el-button>

        </template>
      </el-table-column>
    </el-table>

  </div>
</template>
<script lang="ts" setup>
import {computed, ref} from "vue";
import { ElMessage,ElMessageBox  } from 'element-plus'


const props = defineProps({
  columns:{
    type:Array,
    default:()=>[]
  }
})

const data = [
]
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
    img:"https://img1.baidu.com/it/u=300787145,1214060415&fm=253&fmt=auto&app=138&f=JPEG?w=800&h=500",
    age:0,
    city: '普陀区',
    address: '上海市普上海',
    zip: 200333
  })
}

const currentPage1 = ref(1)
const handleSizeChange = (val: number) => {
  console.log(`${val} items per page`)
}
const handleCurrentChange = (val: number) => {
  console.log(`current page: ${val}`)
  currentPage1.value = val
}

const list = computed(()=>{
  let arr = JSON.parse(JSON.stringify(data))
  return arr.splice((currentPage1.value-1)*10,10)
})


const listLoading = ref(false)

const confirmEdit = (row)=>{
  row.edit = false
}

const cancelEdit = (row)=>{
  row.edit = false
}

import { reactive } from 'vue'

const formInline = reactive({
  user: '',
  region: '',
})

const onSubmit = () => {
  console.log('submit!')
}

const deleteAction = (row)=>{
  ElMessageBox.confirm(
      '你确定要删除当前项吗?',
      '温馨提示',
      {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning',
        draggable: true,
      }
  )
      .then(() => {
        list.value = list.value.filter(item=>item.id!==row.id)
        ElMessage.success('删除成功')
      })
      .catch(() => {

      })

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
.inline-edit-table{
  width: 100%;
}
</style>
