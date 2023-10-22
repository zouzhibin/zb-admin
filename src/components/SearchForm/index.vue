<template>
  <div class="advancedForm">
    <el-form
      ref="ruleFormRef"
      :inline="true"
      :label-position="'right'"
      :model="formParams"
      class="form-inline"
    >
      <el-row :class="{ 'not-show': byHeight && !isExpand }" :gutter="gutterWidth">
        <template v-for="(item, index) in columns">
          <el-col
            v-if="item.valueType"
            :span="item.span"
            v-show="byHeight ? true : index < showRow * 3 || isExpand"
          >
            <BaseFormItem :key="index" :config="item" v-bind="item.attrs" v-model="item.value" />
          </el-col>
        </template>
      </el-row>
    </el-form>
    <div class="search-btn">
      <el-button type="primary" @click="onSubmit">查询</el-button>
      <el-button @click="resetForm(ruleFormRef)">重置</el-button>
      <el-button link type="primary" @click="isExpand = !isExpand" v-if="columns.length > 3">
        {{ isExpand ? '合并' : '展开' }}
        <el-icon>
          <arrow-down v-if="!isExpand" />
          <arrow-up v-else />
        </el-icon>
      </el-button>
    </div>
  </div>
</template>

<script lang="ts" setup>
  import { onMounted, reactive, ref } from 'vue'
  import type { FormInstance } from 'element-plus'
  import BaseFormItem from './components/BaseFormItem.vue'
  const ruleFormRef = ref<FormInstance>()
  let props = defineProps({
    // 宽度
    labelWidth: {
      default: '100px',
    },
    gutterWidth: {
      type: Number,
      default: 24,
    },
    showRow: {
      type: Number,
      default: 1,
    },
    columns: {
      type: Array,
      default: () => [],
    },
    byHeight: {
      type: Boolean,
      default: false,
    },
  })

  const emit = defineEmits(['submit', 'reset'])
  // 收缩展开
  const isExpand = ref(false)
  const formParams = reactive({})

  const initFormParams = () => {
    for (let item of props.columns) {
      formParams[item.name] = item?.value
    }
  }

  // 进行遍历获取参数
  const getFormParams = () => {
    let searchParams = {}
    for (let item of props.columns) {
      searchParams[item.name] = item?.value
    }
    return searchParams
  }

  onMounted(() => {
    initFormParams()
  })

  // 获取参数进行组装为 obj
  const onSubmit = () => {
    let searchParams = getFormParams()
    emit('submit', searchParams)
  }

  // 重置参数
  const resetForm = (formEl: FormInstance | undefined) => {
    if (!formEl) return
    formEl.resetFields()
    const keys = Object.keys(formParams)
    keys.forEach((key) => {
      let itemColums = props.columns.find((item) => item.name === key)
      itemColums.value = formParams[key]
    })
    let searchParams = getFormParams()
    emit('reset', searchParams)
  }
</script>

<style lang="scss" scoped>
  .advancedForm {
    display: flex;
    justify-content: space-between;
    .form-inline {
      flex: 1;
    }
    .el-form--inline .el-form-item {
      width: 100%;
      margin-right: 10px;
    }
    .search-btn {
      margin-left: 40px;
    }
    .not-show {
      height: 40px;
      overflow: hidden;
    }
  }
</style>
