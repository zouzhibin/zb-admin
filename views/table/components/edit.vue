<template>
  <div class="m-edit-table">
    <div style="margin-top: 15px;margin-bottom: 15px" v-if="mode!=='hide'&&mode!=='bottom'">
      <el-button style="width: 100%" @click="add">
        <el-icon style="margin-right: 4px"><plus /></el-icon> 添加一行数据</el-button>
    </div>
    <el-table :data="transData" style="width: 100%" row-key="id" border>
      <template v-for="item,index in columns" >
        <el-table-column v-if="item.type" :type="item.type"  :width="item.width" :align="item.align" :fixed="item.fixed" :label="item.label"/>
        <el-table-column
            v-else
            :prop="item.name" :width="item.width" :align="item.align" :fixed="item.fixed" :label="item.label">
          <template #default="scope">
            <template v-if="!item.slot">
              <template v-if="item.readonly">
                {{ scope.row[item.name] }}
              </template>
              <template v-else-if="item.valueType==='select'">
                <el-select
                    clearable
                    :placeholder="`请选择`" v-model="scope.row[item.name]" v-if="scope.row.edit">
                  <el-option

                      v-for="ite in item.options"
                      :key="ite.value"
                      :label="ite.label"
                      :value="ite.value"
                  />
                </el-select>

                <span v-else>{{filterOption(item,scope)}}</span>

              </template>

              <template v-else-if="item.valueType==='date'">
                <el-date-picker
                    v-model="scope.row[item.name]"
                    type="date"
                    clearable
                    placeholder="请选择"
                    v-if="scope.row.edit"
                />
                <span v-else>{{scope.row[item.name]||'--'}}</span>
              </template>
              <template v-else>
                <el-input clearable
                          placeholder="请输入" v-model="scope.row[item.name]" v-if="scope.row.edit"></el-input>
                <span v-else>{{scope.row[item.name]||'--'}}</span>
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
              type="success"
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
              @click="edit(scope.row)"
          >
            编辑
          </el-button>
          <el-popover
              placement="top"
              width="160"
              v-model="scope.row.visible">
            <p style="display: flex;align-items: center;margin-bottom: 10px">
              <i class="el-icon-warning" style="margin-right: 10px;color: #faad14"></i>
              删除此行？</p>
            <div style="text-align: right; margin: 0">
              <el-button size="small"  @click.stop="cancelVisible(scope.row)"
              >取消</el-button
              >
              <el-button size="small" type="primary" @click.stop="deleteConfigAction(scope.row)"
              >确定</el-button
              >
            </div>
            <el-button slot="reference" @click.stop="deleteAction(scope.row)" type="danger" size="small">删除</el-button>
          </el-popover>
          <el-button
              v-if="scope.row.edit"
              type="primary"
              size="small"
              icon="Edit"
              @click.stop="cancelEdit(scope.row)"
          >
            取消
          </el-button>
        </template>
      </el-table-column>
    </el-table>
    <div style="margin-top: 15px" v-if="mode!=='hide'&&mode!=='top'">
      <el-button style="width: 100%" @click="add">
        <el-icon style="margin-right: 4px"><plus /></el-icon> 添加一行数据</el-button>
    </div>
  </div>
</template>
<script>
import {deepObjClone} from '@/utils/index'
  export default {
    props:{
      columns:{
        type:Array,
        default:()=>[]
      },
      data:{
        type:Array,
        default:()=>[]
      },
      editableKeys:{
        type:Array,
        default:()=>[]
      },
      mode:{
        type:String,
        default:'bottom'
      }
    },
    data(){
      return{
        obj:{},
        transData:[],
        visible:false,
        listLoading:false,
        formInline:{
          user: '',
          region: '',
        }
      }
    },
    watch:{
      'data':{
        handler(val){
          let arr = deepObjClone(val)
          // 存储一个临时变量
          for(let item of arr){
            if(this.editableKeys.includes(item.id)){
              item.edit = true
            }
            for(let attr in item){
              let temp  = `${attr}te__mp`
              item[temp] = item[attr]
            }
          }
          // // 转换数据
          this.transData = arr

        },
        deep:true,
        immediate:true
      }
    },
    created(){

      let obj={}
      for(let item of this.columns){
        this.data.forEach(it=>{
          if(!obj[item.name]){
            obj[item.name] = null
          }
        })
      }
      this.obj = obj
    },
    methods:{
      cancelVisible(row){
        this.$set(row,'visible',false)
      },
      getData(){
        let arr = deepObjClone(this.transData)
        for(let item of arr){
          for(let attr in item){
            if(attr.includes('te__mp')){
              delete item[attr]
            }
          }
        }
        this.$emit('onChange',arr)
      },
      reset(){
        this.transData = this.data
        this.getData()
      },
      handleSizeChange(val){
        console.log(`${val} items per page`)
      },
      // 保存
      confirmEdit(row){
        this.$set(row,'edit',false)
        for(let attr in row){
          if(attr.includes('te__mp')){
            row[(attr)] = row[(attr.replace('te__mp',''))]
          }
        }
        this.getData()
      },
      // 取消
      cancelEdit (row){
        this.$set(row,'edit',false)
        for(let attr in row){
          if(!attr.includes('te__mp')){
            if(attr!=='edit'){
              row[attr] = row[(attr+'te__mp')]
            }
          }
        }
      },
      edit(row){
        this.$set(row,'edit',!row.edit)
      },
      deleteProver(row){
        row.visible = true
        this.$set(row,'visible',true)
        let obj1 = Object.assign({},row)
        obj1.visible = true
      },
      deleteConfigAction(row){
        this.$set(row,'visible',false)
        this.transData = this.transData.filter((item)=>item.id!==row.id)
        this.$emit('del',row)
      },
      deleteAction (row){

      },
      add(){
        let id = ~~(Math.random() * 1000000).toFixed(0)
        let obj1 = Object.assign({},this.obj,{
          id:id,
          edit:true,
          visible:false,
        })

        for(let attr in obj1){
          let temp  = `${attr}te__mp`
          obj1[temp] = obj1[attr]
        }

        if(this.mode==='bottom'){
          this.transData.push(obj1)
        }
        if(this.mode==='top'){
          this.transData.unshift(obj1)
        }
      },
      filterOption(item,scope){
        let obj = item.options.find(ite=>ite.value===scope.row[item.name])
        if(obj){
          return obj.label
        }
        return '--'
      }
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
