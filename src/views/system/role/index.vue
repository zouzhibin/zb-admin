<template>
  <div class="app-container">
    <div class="header">
      <el-form :inline="true" :model="formInline" class="demo-form-inline" ref="ruleFormRef">
        <el-form-item label="角色名称" prop="roleName">
          <el-input v-model="formInline.roleName" placeholder="请输入角色名称"/>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="onSubmit" :icon="Search">查询</el-button>
          <el-button @click="reset(ruleFormRef)">重置</el-button>
        </el-form-item>
      </el-form>
    </div>
    <div class="footer">
      <div class="util">
        <el-button type="primary" @click="add">
          <el-icon><Plus /></el-icon>
          新增角色
        </el-button>
      </div>
      <div class="table-inner">
        <el-table
            v-loading="loading"
            :data="tableData" style="width: 100%" border>
          <el-table-column prop="roleName" label="角色名称" />
          <el-table-column prop="roleIdentification" label="角色标识" />
          <el-table-column prop="status" label="角色状态" align="center">
            <template #default="scope">
              <el-switch v-model="scope.row.status"
                         inline-prompt
                         active-text="启用" inactive-text="禁用"
                         @change="changeStatus(scope.row)" />
            </template>
          </el-table-column>
          <el-table-column prop="describe"
                           :show-overflow-tooltip="true"
                           width="180"
                           label="角色描述" />
          <el-table-column prop="createTime" label="创建时间" />
          <el-table-column prop="status" label="操作" width="180">
            <template #default="scope">
              <el-button type="primary" size="small" icon="Edit" @click="edit(scope.row)">
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
    <RoleDrawer ref="roleDrawer"/>
  </div>
</template>

<script lang="ts" setup>
  import { ElMessageBox, ElMessage, FormInstance } from 'element-plus'
  import {onMounted, reactive, ref} from 'vue'
  import {Search } from '@element-plus/icons-vue'
  import RoleDrawer from './components/roleDrawer.vue'
  import { roleData } from '@/mock/system'
  const tableData = ref(roleData)

  const loading = ref(true)
  const roleDrawer = ref()
  const formSize = ref('default')
  const ruleFormRef = ref<FormInstance>()
  const formInline = reactive({})

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
  const add = () => {
    roleDrawer.value.show()
  }

  const edit = (row) => {
    roleDrawer.value.show(row)
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
        `确定要${!row.status ? '禁用' : '启用'} ${row.roleName} 角色吗？`,
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

  onMounted(()=>{
    setTimeout(()=>{
      loading.value = false
    },500)
  })


</script>

<style scoped lang="scss">
.header{
  display: flex;
  padding: 16px 16px 0px 16px;
  margin-bottom: 16px;
  border-radius: 4px;
  background: white;
  box-shadow: 0 0 12px rgb(0 0 0 / 5%);
}
.footer{
  flex: 1;
  display: flex;
  padding: 16px;
  flex-direction: column;
  border-radius: 4px;
  overflow: hidden;
  background: white;
  box-shadow: 0 0 12px rgb(0 0 0 / 5%);
  position: relative;
  box-sizing: border-box;
  .util{
    margin-bottom: 15px;
    display: flex;
    justify-content: flex-end;
    flex-shrink: 0;
  }
  .table-inner{
    flex: 1;
    position: relative;
  }
  .table{
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%
  }
}

</style>
