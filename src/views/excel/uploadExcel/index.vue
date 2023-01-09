<template>
  <PageWrapLayout class="m-upload-excel">
    <el-upload
      style="width: 100%"
      class="upload-demo"
      drag
      action="/"
      :before-upload="beforeUploadAction"
      type="file"
      accept=".xlsx, .xls"
    >
      <el-icon class="el-icon--upload"><upload-filled /></el-icon>
      <div class="el-upload__text"> 拖拽上传 <em>或者点击上传 Excel</em> </div>
    </el-upload>
    <div>
      <el-table
        :data="tableData"
        border
        highlight-current-row
        style="width: 100%; margin-top: 20px"
      >
        <el-table-column v-for="item of tableHeader" :prop="item" :label="item" :key="item">
        </el-table-column>
      </el-table>
    </div>
  </PageWrapLayout>
</template>

<script setup lang="ts">
  import { ref } from 'vue'

  import ExcelJS from 'exceljs'
  import { UploadFilled } from '@element-plus/icons-vue'
  import { ElMessage } from 'element-plus'
  const tableData = ref([])
  const tableHeader = ref([])
  const beforeUploadAction = (file, fileLi) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader()
      reader.onload = async (e) => {
        const data = e.target.result
        const workbook = new ExcelJS.Workbook()
        try {
          let res = await workbook.xlsx.load(data)
          const sheets =
            res._worksheets && res._worksheets.filter((item) => typeof item !== 'undefined')
          const table = []
          let headers = []
          sheets.forEach((sheet) => {
            sheet._rows.forEach((row, index) => {
              if (index === 0) {
                row.values.forEach((it) => {
                  headers.push(it)
                })
              } else {
                let obj = {}
                let arr = []
                row.values.forEach((it) => {
                  arr.push(it)
                })
                headers.forEach((ite, i) => {
                  obj[ite] = arr[i]
                })
                table.push(obj)
              }
              // const tableRow = {
              //   position: "",
              //   val: "",
              // };
              // row._cells.forEach((cell) => {
              //   tableRow.position = cell._address;
              //   tableRow.val = cell._value.model.value || "";
              // });
            })
          })
          tableData.value = table
          tableHeader.value = headers
        } catch (e) {
          ElMessage.error('解析失败')
        }
      }
      reader.readAsArrayBuffer(file)
    })
  }
</script>

<style lang="scss">
  .m-upload-excel {
    .el-upload {
      width: 100%;
    }
    .el-upload-dragger {
      width: 100%;
    }
  }
</style>
