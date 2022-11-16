<template>
  <div>
    <el-drawer v-model="dialogVisible" :title="title" size="50%">
      <el-form
          ref="ruleFormRef"
          :model="ruleForm"
          :rules="rules"
          label-width="120px"
      >
        <el-form-item label="菜单类型" prop="menuType">
          <el-radio-group v-model="ruleForm.menuType">
            <el-radio-button label="目录" />
            <el-radio-button label="菜单" />
            <el-radio-button label="按钮" />
          </el-radio-group>
        </el-form-item>
        <el-form-item label="菜单名称" prop="menuName">
          <el-input v-model="ruleForm.menuName" placeholder="请输入菜单名称"/>
        </el-form-item>
        <el-form-item label="父级菜单" prop="role">
          <el-cascader
              style="width: 100%"
              :options="menuData"
              :props="cascaderProps" clearable />
        </el-form-item>
        <el-form-item label="权限标识" prop="identification">
          <el-input v-model="ruleForm.identification" placeholder="请输入权限标识"/>
        </el-form-item>
        <el-form-item label="路由地址" prop="identification">
          <el-input v-model="ruleForm.url" placeholder="请输入路由地址"/>
        </el-form-item>
      </el-form>
      <template #footer>
        <span class="dialog-footer">
          <el-button @click="dialogVisible = false">取消</el-button>
          <el-button type="primary" @click="handleClose(ruleFormRef)">确定</el-button>
        </span>
      </template>
    </el-drawer>
  </div>
</template>
<script lang="ts" setup>
import {reactive, ref} from "vue";
import {FormInstance} from "element-plus";
import { menuData } from '@/mock/system'

const tableData = ref(menuData)
const ruleFormRef = ref<FormInstance>()
const dialogVisible = ref()
const rules = reactive({
  roleName: [
    { required: true, message: '请输入角色名称', trigger: 'blur' },
  ],
  roleIdentification: [{ required: true, message: '请输入角色标识', trigger: 'blur' }],
})
const title = ref('新增菜单')
const ruleForm = reactive({
  name: '',
  roleIdentification:'',
  describe:null,
  status:true
})
const cascaderProps = {
  value: 'menuName',
  label: 'menuName',
  checkStrictly: true,
}

const show = (item={})=>{
  title.value = '新增菜单'
  if(item.name){
    title.value = '编辑菜单'
    Object.keys(item).forEach(key=>{
      ruleForm[key] = item[key]
    })
  }
  dialogVisible.value = true
}

const handleClose = async (done: () => void) => {
  await ruleFormRef.value.validate((valid, fields) => {
    if (valid) {
      console.log('submit!')
    } else {
      console.log('error submit!', fields)
    }
  })
}

defineExpose({
  show
})
</script>
<style>

</style>
