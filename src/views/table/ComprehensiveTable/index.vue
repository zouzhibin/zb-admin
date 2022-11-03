<template>
  <div class="app-container" ref="appContainer">
    <PropTable
        :loading="loading"
        @selection-change="selectionChange"
        :columns="column"
        :data="list"
        @reset="reset"
        @onSubmit="onSubmit"
    >
      <template v-slot:btn>
        <div style="display: flex; justify-content: flex-end">
          <el-button type="primary" @click="add"
          ><el-icon><plus /></el-icon> 添加</el-button
          >
          <el-button type="danger" @click="batchDelete"
          ><el-icon><delete /></el-icon>删除</el-button
          >
        </div>
      </template>
      <template v-slot:sex="scope">{{ scope.row.sex ? '男' : '女' }}</template>
      <template v-slot:operation="scope">
        <el-button type="primary" size="small" icon="Edit" @click="edit(scope.row)">
          编辑
        </el-button>
        <el-button @click="del(scope.row)" type="danger" size="small" icon="Delete">
          删除
        </el-button>
      </template>
    </PropTable>

    <el-dialog v-model="dialogVisible" :title="title" width="50%">
      <el-form
          ref="ruleFormRef"
          :model="ruleForm"
          :rules="rules"
          label-width="120px"
          class="demo-ruleForm"
          :size="formSize"
      >
        <el-form-item label="活动名称" prop="name">
          <el-input v-model="ruleForm.name" />
        </el-form-item>
        <el-form-item label="性别" prop="sex">
          <el-radio-group v-model="ruleForm.sex">
            <el-radio :label="1">男</el-radio>
            <el-radio :label="0">女</el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item label="价格" prop="price">
          <el-input v-model="ruleForm.price" />
        </el-form-item>
      </el-form>
      <template #footer>
          <span class="dialog-footer">
            <el-button @click="dialogVisible = false">取消</el-button>
            <el-button type="primary" @click="handleClose(ruleFormRef)">确定</el-button>
          </span>
      </template>
    </el-dialog>
  </div>
</template>
<script lang="ts" setup name="comprehensive">
import {ref, reactive, onMounted, nextTick} from 'vue'
import * as dayjs from 'dayjs'
import { ElMessage, ElMessageBox } from 'element-plus'
import type { FormInstance } from 'element-plus'
const loading = ref(true)
const appContainer = ref(null)
import PropTable from '@/components/Table/PropTable/index.vue'
const data = []
for (let i = 0; i < 100; i++) {
  data.push({
    date: '2016-05-02',
    name: '王五' + i,
    price: 1 + i,
    province: '上海',
    admin: 'admin',
    sex: i % 2 ? 1 : 0,
    checked: true,
    id: i + 1,
    age: 0,
    city: '普陀区',
    address: '上海市普上海',
    zip: 200333,
  })
}
const column = [
  { type: 'selection', width: 60 ,fixed: 'left'},
  { name: 'name', label: '姓名', inSearch: true, valueType: 'input', width: 80 },
  { name: 'age', label: '年龄', align: 'right' },
  {
    name: 'sex',
    label: '性别',
    slot: true,
    inSearch: true,
    options: [
      {
        value: 1,
        label: '男',
      },
      {
        value: 0,
        label: '女',
      },
    ],
    valueType: 'select',
  },
  {name: 'price', label: '价格', inSearch: true, valueType: 'input',},
  { name: 'admin', label: '账号', inSearch: true, valueType: 'input' },
  { name: 'address', label: '地址', inSearch: true, valueType: 'input' , width: 180},
  { name: 'date', label: '日期', sorter: true, inSearch: true, valueType: 'input', width: 180 },
  { name: 'province', label: '省份' , width: 100},
  { name: 'city', label: '城市' },
  { name: 'zip', label: '邮编' },
  { name: 'operation', slot: true, fixed: 'right', width: 200,label: '操作'  },
]
const list = ref(data)

const formSize = ref('default')
const ruleFormRef = ref<FormInstance>()
const ruleForm = reactive({
  name: '',
  sex: null,
  price: null,
})

const rules = reactive({
  name: [
    { required: true, message: '请输入活动名称活动区域', trigger: 'blur' },
    { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' },
  ],
  price: [{ required: true, message: '请输入价格', trigger: 'blur' }],
  sex: [
    {
      required: true,
      message: '请选择性别',
      trigger: 'change',
    },
  ],
})

const dialogVisible = ref(false)
const title = ref('新增')
const rowObj = ref({})
const selectObj = ref([])

const handleClose = async (done: () => void) => {
  await ruleFormRef.value.validate((valid, fields) => {
    if (valid) {
      let obj = {
        id: Date.now(),
        ...ruleForm,
        age: 0,
        city: '普陀区',
        address: '上海市普上海',
        zip: 200333,
        province: '上海',
        admin: 'admin',
        date: dayjs().format('YYYY-MM-DD'),
      }
      if (title.value === '新增') {
        list.value = [obj, ...list.value]
        ElMessage.success('添加成功')
      } else {
        list.value.forEach((item) => {
          if (item.id === rowObj.value.id) {
            item.name = obj.name
            item.sex = obj.sex
            item.price = obj.price
          }
        })
      }
      dialogVisible.value = false
      console.log('submit!', obj)
    } else {
      console.log('error submit!', fields)
    }
  })
}

const add = () => {
  title.value = '新增'
  dialogVisible.value = true
}

const batchDelete = () => {
  if (!selectObj.value.length) {
    return ElMessage.error('未选中任何行')
  }
  ElMessageBox.confirm('你确定要删除选中项吗?', '温馨提示', {
    confirmButtonText: '确定',
    cancelButtonText: '取消',
    type: 'warning',
    draggable: true,
  })
      .then(() => {
        ElMessage.success('模拟删除成功')
        list.value = list.value.concat([])
      })
      .catch(() => {})
}
const selectionChange = (val) => {
  selectObj.value = val
}

const edit = (row) => {
  title.value = '编辑'
  rowObj.value = row
  dialogVisible.value = true
  ruleForm.name = row.name
  ruleForm.sex = row.sex
  ruleForm.price = row.price
}

const del = (row) => {
  console.log('row==', row)
  ElMessageBox.confirm('你确定要删除当前项吗?', '温馨提示', {
    confirmButtonText: '确定',
    cancelButtonText: '取消',
    type: 'warning',
    draggable: true,
  })
      .then(() => {
        list.value = list.value.filter((item) => item.id !== row.id)
        ElMessage.success('删除成功')
        loading.value = true
        setTimeout(() => {
          loading.value = false
        }, 500)
      })
      .catch(() => {})
}

const reset = () => {
  loading.value = true
  setTimeout(() => {
    loading.value = false
  }, 500)
  ElMessage.success('触发重置方法')
}

const onSubmit = (val) => {
  console.log('val===', val)
  ElMessage.success('触发查询方法')
  loading.value = true
  setTimeout(() => {
    loading.value = false
  }, 500)
}

const getHeight = ()=>{

}

onMounted(() => {
  nextTick(()=>{
    // let data = appContainer.value.
  })
  setTimeout(() => {
    loading.value = false
  }, 500)
})
</script>

<style scoped>
.edit-input {
  padding-right: 100px;
}
.app-container{
  flex: 1;
  display: flex;
  width: 100%;
  padding: 16px;
  box-sizing: border-box;
}
.cancel-btn {
  position: absolute;
  right: 15px;
  top: 10px;
}
</style>
