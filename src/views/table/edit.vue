<template>
    <edit-table :columns="column"/>
</template>

<script lang="ts" setup>
import EditTable from './components/edit.vue'

const column = [
  { name: 'id', label: 'id',width:80, },
  { name: 'name',
    label: '活动名称',
    width:80
  },
  { name: 'status',
    label: '状态',
  },
  {
    name: 'decs',
    label: '描述',
    slot:true,
    inSearch:true,
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
    name: 'created_at',
    label: '活动时间',
    inSearch:true,
    valueType:'input',
  },
  { name: 'operation',slot:true,fixed:'right',width:200 }
]


</script>

<style>

</style>
