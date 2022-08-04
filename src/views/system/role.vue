<template>
  <u-container-layout class="components-container">
    <el-form :inline="true" :model="formInline" class="demo-form-inline"  ref="ruleFormRef1">
      <el-form-item label="角色名称" prop="roleName">
        <el-input v-model="formInline.roleName" />
      </el-form-item>
      <el-form-item>
        <el-button  @click="reset(ruleFormRef1)">重置</el-button>
        <el-button type="primary" @click="onSubmit">查询</el-button>
      </el-form-item>
    </el-form>
    <div style="margin-bottom: 15px;display: flex;justify-content: flex-end">
      <el-button type="primary" @click="add">新增</el-button>
    </div>
    <el-table :data="tableData" style="width: 100%" border >
      <el-table-column prop="roleName" label="角色名称"  />
      <el-table-column prop="createTime" label="创建时间" />
      <el-table-column prop="status" label="操作" >
        <template #default="scope">
          <el-button
              type="primary"
              size="small"
              icon="Edit"
              @click="edit(scope.row)"
          >
            编辑
          </el-button>
          <el-button
              @click="del(scope.row)"
              type="danger"
              size="small"
              icon="Delete"
          >
            删除
          </el-button>
        </template>
      </el-table-column>
    </el-table>
    <el-drawer
        v-model="dialogVisible"
        :title="title"
        width="50%"
    >
      <el-form
          ref="ruleFormRef"
          :model="ruleForm"
          :rules="rules"
          label-width="120px"
          class="demo-ruleForm"
          :size="formSize"
      >
        <el-form-item label="角色名称" prop="roleName">
          <el-input v-model="ruleForm.roleName" />
        </el-form-item>
        <div style="padding-left: 50px;">
          <div>权限菜单分配</div>
          <div style="padding-top: 20px;padding-left: 20px;">
            <el-tree
                :default-expand-all="true"
                :data="menuData"
                show-checkbox
                node-key="id"
                :props="defaultProps"
            />
          </div>
        </div>
      </el-form>
      <template #footer>
      <span class="dialog-footer">
        <el-button @click="dialogVisible = false">取消</el-button>
        <el-button type="primary" @click="handleClose(ruleFormRef)"
        >确定</el-button
        >
      </span>
      </template>
    </el-drawer>


  </u-container-layout>
</template>

<script lang="ts" setup>
import {ElMessageBox, ElMessage, FormInstance} from 'element-plus'
import {reactive, ref} from "vue";
import {roleData,menuData} from './data/user'
import * as dayjs from "dayjs";
const tableData = ref(roleData)
const dialogVisible = ref(false)
const title = ref('新增')
const formSize = ref('default')
const ruleFormRef = ref<FormInstance>()
const ruleFormRef1 = ref<FormInstance>()
const formInline = reactive({})
const defaultProps = {
  children: 'children',
  label: 'menuName',
}
const rules = reactive({
  nickname: [
    { required: true, message: '请输入昵称', trigger: 'blur' },
    { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' },
  ],
  username:[
    { required: true, message: '请输入', trigger: 'blur' },
  ],
  role: [
    {
      required: true,
      message: '请选择角色',
      trigger: 'change',
    },
  ],
  sex: [
    {
      required: true,
      message: '请选择性别',
      trigger: 'change',
    },
  ],
})
const onSubmit = () => {
  console.log('submit!',formInline)

}
const reset = (formEl: FormInstance | undefined)=>{

}
const add = ()=>{
  title.value='新增'
  dialogVisible.value = true
}
const ruleForm = reactive({
  name: '',
  sex: null,
  price:null,
})
const edit = (row)=>{
  title.value='编辑'
  // rowObj.value = row
  dialogVisible.value = true
}

const del = (row)=>{
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

      })
      .catch(() => {

      })
}
const changeStatus = (row )=>{
  ElMessageBox.confirm(
      `确定要${!row.status?'禁用':'启用'} ${row.username} 账户吗？`,
      '提示',
      {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning',
      }
  )
      .then(async () => {
      })
      .catch(() => {
        row.status=!row.status
      })
}

const handleClose = async (done:  () => void) => {
  await ruleFormRef.value.validate((valid, fields) => {
    if (valid) {

      dialogVisible.value = false
      console.log('submit!',obj)
    } else {
      console.log('error submit!', fields)
    }
  })
}



</script>

<style scoped>

</style>

