<template>
  <div class="app-container">
    <div class="header">
      <el-form :inline="true" :model="formInline" ref="ruleFormRef">
        <el-form-item label="菜单名称" prop="username">
          <el-input v-model="formInline.username" placeholder="请输入菜单名称"/>
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
          新增菜单
        </el-button>
      </div>
      <div class="table-wrap">
        <el-table :data="tableData" style="width: 100%" border default-expand-all row-key="id" class="table">
          <el-table-column prop="menuName" label="权限名称" />
          <el-table-column prop="menuType" label="权限类型" />
          <el-table-column prop="menuRouter" label="权限路由" />
          <el-table-column prop="identification" label="权限标识" />
          <el-table-column prop="status" label="操作">
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
    <MenuDrawer ref="menuDrawerRef"/>
  </div>
</template>

<script lang="ts" setup>
  import { ElMessageBox, ElMessage, FormInstance } from 'element-plus'
  import { reactive, ref } from 'vue'
  import {Search } from '@element-plus/icons-vue'
  import { menuData } from '@/mock/system'
  import MenuDrawer from './components/MenuDrawer.vue'

  const tableData = ref(menuData)
  const title = ref('新增')
  const menuDrawerRef = ref()
  const ruleFormRef = ref<FormInstance>()
  const formInline = reactive({})
  const reset = (formEl: FormInstance | undefined) => {}

  const onSubmit = () => {
    console.log('submit!', formInline)
  }

  const add = () => {
    menuDrawerRef.value.show()
  }

  const edit = (row) => {
    menuDrawerRef.value.show(row)
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
      '提示',
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
  .table-wrap{
    flex: 1;
    display: flex;
    position: relative;
    overflow: hidden;
  }
  .table-inner{
    width: 100%;
    height: 100%;
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
