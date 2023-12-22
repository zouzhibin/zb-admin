<template>
  <div class="m-user-table">
    <div class="header">
      <el-form ref="ruleFormRef" :inline="true" :model="formInline">
        <el-form-item label="用户名" prop="username">
          <el-input v-model="formInline.username" placeholder="请输入用户名" />
        </el-form-item>
        <el-form-item>
          <el-button type="primary" :icon="Search" @click="onSubmit">查询</el-button>
          <el-button @click="reset(ruleFormRef)">重置</el-button>
        </el-form-item>
      </el-form>
    </div>
    <div class="footer">
      <div class="util">
        <el-button type="primary" @click="addHandler">
          <el-icon><Plus /></el-icon>
          新增用户
        </el-button>
      </div>
      <div class="table-inner">
        <el-table v-loading="loading" :data="tableData" style="width: 100%; height: 100%" border>
          <el-table-column prop="username" label="用户名" align="center" width="100" />
          <el-table-column prop="nickname" label="昵称" align="center" />
          <el-table-column prop="sex" label="性别" align="center" />
          <el-table-column prop="role" label="关联角色" align="center" width="120" />
          <el-table-column prop="photo" label="手机号" align="center" width="120" />
          <el-table-column prop="status" label="用户状态" align="center">
            <template #default="scope">
              <el-switch
                v-model="scope.row.status"
                inline-prompt
                active-text="启用"
                inactive-text="禁用"
                @change="changeStatus(scope.row)"
              />
            </template>
          </el-table-column>
          <el-table-column prop="describe" :show-overflow-tooltip="true" width="180" label="用户描述" align="center" />
          <el-table-column prop="createTime" label="创建时间" align="center" width="180" />
          <el-table-column prop="operator" label="操作" width="200px" align="center" fixed="right">
            <template #default="scope">
              <el-button type="primary" size="small" icon="Edit" @click="editHandler(scope.row)"> 编辑 </el-button>
              <el-button type="danger" size="small" icon="Delete" @click="del(scope.row)"> 删除 </el-button>
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

    <UserDialog ref="userDialog" />
  </div>
</template>
<script lang="ts" setup>
  import { ElMessageBox, ElMessage, FormInstance } from 'element-plus'
  import { Search } from '@element-plus/icons-vue'
  import { onMounted, reactive, ref } from 'vue'
  import { userData } from '@/mock/system'
  import UserDialog from './userDialog.vue'

  const tableData = ref(userData)
  const dialogVisible = ref(false)
  const userDialog = ref()
  const ruleFormRef = ref<FormInstance>()
  const formInline = reactive({})
  const loading = ref(true)
  const currentPage1 = ref(1)

  const onSubmit = () => {
    console.log('submit!', formInline)
    loading.value = true
    setTimeout(() => {
      loading.value = false
    }, 1000)
  }

  const reset = (formEl: FormInstance | undefined) => {
    loading.value = true
    setTimeout(() => {
      loading.value = false
    }, 1000)
  }

  const addHandler = () => {
    userDialog.value.show()
  }
  const editHandler = (row) => {
    userDialog.value.show(row)
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
    ElMessageBox.confirm(`确定要${!row.status ? '禁用' : '启用'} ${row.username} 账户吗？`, '温馨提示', {
      confirmButtonText: '确定',
      cancelButtonText: '取消',
      type: 'warning',
    })
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

  onMounted(() => {
    setTimeout(() => {
      loading.value = false
    }, 1000)
  })
</script>
<style lang="scss" scoped>
  @import '../index';
</style>
