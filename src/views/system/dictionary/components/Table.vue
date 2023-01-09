<template>
  <div class="m-user-table">
    <div class="header">
      <el-form :inline="true" :model="formInline" ref="ruleFormRef">
        <el-form-item label="名称" prop="username">
          <el-input v-model="formInline.username" placeholder="请输入名称"/>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="onSubmit" :icon="Search">查询</el-button>
          <el-button @click="reset(ruleFormRef)">重置</el-button>
        </el-form-item>
      </el-form>
    </div>
    <div class="footer">
      <div class="util">
        <el-button type="primary" @click="addHandler">
          <el-icon><Plus /></el-icon>
          新增字典项
        </el-button>
      </div>
      <div class="table-inner">
        <el-table
            v-loading="loading"
            :data="tableData" style="width: 100%;height: 100%" border>
          <el-table-column prop="id" label="id" align="center" width="100"/>
          <el-table-column prop="name" label="名称" align="center" width="100"/>
          <el-table-column prop="key" label="键值" align="center"/>
          <el-table-column prop="remark"
                           :show-overflow-tooltip="true"
                           width="180"
                           label="描述" align="center"/>
          <el-table-column prop="createTime" label="创建时间" align="center" width="180"/>
          <el-table-column prop="operator" label="操作" width="200px" align="center" fixed="right">
            <template #default="scope">
              <el-button type="primary" size="small" icon="Edit" @click="editHandler(scope.row)">
                编辑
              </el-button>
              <el-button @click="del(scope.row)" type="danger" size="small" icon="Delete">
                删除
              </el-button>
            </template>
          </el-table-column>
        </el-table>
      </div>
      <div class="pagination">
        <el-pagination
            v-model:currentPage="currentPage1"
            :page-size="10"
            background
            layout="total, sizes, prev, pager, next, jumper"
            :total="1000"
            @size-change="handleSizeChange"
            @current-change="handleCurrentChange"
        />
      </div>
    </div>

    <DictionaryEntryDialog ref="dictionaryEntryDialog"/>
  </div>
</template>
<script lang="ts" setup>
import { ElMessageBox, ElMessage, FormInstance } from 'element-plus'
import {Search } from '@element-plus/icons-vue'
import {onMounted, reactive, ref} from 'vue'
import { dictionaryDetailData } from '@/mock/system'
import UserDialog from './userDialog.vue'
import DictionaryEntryDialog from './dictionaryEntryDialog.vue'

const tableData = ref(dictionaryDetailData[0].children)
const dialogVisible = ref(false)
const dictionaryEntryDialog = ref()
const ruleFormRef = ref<FormInstance>()
const formInline = reactive({})
const loading = ref(true)
const currentPage1 = ref(1)

const onSubmit = () => {
  console.log('submit!', formInline)
  loading.value = true
  setTimeout(()=>{
    loading.value = false
  },1000)
}

const reset = (formEl: FormInstance | undefined) => {
  loading.value = true
  setTimeout(()=>{
    loading.value = false
  },1000)
}

const getList = (data)=>{
  loading.value = true
  if(!data.id){
    tableData.value = []
  }else {
    let obj = dictionaryDetailData.find(item=>item.id===data.id)
    tableData.value = obj.children
  }

  setTimeout(()=>{
    loading.value = false
  },500)
}


const addHandler = () => {
  dictionaryEntryDialog.value.show()
}
const editHandler = (row) => {
  dictionaryEntryDialog.value.show(row)
}

const del = (row) => {
  ElMessageBox.confirm('你确定要删除当前项吗?', '温馨提示', {
    confirmButtonText: '确定',
    cancelButtonText: '取消',
    type: 'warning',
    draggable: true,
  })
      .then(() => {})
      .catch(() => {})
}
const changeStatus = (row) => {
  ElMessageBox.confirm(
      `确定要${!row.status ? '禁用' : '启用'} ${row.username} 账户吗？`,
      '温馨提示',
      {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning',
      },
  )
      .then(async () => {})
      .catch(() => {
        row.status = !row.status
      })
}

const handleSizeChange = (val: number) => {
  console.log(`${val} items per page`)
}

const handleCurrentChange = (val: number) => {
  currentPage1.value = val
}

onMounted(()=>{
  setTimeout(()=>{
    loading.value = false
  },1000)
})

defineExpose({
  getList
})
</script>
<style lang="scss" scoped>
@import "../index";
</style>
