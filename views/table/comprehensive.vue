<template>
  <div class="app-container">
    <comprehensive-table
            @selection-change="selectionChange"
            :columns="column" :data="data" @reset="reset" @onSubmit="onSubmit">
      <template v-slot:btn>
       <div style="display: flex;justify-content: flex-end">
         <el-button type="primary" @click="add"><el-icon><plus /></el-icon> 添加</el-button>
         <el-button type="danger" @click="batchDelete"><el-icon><delete /></el-icon>删除</el-button>
       </div>
      </template>
      <template v-slot:sex="scope">{{scope.row.sex?'男':'女'}}</template>
      <template v-slot:operation="scope">
        <el-button
            type="primary"
            size="small"
            icon="Edit"
            @click="edit(scope.row)"
        >
          编辑
        </el-button>
        <el-button
                @click="del(scope.row)"
            type="danger"
            size="small"
            icon="Delete"
        >
          删除
        </el-button>
      </template>
    </comprehensive-table>

    <el-dialog
        :visible.sync="dialogVisible"
            :title="title"
            width="50%"
    >
      <el-form
              ref="ruleFormRef"
              :model="ruleForm"
              :rules="rules"
              label-width="120px"
              class="demo-ruleForm"
              :size="formSize"
      >
        <el-form-item label="活动名称" prop="name">
          <el-input v-model="ruleForm.name" />
        </el-form-item>
        <el-form-item label="性别" prop="sex">
          <el-radio-group v-model="ruleForm.sex">
            <el-radio :label="1" >男</el-radio>
            <el-radio :label="0" >女</el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item label="价格" prop="price">
          <el-input v-model="ruleForm.price" />
        </el-form-item>
      </el-form>
      <template #footer>
      <span class="dialog-footer">
        <el-button @click="dialogVisible = false">取消</el-button>
        <el-button type="primary" @click="handleClose('ruleFormRef')"
        >确定</el-button
        >
      </span>
      </template>
    </el-dialog>

  </div>
</template>
<script>
var dayjs = require('dayjs')
  import ComprehensiveTable from './components/comprehensive.vue'
  const data = []
  for(let i=0;i<100;i++){
    data.push({
      date: '2016-05-02',
      name: '王五'+i,
      price: 1+i,
      province: '上海',
      admin:"admin",
      sex:i%2?1:0,
      checked:true,
      id:i+1,
      age:0,
      city: '普陀区',
      address: '上海市普上海',
      zip: 200333
    })
  }
  const column = [
    { type:'selection', width:60 },
    { name: 'id', label: 'id',width:80, },
    { name: 'name',
      label: '姓名',
      inSearch:true,
      valueType:'input',
      width:80
    },
    { name: 'age',
      label: '年龄',
      align:'right',
    },
    { name: 'sex',
      label: '性别',
      slot:true,
      inSearch:true,
      options:[{
        value:1,
        label:'男'
      },{
        value:0,
        label:'女'
      }],
      valueType:'select',
    },
    {
      name: 'price',
      label: '价格',
      inSearch:true,
      valueType:'input',
    },
    { name: 'admin', label: '账号', inSearch:true,
      valueType:'input',},
    { name: 'address', label: '地址', inSearch:true,
      valueType:'input', },
    { name: 'date', label: '日期',sorter:true, inSearch:true,
      valueType:'input', },
    { name: 'province', label: '省份' },
    { name: 'city', label: '城市' },
    { name: 'zip', label: '邮编' },
    { name: 'operation',slot:true,fixed:'right',width:200 }
  ]
  export default {
    components:{
      ComprehensiveTable
    },
    data(){
      return{
        data,
        column,
        formSize:'default',
        ruleForm:{
          name: '',
          sex: null,
          price:null,
        },
        rules:{
          name: [
            { required: true, message: '请输入活动名称活动区域', trigger: 'blur' },
            { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' },
          ],
          price:[
            { required: true, message: '请输入价格', trigger: 'blur' },
          ],
          sex: [
            {
              required: true,
              message: '请选择性别',
              trigger: 'change',
            },
          ],
        },
        dialogVisible:false,
        title:'新增',
        rowObj:{},
        selectObj:[],
      }
    },
    methods:{
      async handleClose(formName){
        this.$refs[formName].validate((valid) => {
          if (valid) {
            if (valid) {
              let obj = {
                id:Date.now(),
                ...this.ruleForm,
                age:0,
                city: '普陀区',
                address: '上海市普上海',
                zip: 200333,
                province: '上海',
                admin:"admin",
                date: dayjs().format('YYYY-MM-DD')
              }
              if(this.title==='新增'){
                this.data = [obj,...this.data]
                this.$message.success('添加成功')
              }else {
                this.data.forEach(item=>{
                  if(item.id===this.rowObj.id){
                    item.name=obj.name
                    item.sex=obj.sex
                    item.price=obj.price
                  }
                })
              }
              this.dialogVisible = false
              console.log('submit!',obj)
            } else {
              console.log('error submit!', fields)
            }
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
      add(){
        this.title='新增'
        this.dialogVisible = true
      },
      batchDelete(){
        if(!this.selectObj.length){
          return this.$message.error('未选中任何行')
        }
        this.$confirm(
            '你确定要删除选中项吗?',
            '温馨提示',
            {
              confirmButtonText: '确定',
              cancelButtonText: '取消',
              type: 'warning',
              draggable: true,
            }
        )
            .then(() => {

              this.$message.success('模拟删除成功')
              this.data = this.data.concat([])
            })
            .catch(() => {

            })
      },
      selectionChange(val){
        this.selectObj = val
      },
      edit(row){
        this.title='编辑'
        this.rowObj = row
        this.dialogVisible = true
        this.ruleForm.name = row.name
        this.ruleForm.sex = row.sex
        this.ruleForm.price = row.price
      },
      del(row){
        this.$confirm(
            '你确定要删除当前项吗?',
            '温馨提示',
            {
              confirmButtonText: '确定',
              cancelButtonText: '取消',
              type: 'warning',
              draggable: true,
            }
        )
            .then(() => {
              this.data = this.data.filter(item=>item.id!==row.id)
              this.$message.success('删除成功')
            })
            .catch(() => {

            })
      },
      reset(){
        this.$message.success('触发重置方法')
      },
      onSubmit(){
        this.$message.success('触发查询方法')
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
</style>
