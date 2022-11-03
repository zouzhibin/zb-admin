<template>
  <div class="app-container">
    <div class="header">
      <el-form :inline="true" :model="formInline1" >
        <el-form-item label="姓名">
          <el-input v-model="formInline1.username" placeholder="请输入姓名" />
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="onSubmit">搜索</el-button>
        </el-form-item>
      </el-form>
    </div>
    <div class="footer">

      <el-table
          :data="list"
          style="width: 100%" :border="true" v-loading="loading">
        <el-table-column prop="id" width="60" label="id" align="center"/>
        <el-table-column prop="name" label="姓名" min-width="200px" align="center">
          <template #default="scope">
            <template v-if="scope.row.edit">
              <div style="display: flex; align-items: center">
                <el-input v-model="scope.row.name" size="small" />
                <el-button
                  size="small"
                  icon="Refresh"
                  type="warning"
                  @click="cancelEdit(scope.row)"
                >
                  取消
                </el-button>
              </div>
            </template>
            <template v-else>{{ scope.row.name }}</template>
          </template>
        </el-table-column>
        <el-table-column prop="age" label="年龄" align="center"/>
        <el-table-column prop="sex" label="性别" align="center">
          <template #default="scope">
            {{ scope.row.sex ? '男' : '女' }}
          </template>
        </el-table-column>
        <el-table-column prop="price" label="价格" align="center"/>
        <el-table-column prop="admin" label="账号" align="center"/>
        <el-table-column prop="address"
                         :show-overflow-tooltip="true"
                         label="地址" width="180" align="center"/>
        <el-table-column prop="date" label="日期" width="180" align="center"/>
        <el-table-column prop="province" label="省份" width="120" align="center"/>
        <el-table-column prop="city" label="城市" align="center"/>
        <el-table-column prop="operator" label="操作" width="180px" fixed="right" align="center">
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
              @click="scope.row.edit = !scope.row.edit"
            >
              编辑
            </el-button>

            <el-button type="danger" size="small" icon="Delete" @click="deleteAction(scope.row)">
              删除
            </el-button>
          </template>
        </el-table-column>
      </el-table>
      <div style="width: 100%; display: flex; justify-content: center; padding-top: 20px">
        <el-pagination
          v-model:currentPage="currentPage1"
          :page-size="10"
          background
          layout="total, sizes, prev, pager, next, jumper"
          :total="transData.length"
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
        />
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup name="inline-table">
  import { computed, ref } from 'vue'
  import { ElMessage, ElMessageBox } from 'element-plus'
  const data = []
  for (let i = 0; i < 100; i++) {
    data.push({
      date: '2016-05-02',
      name: '王五' + i,
      price: 1 + i,
      province: '上海',
      admin: 'admin',
      sex: i % 2 ? 1 : 0,
      checked: true,
      id: i + 1,
      img: 'https://img1.baidu.com/it/u=300787145,1214060415&fm=253&fmt=auto&app=138&f=JPEG?w=800&h=500',
      age: 0,
      city: '普陀区',
      address: `上海市普陀区金沙江路 222${i} 弄`,
      zip: 200333,
    })
  }

  const currentPage1 = ref(1)
  const handleSizeChange = (val: number) => {
    console.log(`${val} items per page`)
  }
  const handleCurrentChange = (val: number) => {
    console.log(`current page: ${val}`)
    currentPage1.value = val
  }

  const transData = ref(data)
  const loading = ref(false)

  const list = computed(() => {
    let arr = JSON.parse(JSON.stringify(transData.value))
    return arr.splice((currentPage1.value - 1) * 10, 10)
  })


  const confirmEdit = (row) => {
    row.edit = false
  }

  const cancelEdit = (row) => {
    row.edit = false
  }

  import { reactive } from 'vue'

  const formInline1 = reactive({
    username: '',
  })

  const onSubmit = () => {
    console.log('submit!')
    loading.value = true
    setTimeout(() => {
      loading.value = false
    }, 500)
  }

  const deleteAction = (row) => {
    ElMessageBox.confirm('你确定要删除当前项吗?', '温馨提示', {
      confirmButtonText: '确定',
      cancelButtonText: '取消',
      type: 'warning',
      draggable: true,
    })
      .then(() => {
        transData.value = transData.value.filter((item) => item.id !== row.id)
        ElMessage.success('删除成功')
      })
      .catch(() => {})
  }
</script>

<style scoped lang="scss">
.header{
  display: flex;
  padding: 16px 16px 0px 16px;
  margin-bottom: 16px;
  border-radius: 4px;
  background: white;
  box-shadow: 0 0 12px rgb(0 0 0 / 5%);
}
.footer{
  flex: 1;
  display: flex;
  padding: 16px;
  flex-direction: column;
  border-radius: 4px;
  overflow: hidden;
  background: white;
  box-shadow: 0 0 12px rgb(0 0 0 / 5%);
}
</style>
