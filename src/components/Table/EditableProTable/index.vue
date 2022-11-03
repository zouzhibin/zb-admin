<template>
  <div class="m-edit-table">
    <div style="margin-top: 15px; margin-bottom: 15px" v-if="mode !== 'hide' && mode !== 'bottom'">
      <el-button style="width: 100%" @click="add">
        <el-icon style="margin-right: 4px"><plus /></el-icon> 添加一行数据</el-button
      >
    </div>
    <el-table :data="transData" style="width: 100%" row-key="id" border>
      <template v-for="item in columns">
        <el-table-column
            v-if="item.type"
            :type="item.type"
            :width="item.width"
            :align="item.align"
            :fixed="item.fixed"
            :label="item.label"
        />
        <el-table-column
            v-else
            :prop="item.name"
            :width="item.width"
            :align="item.align"
            :fixed="item.fixed"
            :label="item.label"
        >
          <template #default="scope">
            <template v-if="!item.slot">
              <template v-if="item.readonly">
                {{ scope.row[item.name] }}
              </template>
              <template v-else-if="item.valueType === 'select'">
                <el-select
                    clearable
                    :placeholder="`请选择`"
                    v-model="scope.row[item.name]"
                    v-if="scope.row.edit"
                >
                  <el-option
                      v-for="ite in item.options"
                      :key="ite.value"
                      :label="ite.label"
                      :value="ite.value"
                  />
                </el-select>
                <span v-else>{{ filterOption(item, scope) }}</span>
              </template>

              <template v-else-if="item.valueType === 'date'">
                <el-date-picker
                    v-model="scope.row[item.name]"
                    type="date"
                    value-format="YYYY-MM-DD"
                    clearable
                    placeholder="请选择"
                    v-if="scope.row.edit"
                />
                <span v-else>{{ scope.row[item.name] || '--' }}</span>
              </template>
              <template v-else>
                <el-input
                    clearable
                    placeholder="请输入"
                    v-model="scope.row[item.name]"
                    v-if="scope.row.edit"
                ></el-input>
                <span v-else>{{ scope.row[item.name] || '--' }}</span>
              </template>
            </template>
            <slot v-else :name="item.name" :item="item" :row="scope.row"></slot>
          </template>
        </el-table-column>
      </template>
      <el-table-column prop="operator" label="操作" width="250px" fixed="right">
        <template #default="scope">
          <el-button
              v-if="scope.row.edit"
              type="primary"
              size="small"
              icon="CircleCheckFilled"
              @click="confirmEdit(scope.row)"
          >
            保存
          </el-button>
          <el-button
              v-else
              type="primary"
              size="small"
              icon="Edit"
              @click="scope.row.edit = !scope.row.edit"
          >
            编辑
          </el-button>
          <el-popover
              trigger="click"
              v-model:visible="scope.row.visible"
              placement="top"
              :width="160"
          >
            <p style="display: flex; align-items: center; margin-bottom: 10px">
              <el-icon color="#faad14" style="margin-right: 10px"><warning-filled /></el-icon>
              删除此行？</p
            >
            <div style="text-align: right; margin: 0">
              <el-button size="small" @click="scope.row.visible = false">取消</el-button>
              <el-button size="small" type="primary" @click="deleteAction(scope.row)"
              >确定</el-button
              >
            </div>
            <template #reference>
              <el-button icon="Delete" @click="deleteCurrent(scope.row)" type="danger" size="small"
              >删除</el-button
              >
            </template>
          </el-popover>
          <el-button
              v-if="scope.row.edit"
              type="primary"
              size="small"
              icon="Edit"
              @click="cancelEdit(scope.row)"
          >
            取消
          </el-button>
        </template>
      </el-table-column>
    </el-table>
    <div style="margin-top: 15px" v-if="mode !== 'hide' && mode !== 'top'">
      <el-button style="width: 100%" @click="add">
        <el-icon style="margin-right: 4px"><plus /></el-icon> 添加一行数据</el-button
      >
    </div>
  </div>
</template>
<script lang="ts" setup>
import { computed, onMounted, ref, watch } from 'vue'
import { deepObjClone } from '@/utils/index'
import { ElMessage, ElMessageBox } from 'element-plus'
import { reactive } from 'vue'
const emit = defineEmits(['del', 'add', 'onChange'])
let transData = ref([])

let props = defineProps({
  columns: {
    type: Array,
    default: () => [],
  },
  data: {
    type: Array,
    default: () => [],
  },
  editableKeys: {
    type: Array,
    default: () => [],
  },
  mode: {
    type: String,
    default: 'bottom',
  },
})

// 删除当前此行
const deleteCurrent = (row)=>{
  // console.log('----------',row)
  // row.visible = true
}

const getData = () => {
  let arr = deepObjClone(transData.value)
  for (let item of arr) {
    for (let attr in item) {
      if (attr.includes('te__mp')) {
        delete item[attr]
      }
    }
  }
  emit('onChange', arr)
}

let obj = {}
for (let item of props.columns) {
  props.data.forEach((it) => {
    if (!obj[item.name]) {
      obj[item.name] = null
    }
  })
}

// 重置数据
const reset = () => {
  transData.value = props.data
  for (let item of transData.value) {
    if (props.editableKeys.includes(item.id)) {
      item.edit = true
    }
  }
  getData()
}

onMounted(() => {
  watch(
      () => props.data,
      (val) => {
        // // 转换数据
        transData.value = deepObjClone(val)
        // 存储一个临时变量
        for (let item of transData.value) {
          if (props.editableKeys.includes(item.id)) {
            item.edit = true
          }
          for (let attr in item) {
            let temp = `${attr}te__mp`
            item[temp] = item[attr]
          }
        }
      },
      {
        immediate: true,
        deep: true,
      },
  )
})

const visible = ref(false)

const handleSizeChange = (val: number) => {
  console.log(`${val} items per page`)
}

const listLoading = ref(false)

// 保存
const confirmEdit = (row) => {
  row.edit = false
  for (let attr in row) {
    if (attr.includes('te__mp')) {
      row[attr] = row[attr.replace('te__mp', '')]
    }
  }
  getData()
}
// 取消
const cancelEdit = (row) => {
  row.edit = !row.edit
  for (let attr in row) {
    if (attr !== 'edit') {
      if (!attr.includes('te__mp')) {
        row[attr] = row[attr + 'te__mp']
      }
    }
  }
}

const deleteAction = (row) => {
  row.visible = false
  transData.value = transData.value.filter((item) => item.id !== row.id)
  emit('del', row)
}

// 添加
const add = () => {
  let id = ~~(Math.random() * 1000000).toFixed(0)
  let obj1 = Object.assign({}, obj, {
    id: id,
    edit: true,
    visible: false,
  })
  for (let attr in obj1) {
    let temp = `${attr}te__mp`
    obj1[temp] = obj1[attr]
  }

  if (props.mode === 'bottom') {
    transData.value.push(obj1)
  }
  if (props.mode === 'top') {
    transData.value.unshift(obj1)
  }
}

const filterOption = (item, scope) => {
  let obj = item.options.find((ite) => ite.value === scope.row[item.name])
  if (obj) {
    return obj.label
  }
  return '--'
}

defineExpose({
  reset,
})
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
.inline-edit-table {
  width: 100%;
}
</style>
