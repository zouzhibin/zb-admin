<template>
  <el-upload
      class="upload-demo"
      drag
      :before-upload="beforeUploadAction"
      type="file" accept=".xlsx, .xls"
  >
    <el-icon class="el-icon--upload"><upload-filled /></el-icon>
    <div class="el-upload__text">
      拖拽上传 <em>或者点击上传 Excel</em>
    </div>

  </el-upload>
</template>

<script setup lang="ts">
  const ExcelJS = require("exceljs");
  import { UploadFilled } from '@element-plus/icons-vue'
  import {ElMessage} from "element-plus";
  const beforeUploadAction = (file, fileLi)=>{
    return new Promise((resolve, reject) => {

      const reader = new FileReader()
      reader.onload = async e => {
        const data = e.target.result
        console.log('file========',data)
        const workbook = new ExcelJS.Workbook();
        try {
          let res = await workbook.xlsx.load(data)
          const sheets =
              res._worksheets &&
              res._worksheets.filter((item) => typeof item !== "undefined");
              const table = [];

              sheets.forEach((sheet) => {
                sheet._rows.forEach((row) => {
                  const tableRow = {
                    position: "",
                    val: "",
                  };
                  row._cells.forEach((cell) => {
                    tableRow.position = cell._address;
                    tableRow.val = cell._value.model.value || "";
                  });
                  table.push(tableRow);
                });
              });
          console.log('==table=======',sheets,table)

        }catch (e){
          ElMessage.error('解析失败')
        }

        // console.log('======',workbook)

      }
      reader.readAsArrayBuffer(file)
    })
  }
</script>
