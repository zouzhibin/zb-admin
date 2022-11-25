<template>
  <div class="app-container">
    <div class="header">
      <el-form :inline="true" :model="formInline" ref="ruleFormRef">
        <el-form-item label="部门名称" prop="username">
          <el-input v-model="formInline.username" placeholder="请输入部门名称"/>
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
          新增部门
        </el-button>
      </div>
      <div class="table-inner">
        <el-table
            v-loading="loading"
            row-key="id"
            :data="tableData"
            style="width: 100%"
            border>
          <el-table-column prop="deptName" label="部门名称" align="center"/>
          <el-table-column prop="status" label="状态" align="center">
            <template #default="scope">
              <el-switch
                  inline-prompt
                  active-text="启用" inactive-text="禁用"
                  v-model="scope.row.status" @change="changeStatus(scope.row)" />
            </template>
          </el-table-column>
          <el-table-column prop="remark"
                           :show-overflow-tooltip="true"
                           width="300"
                           label="备注" align="center"/>
          <el-table-column prop="createTime" label="创建时间" align="center" width="180"/>
          <el-table-column prop="operator" label="操作" width="200px" align="center">
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
    </div>
    <DeptDialog ref="deptDialog"/>
  </div>
</template>

<script lang="ts" setup>
  import { ElMessageBox, ElMessage, FormInstance } from 'element-plus'
  import {Search } from '@element-plus/icons-vue'
  import {onMounted, reactive, ref} from 'vue'
  import { deptData } from '@/mock/system'
  import DeptDialog from './components/deptDialog.vue'

  const tableData = ref(deptData)
  const loading = ref(true)
  const dialogVisible = ref(false)
  const deptDialog = ref()
  const ruleFormRef = ref<FormInstance>()
  const formInline = reactive({})

  onMounted(()=>{
    setTimeout(()=>{
      loading.value = false
    },500)
  })

  const onSubmit = () => {
    console.log('submit!', formInline)
    loading.value = true
    setTimeout(()=>{
      loading.value = false
    },500)
  }

  const reset = (formEl: FormInstance | undefined) => {
    loading.value = true
    setTimeout(()=>{
      loading.value = false
    },500)
  }

  const addHandler = () => {
    deptDialog.value.show()
  }
  const editHandler = (row) => {
    deptDialog.value.show(row)
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
      `确定要${!row.status ? '禁用' : '启用'} ${row.deptName} 账户吗？`,
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
</script>

<style scoped lang="scss">
@import "./index";
</style>
