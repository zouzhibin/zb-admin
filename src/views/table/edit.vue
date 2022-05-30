<template>
    <div>
      <div style="display: flex;justify-content: flex-end">
        <el-radio-group v-model="radio">
          <el-radio label="top">添加到顶部</el-radio>
          <el-radio label="bottom">添加到底部</el-radio>
          <el-radio label="hide">隐藏</el-radio>
        </el-radio-group>
      </div>
      <el-divider />
      <edit-table
          :mode="radio"
          :columns="column"
          :data="list"
          @add="add"
          ref="table"
          :editableKeys="editableKeys"
          @onChange="onChange"
          @del="deleteAction"
      />
      <div style="margin-top: 20px">
        <el-button
            @click="reset">重置</el-button>
        <el-button type="primary" @click="config">提交</el-button>
      </div>
    </div>
</template>

<script lang="ts" setup>
  import EditTable from './components/edit.vue'
  import { ElMessage,ElMessageBox  } from 'element-plus'
  import {ref} from "vue";
  const table = ref()
  const column = [
    { name: 'title',
      label: '活动名称',
      width:160,
    },
    { name: 'state',
      label: '状态',
      options:[
        {
          value:-1,
          label:'全部'
        },
        {
          value:1,
          label:'未解决'
        },{
          value:0,
          label:'已解决'
        }],
      valueType:'select',
    },
    {
      name: 'decs',
      label: '描述',
      valueType:'input',
    },
    {
      name: 'created_at',
      label: '活动时间',
      valueType:'date',
    },
  ]

  let data = [
    {
      id: 6247418504,
      title: '活动名称一',
      readonly: '活动名称一',
      decs: '这个活动真好玩',
      state: 1,
      created_at: '2020-05-26T09:42:56Z',
      update_at: '2020-05-26T09:42:56Z',
    },
    {
      id: 6246921229,
      title: '活动名称二',
      readonly: '活动名称二',
      decs: '这个活动真好玩',
      state: 0,
      created_at: '2020-05-27T08:19:22Z',
      update_at: '2020-05-27T08:19:22Z',
    },
    {
      id: 6242991229,
      title: '活动名称三',
      readonly: '活动名称三',
      decs: '这个活动真好玩',
      state: 1,
      created_at: '2020-05-27T08:19:22Z',
      update_at: '2020-05-27T08:19:22Z',
    },
    {
      id: 6242981229,
      title: '活动名称四',
      readonly: '活动名称四',
      decs: '这个活动真好玩',
      state: 1,
      created_at: '2020-05-27T08:19:22Z',
      update_at: '2020-05-27T08:19:22Z',
    },
    {
      id: 62429122229,
      title: '活动名称五',
      readonly: '活动名称五',
      decs: '这个活动真好玩',
      state: 1,
      created_at: '2020-05-27T08:19:22Z',
      update_at: '2020-05-27T08:19:22Z',
    },
    {
      id: 62423391229,
      title: '活动名称六',
      readonly: '活动名称六',
      decs: '这个活动真好玩',
      state: 1,
      created_at: '2020-05-27T08:19:22Z',
      update_at: '2020-05-27T08:19:22Z',
    },
    {
      id: 623291229,
      title: '活动名称七',
      readonly: '活动名称五',
      decs: '这个活动真好玩',
      state: 1,
      created_at: '2020-05-27T08:19:22Z',
      update_at: '2020-05-27T08:19:22Z',
    },
    {
      id: 624291219,
      title: '活动名称八',
      readonly: '活动名称六',
      decs: '这个活动真好玩',
      state: 1,
      created_at: '2020-05-27T08:19:22Z',
      update_at: '2020-05-27T08:19:22Z',
    },
  ]

 let arrKeys =data.map(item=>item.id).filter(item=>![6247418504,6246921229].includes(item))
  const radio = ref('bottom')
  const list = ref(data)
  let editableKeys = ref(arrKeys)
  const dataSource = ref(data)
  const deleteAction = (row)=>{
    console.log('删除',row)
    ElMessage.success('点击删除')
  }
  const onChange = (val)=>{
    dataSource.value = val
  }
  const add = (row)=>{

  }
  const reset = (val)=>{
    ElMessage.success('重置成功')
    table.value.reset()
  }

  const config = ()=>{
    list.value = dataSource.value
    console.log('点击提交=========',dataSource.value)
    ElMessage.success('点击提交数据')
  }
</script>

<style lang="scss" scoped>
::v-deep(.el-divider--horizontal){
  margin: 10px 0;
}
</style>
