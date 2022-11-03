<template>
  <div class="zb-pro-table">
    <div class="header">
      <el-form :inline="true"
               class="search-form"
               :model="formInline"  ref="ruleFormRef" >
        <template v-for="(item, index) in formSearchData" :key="index">
          <el-form-item :label="item.label" v-show="isExpand ? isExpand : index < 2">
            <template v-if="item.valueType === 'input'">
              <el-input v-model="formInline[item.name]" :placeholder="`请输入${item.label}`" />
            </template>
            <template v-if="item.valueType === 'select'">
              <el-select
                  style="width: 100%"
                  v-model="formInline[item.name]" :placeholder="`请选择${item.label}`">
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
      </el-form>
      <div class="search">
        <el-button type="primary" @click="onSubmit"  :icon="Search">查询</el-button>
        <el-button @click="reset(ruleFormRef)">重置</el-button>
        <el-button link type="primary" @click="isExpand = !isExpand">{{ isExpand ? '合并' : '展开'}}<el-icon>
          <arrow-down v-if="!isExpand" />
          <arrow-up v-else /> </el-icon
        ></el-button>
      </div>
    </div>
    <!----------底部---------------------->
    <div class="footer">
      <!-----------工具栏操作工具----------------->
      <div class="operator">
        <slot name="btn"></slot>
      </div>
      <!-- ------------表格--------------->
      <div class="table">
        <el-table
            class="zb-table"
            v-loading="loading"
            @selection-change="(val) => emit('selection-change', val)"
            :data="list"
            :border="true"
        >
          <template v-for="item in columns">
            <el-table-column
                v-if="item.type"
                :type="item.type"
                :width="item.width"
                :align="item.align!=null?item.align:'center'"
                :fixed="item.fixed"
                :label="item.label"
            />
            <el-table-column
                v-else
                :prop="item.name"
                :width="item.width"
                :align="item.align!=null?item.align:'center'"
                :fixed="item.fixed"
                :label="item.label"
            >
              <template #default="scope">
                <span v-if="!item.slot">{{ scope.row[item.name] }}</span>
                <slot v-else :name="item.name" :item="item" :row="scope.row"></slot>
              </template>
            </el-table-column>
          </template>
        </el-table>
      </div>
      <!-- ------------分页--------------->
      <div class="pagination">
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
  </div>
</template>
<script lang="ts" setup>
import { computed, ref } from 'vue'
import {Search } from '@element-plus/icons-vue'
import { ElMessage, ElMessageBox } from 'element-plus'
import type { FormInstance } from 'element-plus'
const ruleFormRef = ref<FormInstance>()
const emit = defineEmits(['reset', 'onSubmit', 'selection-change'])
let props = defineProps({
  columns: {
    type: Array,
    default: () => [],
  },
  data: {
    type: Array,
    default: () => [],
  },
  loading: {
    type: Boolean,
    default: false,
  },
})

const currentPage1 = ref(1)
// 收缩展开
const isExpand = ref(false)
const handleSizeChange = (val: number) => {
  console.log(`${val} items per page`)
}
const handleCurrentChange = (val: number) => {
  console.log(`current page: ${val}`)
  currentPage1.value = val
}

const list = computed(() => {
  let arr = JSON.parse(JSON.stringify(props.data))
  return arr.splice((currentPage1.value - 1) * 10, 10)
})

const listLoading = ref(false)
const confirmEdit = (row) => {
  row.edit = false
}
const cancelEdit = (row) => {
  row.edit = false
}

import { reactive } from 'vue'

let obj = {}
let search = []
for (let item of props.columns) {
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
  formSearchData.value.forEach((item) => {
    formInline[item.name] = null
  })
  emit('reset')
}
const deleteAction = (row) => {
  ElMessageBox.confirm('你确定要删除当前项吗?', '温馨提示', {
    confirmButtonText: '确定',
    cancelButtonText: '取消',
    type: 'warning',
    draggable: true,
  })
      .then(() => {
        list.value = list.value.filter((item) => item.id !== row.id)
        ElMessage.success('删除成功')
      })
      .catch(() => {})
}
</script>
<style scoped lang="scss">
.edit-input {
  padding-right: 100px;
}
.cancel-btn {
  position: absolute;
  right: 15px;
  top: 10px;
}
.zb-pro-table {
  width: 100%;
  height: 100%;
  display:flex;
  flex-direction:column;

  .header{
    display: flex;
    padding: 16px 16px 0 16px;
    margin-bottom: 16px;
    border-radius: 4px;
    background: white;
    box-shadow: 0 0 12px rgb(0 0 0 / 5%);
    .search-form{
      flex: 1;
      ::v-deep{
        .el-input--default{
          width: 200px;
        }
      }
    }
    .search{
      flex-shrink: 0;
      white-space: nowrap;
    }
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
    min-height: 300px;
    .operator{
      margin-bottom: 15px
    }
    .table{
      position: relative;
      flex: 1;
    }
    .zb-table{
      position: absolute;
      height: 100%;
    }
  }
  ::v-deep{
    .el-table__header th{
      font-size: 15px;
      font-weight: 700;
      color: #252525;
    }
  }
  .pagination{
    width: 100%;
    display: flex;
    justify-content: center;
    padding-top: 20px;
    box-sizing: border-box;
  }
}
</style>
