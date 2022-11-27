<template>
  <el-card class="m-dept-side" >
    <div class="title">部门列表</div>
    <el-input v-model="filterText" placeholder="输入关键字进行过滤" class="filter-search"/>
    <div class="filter-tree">
      <el-scrollbar class="scrollbar">
        <el-tree
            ref="treeRef"
            :data="tableData"
            :props="defaultProps"
            default-expand-all
            :filter-node-method="filterNode"
        />
      </el-scrollbar>

    </div>

  </el-card>
</template>

<script lang="ts" setup>
import {onBeforeMount, ref, watch} from 'vue'
import { ElTree } from 'element-plus'
import { deptData } from '@/mock/system'

const tableData = ref<Tree[]>(deptData)
interface Tree {
  id: string
  deptName: string
  orderNo: number
  createTime?:string
  remark?:string
  status?:boolean
  children?: Tree[]
}

onBeforeMount( () => {
  let allObj = {"id": "", "deptName": "全部"}
  tableData.value = [allObj,...deptData]
});

const filterText = ref('')
const treeRef = ref<InstanceType<typeof ElTree>>()

const defaultProps = {
  children: 'children',
  label: 'deptName',
  value:'id'
}

// 监听输入
watch(filterText, (val) => {
  treeRef.value!.filter(val)
})

// 搜索
const filterNode = (value: string, data: Tree) => {
  console.log(data)
  if (!value) return true
  return data.deptName.includes(value)
}
</script>

<style lang="scss" scoped>
@import "../index.scss";
</style>
