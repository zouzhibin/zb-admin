<template>
    <div class="app-container">
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

<script >
  import EditTable from './components/edit.vue'
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
    {
      id: 6242922222,
      title: '活动名称三',
      readonly: '活动名称三',
      decs: '这个活动真好玩',
      state: 1,
      created_at: '2020-05-27T08:19:22Z',
      update_at: '2020-05-27T08:19:22Z',
    },
    {
      id: 62425491229,
      title: '活动名称四',
      readonly: '活动名称四',
      decs: '这个活动真好玩',
      state: 1,
      created_at: '2020-05-27T08:19:22Z',
      update_at: '2020-05-27T08:19:22Z',
    },
    {
      id: 62429281229,
      title: '活动名称五',
      readonly: '活动名称五',
      decs: '这个活动真好玩',
      state: 1,
      created_at: '2020-05-27T08:19:22Z',
      update_at: '2020-05-27T08:19:22Z',
    },
    {
      id: 62429091229,
      title: '活动名称六',
      readonly: '活动名称六',
      decs: '这个活动真好玩',
      state: 1,
      created_at: '2020-05-27T08:19:22Z',
      update_at: '2020-05-27T08:19:22Z',
    },
    {
      id: 62421191229,
      title: '活动名称七',
      readonly: '活动名称五',
      decs: '这个活动真好玩',
      state: 1,
      created_at: '2020-05-27T08:19:22Z',
      update_at: '2020-05-27T08:19:22Z',
    },
    {
      id: 6242222291229,
      title: '活动名称八',
      readonly: '活动名称六',
      decs: '这个活动真好玩',
      state: 1,
      created_at: '2020-05-27T08:19:22Z',
      update_at: '2020-05-27T08:19:22Z',
    },
  ]
  export default {
    components:{
      EditTable
    },
    data(){
      return{
        dataSource:data,
        column,
        list:data,
        radio:'bottom',
        editableKeys:[]
      }
    },
    created(){
      let arrKeys = data.filter(item=>![624748504,624691229].includes(item.id)).map(item=>item.id)
      this.editableKeys = arrKeys
    },
    methods:{
      deleteAction(row){
        console.log('删除',row)
        this.$message.success('点击删除')
      },
      onChange(val){
       this.dataSource = val
      },
      add(){

      },
      reset(val){
        this.$message.success('重置成功')
        this.$refs.table.reset()
      },
      config(){
        this.list = this.dataSource
        console.log('点击提交=========',this.dataSource)
        this.$message.success('点击提交数据')
      }
    }
  }
</script>

<style lang="scss" scoped>
::v-deep{
  .el-divider--horizontal{
    margin: 10px 0;
  }
}
</style>
