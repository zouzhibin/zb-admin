<template>
  <el-drawer v-model="dialogVisible" :title="title" size="50%" @close="close">
    <el-form
        ref="ruleFormRef"
        :model="ruleForm"
        :rules="rules"
        label-width="100px"
    >
      <el-form-item label="角色名称" prop="roleName">
        <el-input v-model="ruleForm.roleName" placeholder="请输入角色名称"/>
      </el-form-item>
      <el-form-item label="角色标识" prop="roleIdentification">
        <el-input v-model="ruleForm.roleIdentification" placeholder="请输入角色标识"/>
      </el-form-item>
      <el-form-item label="角色状态" >
        <el-switch v-model="ruleForm.status" inline-prompt active-text="启用" inactive-text="禁用"></el-switch>
      </el-form-item>
      <el-form-item label="角色描述"  >
        <el-input v-model="ruleForm.describe"
                  type="textarea"
                  placeholder="请输入角色描述"/>
      </el-form-item>
      <el-form-item label="菜单权限"  >
        <el-tree
            :data="menuData"
            show-checkbox
            node-key="id"
            :props="defaultProps"
        />
      </el-form-item>

    </el-form>
    <template #footer>
        <span class="dialog-footer">
          <el-button @click="dialogVisible = false">取消</el-button>
          <el-button type="primary" @click="handleClose(ruleFormRef)">确定</el-button>
        </span>
    </template>
  </el-drawer>
</template>
<script lang="ts" setup>
  import {reactive, ref} from "vue";
  import {FormInstance} from "element-plus";
  import { menuData } from '@/mock/system'

  const ruleFormRef = ref<FormInstance>()
  const dialogVisible = ref(false)
  const title = ref('新增角色')
  const ruleForm = reactive({
    roleName: '',
    roleIdentification:'',
    describe:null,
    status:true
  })
  const defaultProps = {
    children: 'children',
    label: 'menuName',
  }

  function close() {
    ruleFormRef.value.resetFields()
    Object.keys(ruleForm).forEach(key=>{
      if(key==='status') ruleForm[key] = true
      else ruleForm[key] = null

    })
  }

  const show = (item={})=>{
    title.value = '新增角色'
    if(item.roleName){
      title.value = '编辑角色'
      Object.keys(item).forEach(key=>{
        ruleForm[key] = item[key]
      })
    }
    dialogVisible.value = true
  }

  const rules = reactive({
    roleName: [
      { required: true, message: '请输入角色名称', trigger: 'blur' },
    ],
    roleIdentification: [{ required: true, message: '请输入角色标识', trigger: 'blur' }],
  })

  const handleClose = async (done: () => void) => {
    await ruleFormRef.value.validate((valid, fields) => {
      if (valid) {
        dialogVisible.value = false
        console.log('submit!', obj)
      } else {
        console.log('error submit!', fields)
      }
    })
  }

  defineExpose({
    show,
  })

</script>
