<template>
  <el-dialog @close="close" v-model="dialogVisible" :title="title" width="50%">
    <el-form
        ref="ruleFormRef"
        :model="ruleForm"
        :rules="rules"
        label-width="100px"
    >
      <el-form-item label="所属字典" prop="pid">
        <el-cascader
          v-model="ruleForm.pid"
          style="width: 100%"
          :options="dictionaryData"
          :props="cascaderProps" clearable />
      </el-form-item>
      <el-form-item label="字典项名称" prop="name">
        <el-input v-model="ruleForm.name" placeholder="请输入字典项名称"/>
      </el-form-item>
      <el-form-item label="字典项键值" prop="key">
        <el-input v-model="ruleForm.key" placeholder="请输入字典项键值"/>
      </el-form-item>
      <el-form-item label="字典项描述" prop="remark" >
        <el-input v-model="ruleForm.remark"
                  type="textarea"
                  placeholder="请输入字典项描述"/>
      </el-form-item>
    </el-form>
    <template #footer>
        <span class="dialog-footer">
          <el-button @click="dialogVisible = false">取消</el-button>
          <el-button type="primary" @click="handleClose(ruleFormRef)">确定</el-button>
        </span>
    </template>
  </el-dialog>
</template>
<script lang="ts" setup>
import { ElMessageBox, ElMessage, FormInstance } from 'element-plus'
import {reactive, ref} from "vue";

const ruleFormRef = ref<FormInstance>()
const dialogVisible = ref<boolean>(false)
const title = ref('新增字典项')
import { dictionaryData } from '@/mock/system'

const cascaderProps = {
  value: 'id',
  label: 'name',
  checkStrictly: true,
}

const rules = reactive({
  name: [
    { required: true, message: '请输入名称', trigger: 'blur' },
    { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' },
  ],
  key: [{required: true, message: '请输入字典项键值', trigger: 'blur',},],
  pid: [{required: true, message: '请选择所属字典', trigger: 'change',},],
})

const ruleForm = reactive({
  pid: '',
  name: null,
  remark: '',
  key: null,
})

function close() {
  ruleFormRef.value.resetFields()
  Object.keys(ruleForm).forEach(key=>{
    ruleForm[key] = null

  })
}

const show = (item={})=>{
  console.log('======item=======',item)
  title.value = '新增字典项'
  if(item.pid){
    title.value = '编辑字典项'
    Object.keys(item).forEach(key=>{
      ruleForm[key] = item[key]
    })
  }
  dialogVisible.value = true
}

const handleClose = async (done: () => void) => {
  await ruleFormRef.value.validate((valid, fields) => {
    if (valid) {
      dialogVisible.value = false
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

