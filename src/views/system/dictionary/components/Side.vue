<template>
  <el-card class="m-dept-side" >
    <div class="title">字典管理</div>

    <el-button type="primary" @click="addDictsort">
      <el-icon color="#fff"><Plus /></el-icon><span style="margin-left: 8px">添加字典分类</span>
    </el-button>

    <el-input v-model="filterText" placeholder="输入关键字进行过滤" class="filter-search"/>

    <div class="filter-tree">
      <el-scrollbar class="scrollbar">
        <el-tree
            ref="treeRef"
            :data="tableData"
            :props="defaultProps"
            default-expand-all
            :filter-node-method="filterNode"
        >
          <template #default="{ node, data }">
            <span class="custom-tree-node" @click="selectAction(node, data)">
              <span>{{ node.label }}</span>
              <span v-if="data.id!=null">
                <el-button @click.stop="editDictsort(data)" type="primary" link>编辑</el-button>
                <el-button style="margin-left: 6px" type="danger" link @click.stop="remove(node, data)" >删除</el-button>
              </span>
            </span>
          </template>
        </el-tree>
      </el-scrollbar>

    </div>
    <DictsortDialog ref="dictsortDialog"/>
  </el-card>
</template>

<script lang="ts" setup>
import {onBeforeMount, ref, watch} from 'vue'
import { ElMessageBox, ElTree } from "element-plus";
import DictsortDialog from './dictsortDialog.vue'
import { dictionaryData } from '@/mock/system'

const emit = defineEmits(['change'])

const tableData = ref<Tree[]>(dictionaryData)
const dictsortDialog = ref(null)
interface Tree {
  id: string
  name: string
  createTime?:string
  remark?:string
  children?: Tree[]
}

onBeforeMount( () => {
  let allObj = {"id":null, "name": "全部"}
  tableData.value = [allObj,...dictionaryData]
});

const filterText = ref('')
const treeRef = ref<InstanceType<typeof ElTree>>()

const defaultProps = {
  children: 'children',
  label: 'name',
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
  return data.name.includes(value)
}

const addDictsort = ()=>{
  dictsortDialog.value.show()
}

const editDictsort = (item)=>{
  dictsortDialog.value.show(item)
}

const selectAction = (node, data)=>{
  emit('change',data)
  console.log('node, data============',node, data)
}

const remove = (node,data)=>{
  ElMessageBox.confirm('你确定要删除当前项吗?', '温馨提示', {
    confirmButtonText: '确定',
    cancelButtonText: '取消',
    type: 'warning',
    draggable: true,
  })
    .then(() => {})
    .catch(() => {})

  console.log('data===',node,data)
}
</script>

<style lang="scss" scoped>
@import "../index.scss";
</style>
