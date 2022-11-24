<template>
  <el-dialog @close="close" v-model="dialogVisible" :title="title" width="50%">
    <el-form
        ref="ruleFormRef"
        :model="ruleForm"
        :rules="rules"
        label-width="100px"
    >
      <el-form-item label="上级部门" prop="id">
        <el-cascader v-model="ruleForm.id" :options="deptDataOptions" :props="deptProps" clearable style="width: 100%"/>
      </el-form-item>
      <el-form-item label="部门名称" prop="deptName">
        <el-input v-model="ruleForm.deptName" placeholder="请输入部门名称"/>
      </el-form-item>
      <el-form-item label="状态" >
        <el-switch v-model="ruleForm.status" inline-prompt active-text="启用" inactive-text="禁用"></el-switch>
      </el-form-item>
      <el-form-item label="备注"  >
        <el-input v-model="ruleForm.remark"
                  type="textarea"
                  placeholder="请输入备注"/>
      </el-form-item>
    </el-form>
    <template #footer>
        <span class="dialog-footer">
          <el-button @click="dialogVisible = false">取消</el-button>
          <el-button type="primary" @click="handleConfim(ruleFormRef)">确定</el-button>
        </span>
    </template>
  </el-dialog>
</template>
<script lang="ts" setup>
import { ElMessageBox, ElMessage, FormInstance } from 'element-plus'
import {reactive, ref} from "vue";
import { deptData } from '@/mock/system'

const ruleFormRef = ref<FormInstance>()
const dialogVisible = ref<boolean>(false)
const deptDataOptions = ref(deptData)
const title = ref('新增部门')
const deptProps = {
  value: 'id',
  label: 'deptName',
  checkStrictly:true
}

const rules = reactive({
  deptName: [{ required: true, message: '请输入部门名称', trigger: 'blur' }],
  id: [{required: true, message: '请选择上级部门', trigger: 'change',},],
})

const ruleForm = reactive({
  deptName: '',
  id:'',
  remark:null,
  status:true
})

function close() {
  ruleFormRef.value.resetFields()
  Object.keys(ruleForm).forEach(key=>{
    if(key==='sex') ruleForm[key] = '男'
    else if(key==='status') ruleForm[key] = true
    else ruleForm[key] = null

  })
}

const show = (item={})=>{
  title.value = '新增部门'
  if(item.deptName){
    title.value = '编辑部门'
    Object.keys(item).forEach(key=>{
      ruleForm[key] = item[key]
    })
  }
  dialogVisible.value = true
}

const handleConfim = async (done: () => void) => {
  await ruleFormRef.value.validate((valid, fields) => {
    if (valid) {
      dialogVisible.value = false
      ElMessage.success( `提交数据：${JSON.stringify(ruleForm)}`)
      console.log('submit!', ruleForm)
    } else {
      console.log('error submit!', fields)
    }
  })
}

defineExpose({
  show,
})

</script>
<style lang="scss" scoped>

</style>

