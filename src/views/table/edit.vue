<template>
    <edit-table
        :columns="column"
        :data="list"
        @add="add"
        @del="deleteAction"
    />
</template>

<script lang="ts" setup>
  import EditTable from './components/edit.vue'
  import {ref} from "vue";

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
    // { name: 'operation',slot:true,fixed:'right',width:100 }
  ]

  let data = [
    {
      id: 624748504,
      title: '活动名称一',
      readonly: '活动名称一',
      decs: '这个活动真好玩',
      state: 1,
      created_at: '2020-05-26T09:42:56Z',
      update_at: '2020-05-26T09:42:56Z',
    },
    {
      id: 624691229,
      title: '活动名称二',
      readonly: '活动名称二',
      decs: '这个活动真好玩',
      state: 0,
      created_at: '2020-05-27T08:19:22Z',
      update_at: '2020-05-27T08:19:22Z',
    },
  ]

  const list = ref(data)
  const deleteAction = (row)=>{
    list.value = list.value.filter(item=>item.id!==row.id)

  }
  const add = (row)=>{
    list.value.push(row)

    console.log('list.value',list.value,row)

  }
</script>

<style>

</style>
