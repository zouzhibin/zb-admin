<template>
  <div class="advancedForm">
    <el-card class="box-card">
      <template #header>
        <div class="card-header">
          <span style="margin-right: 100px">收缩表单 通过v-show来控制显隐藏</span>
          <el-button @click="showRow(2)" type="primary" link>显示两行</el-button>
          <el-button @click="showRow(1)" type="primary" link>显示一行</el-button>
        </div>
      </template>
      <AdvancedForm :columns="columns" @submit="onSubmit" :showRow="row"/>
    </el-card>

    <el-card class="box-card" style="margin-top: 20px">
      <template #header>
        <div class="card-header">
          <span>收缩表单 通过高度来控制显隐藏</span>
        </div>
      </template>
      <AdvancedForm :columns="columns" @submit="onSubmit" :byHeight="true"/>

    </el-card>

  </div>
</template>

<script lang="ts" setup >
import AdvancedForm from "@/components/SearchForm/advancedForm/index.vue"
import {reactive, ref} from 'vue'
import { ElMessage, ElMessageBox } from 'element-plus'
let columns = [
    {
      type: 'input',
      name:"name1",
      title:'字段1',
      placeholder: "字段1",
      span: 8,
    },
    {
      type: 'date',
      name:"name2",
      title:'字段2',
      placeholder: "字段2",
      span: 8,
    },
    {
      type: 'input',
      name:"name3",
      title:'字段3',
      placeholder: "字段3",
      span: 8,
    },
    {
      type: 'input',
      name:"name4",
      title:'字段4',
      placeholder: "字段4",
      span: 8,
    },
  {
    type: 'input',
    name:"name5",
    title:'字段5',
    placeholder: "字段5",
    span: 8,
  },{
    type: 'input',
    name:"name6",
    title:'字段6',
    placeholder: "字段6",
    span: 8,
  },{
    type: 'input',
    name:"name7",
    title:'字段7',
    placeholder: "字段7",
    span: 8,
  },
  {
    type: 'input',
    name:"name8",
    title:'字段8',
    placeholder: "字段8",
    span: 8,
  },{
    type: 'input',
    name:"name9",
    title:'字段9',
    placeholder: "字段9",
    span: 8,
  }
]
const formValue= ref({})
const row = ref(1)
const onSubmit = (formInline) => {
  formValue.value = formInline
  ElMessage.success(JSON.stringify(formInline))
}
const showRow = (number)=>{
  row.value = number
}

</script>

<style lang="scss" scoped>
@import "./index.scss";
</style>
