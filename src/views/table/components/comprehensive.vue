<template>
  <div class="inline-edit-table">
    <el-form :inline="true" :model="formInline" class="demo-form-inline"  ref="ruleFormRef">
      <template v-for="item,index in formSearchData" :key="index">
          <el-form-item :label="item.label" v-show="isExpand?isExpand:index<2">
            <template v-if="item.valueType==='input'">
              <el-input v-model="formInline[item.name]" :placeholder="`请输入${item.label}`" />
            </template>
            <template v-if="item.valueType==='select'">
              <el-select v-model="formInline[item.name]" :placeholder="`请选择${item.label}`" >
                <el-option
                    v-for="ite in item.options"
                    :key="ite.value"
                    :label="ite.label"
                    :value="ite.value"
                />
              </el-select>
            </template>

          </el-form-item>
      </template>
      <el-form-item>
        <el-button  @click="reset(ruleFormRef)">重置</el-button>
        <el-button type="primary" @click="onSubmit">查询</el-button>
        <el-button link @click="isExpand=!isExpand" type="primary">{{ isExpand?'合并':'展开' }}<el-icon>
          <arrow-down v-if="!isExpand"/>
          <arrow-up  v-else/>
        </el-icon></el-button>
      </el-form-item>
    </el-form>
    <div style="margin-bottom: 15px">
      <slot name="btn"></slot>
    </div>
    <el-table
        v-loading="loading"
        @selection-change="(val)=>emit('selection-change',val)"
        :data="list"
        style="width: 100%"
        :border="true">
      <template v-for="item in columns" >
        <el-table-column v-if="item.type" :type="item.type"  :width="item.width" :align="item.align" :fixed="item.fixed" :label="item.label"/>
        <el-table-column
            v-else
            :prop="item.name" :width="item.width" :align="item.align" :fixed="item.fixed" :label="item.label">
          <template #default="scope">
            <span v-if="!item.slot">{{ scope.row[item.name] }}</span>
            <slot v-else :name="item.name" :item="item" :row="scope.row"></slot>
          </template>
        </el-table-column>
      </template>
    </el-table>
    <div style="width: 100%;display: flex;justify-content: center;padding-top: 20px">
      <el-pagination
          v-model:currentPage="currentPage1"
          :page-size="10"
          background
          layout="total, sizes, prev, pager, next, jumper"
          :total="data.length"
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
      />
    </div>
  </div>
</template>
<script lang="ts" setup>
import { computed, ref, reactive } from 'vue'
import { ElMessage, ElMessageBox } from 'element-plus'
import type { FormInstance } from 'element-plus'

const ruleFormRef = ref<FormInstance>()
const emit = defineEmits(['reset', 'onSubmit', 'selection-change'])
const props = defineProps({
  columns: {
    type: Array,
    default: () => []
  },
  data: {
    type: Array,
    default: () => []
  },
  loading: {
    type: Boolean,
    default: false
  }
})

const currentPage1 = ref(1)
const isExpand = ref(true)
const handleSizeChange = (val: number) => {
  console.log(`${val} items per page`)
}
const handleCurrentChange = (val: number) => {
  console.log(`current page: ${val}`)
  currentPage1.value = val
}

const list = computed(() => {
  const arr = JSON.parse(JSON.stringify(props.data))
  return arr.splice((currentPage1.value - 1) * 10, 10)
})

const listLoading = ref(false)
const confirmEdit = (row) => {
  row.edit = false
}
const cancelEdit = (row) => {
  row.edit = false
}

const obj = {}
const search = []
for (const item of props.columns) {
  if (item.inSearch) {
    obj[item.name] = null
  }
  if (item.inSearch) {
    search.push(item)
  }
}
const formSearchData = ref(search)
const formInline = reactive(obj)

const onSubmit = () => {
  console.log('submit!', formInline)
  emit('onSubmit', formInline)
}

const reset = (formEl: FormInstance | undefined) => {
  formSearchData.value.forEach(item => {
    formInline[item.name] = null
  })
  emit('reset')
}
const deleteAction = (row) => {
  ElMessageBox.confirm(
    '你确定要删除当前项吗?',
    '温馨提示',
    {
      confirmButtonText: '确定',
      cancelButtonText: '取消',
      type: 'warning',
      draggable: true
    }
  )
    .then(() => {
      list.value = list.value.filter(item => item.id !== row.id)
      ElMessage.success('删除成功')
    })
    .catch(() => {

    })
}

</script>
<style scoped>
.edit-input {
  padding-right: 100px;
}
.cancel-btn {
  position: absolute;
  right: 15px;
  top: 10px;
}
.inline-edit-table{
  width: 100%;
}
</style>
