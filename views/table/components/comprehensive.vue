<template>
  <div class="inline-edit-table">
    <el-form :inline="true" :model="formInline" class="demo-form-inline"  ref="ruleFormRef">
      <template v-for="item,index in formSearchData" >
          <el-form-item :label="item.label" v-show="isExpand?isExpand:index<2" :key="index">
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
        <el-button  @click="reset('ruleFormRef')">重置</el-button>
        <el-button type="primary" @click="onSubmit">查询</el-button>
        <el-button type="text" @click="isExpand=!isExpand">{{ isExpand?'合并':'展开' }}<el-icon>
          <arrow-down v-if="!isExpand"/>
          <arrow-up  v-else/>
        </el-icon></el-button>
      </el-form-item>
    </el-form>
    <div style="margin-bottom: 15px">
      <slot name="btn"></slot>
    </div>
    <el-table
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
          :current-page="currentPage1"
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
<script>

export default {
  props:{
    columns:{
      type:Array,
      default:()=>[]
    },
    data:{
      type:Array,
      default:()=>[]
    }
  },
  data(){
    return{
      currentPage1:1,
      isExpand:true,
      listLoading:false,
      formSearchData:[],
      formInline:{}
    }
  },
  computed:{
    list(){
      let arr = JSON.parse(JSON.stringify(this.data))
      return arr.splice((this.currentPage1-1)*10,10)
    }
  },
  created(){
    let obj = {}
    let search = []
    for(let item of this.columns){
      if(item.inSearch){
        obj[item.name] = null
      }
      if(item.inSearch){
        search.push(item)
      }
    }
    this.formSearchData = search
    this.formInline = obj
  },
  methods:{
    handleSizeChange(val){
      console.log(`${val} items per page`)
    },
    handleCurrentChange(val){
      console.log(`current page: ${val}`)
      this.currentPage1 = val
    },
    confirmEdit(row){
      row.edit = false
    },
    cancelEdit(row){
      row.edit = false
    },
    onSubmit () {
      console.log('submit!',this.formInline)
      this.$emit('onSubmit',this.formInline)
    },
    reset(){
      this.formSearchData.forEach(item=>{
        this.formInline[item.name] = null
      })
      this.$emit('reset')
    },
  }
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
