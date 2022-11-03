<template>
  <div class="advancedForm">
    <el-form
        ref="ruleFormRef"
        :inline="true"
        :label-position="'right'"
        :model="formInline"
        class="form-inline">
      <el-row
          :class="{
            'not-show':byHeight&&!isExpand
          }"
          :gutter="gutterWidth">
        <el-col :span="item.span"
                v-for="item,index in columns"
                :key="item.name"
                v-show="byHeight?true:(index< (showRow*3)||isExpand)">
          <el-form-item :label="item.title" :label-width="labelWidth" v-if="item.type==='input'">
            <el-input
                clearable
                v-model="formInline[item.name]" :placeholder="item.placeholder" />
          </el-form-item>
          <template v-else-if="item.type==='date'">
            <el-form-item :label="item.title" :label-width="labelWidth" >
              <el-date-picker
                  value-format="YYYY-MM-DD"
                  v-model="formInline[item.name]"
                  type="date"
                  :placeholder="item.placeholder"
              />
            </el-form-item>
          </template>
        </el-col>
      </el-row>
    </el-form>
    <div class="search-btn">
      <el-button type="primary" @click="onSubmit">查询</el-button>
      <el-button  @click="resetForm(ruleFormRef)">重置</el-button>
      <el-button link type="primary" @click="isExpand = !isExpand">{{ isExpand ? '合并' : '展开'}}<el-icon>
        <arrow-down v-if="!isExpand" />
        <arrow-up v-else /> </el-icon
      ></el-button>
    </div>
  </div>
</template>

<script lang="ts" setup>
import {reactive, ref} from 'vue'
import type { FormInstance, FormRules } from 'element-plus'
const ruleFormRef = ref<FormInstance>()
let props = defineProps({
  // 宽度
  labelWidth: {
    default: "100px",
  },
  gutterWidth: {
    type: Number,
    default: 24,
  },
  showRow:{
    type: Number,
    default: 1,
  },
  columns:{
    type:Array,
    default:()=>[]
  },
  byHeight:{
    type:Boolean,
    default:false
  }
})
const emit = defineEmits(['submit','reset'])
// 收缩展开
const isExpand = ref(false)

const formInline = reactive({
})

for(let item of props.columns){
  formInline[item.name] = null
}

const onSubmit = () => {
  emit('submit',formInline)
}

const resetForm = (formEl: FormInstance | undefined) => {
  console.log('formEl',formEl)
  if (!formEl) return
  formEl.resetFields()
  const keys = Object.keys(formInline);
  keys.forEach(key => {
    formInline[key] = null;
  });
  emit("reset", formInline);
}
</script>

<style lang="scss" scoped>
.advancedForm{
  display: flex;
  justify-content: space-between;
  .form-inline{
    flex: 1;
  }
  .el-form--inline .el-form-item{
    width: 100%;
    margin-right: 10px;
  }
  .search-btn{
    margin-left: 40px;
  }
  .not-show{
    height: 40px;
    overflow: hidden;
  }
}
</style>
