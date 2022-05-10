
<template>
  <div class="page_search">
    <el-button type="primary" size="small">新增</el-button>

    <div class="search">
      <el-input
          v-model="search"
          placeholder="请输入名称"
          size="small"
          class="input-with-select"
      >
        <template #append>
          <el-button icon="el-icon-search"></el-button>
        </template>
      </el-input>
    </div>
    <el-button type="primary" class="search" icon="el-icon-share" @click="exportExcel">导出</el-button>
  </div>
</template>

<script>
import { defineComponent, ref } from "vue";
import Excel from "exceljs";

export default {
  setup() {
    const search = ref("");

    const downloadBlob=(arrayList,type,fileName)=>{
      var blob=new Blob(arrayList,{type:type});
      var a = document.createElement('a');  //创建a标签用于下载
      a.download = fileName;
      a.href = URL.createObjectURL(blob);
      document.getElementsByTagName("body")[0].appendChild(a);
      a.click();
      document.getElementsByTagName("body")[0].removeChild(a);
    };

    const exportExcel=async()=>{
      let workbook = new Excel.Workbook();
      let worksheet = workbook.addWorksheet('报表-威尔森',{views: [{showGridLines: true}]});
      let alignObj={alignment:{vertical:'middle',horizontal:'center'}};
      let columns=[{header:"",key:"A",style:alignObj},
        {header:"",key:"B",width:12,style:alignObj},
        {header:"",key:"C",style:alignObj},
        {header:"",key:"D",style:alignObj}];
      worksheet.columns = columns;

      // 开始添加数据
      let data=[
        {A:"COD",B:'',C:"氨氮",D:''},
        {A:"进水",B:"出水",C:"进水",D:"出水"},
        {A:1,B:2,C:3,D:4},
        {A:11,B:2,C:3,D:4},
        {A:1,B:22,C:3,D:4}
      ];
      for(let i in data) {
        worksheet.addRow(data[i]).commit();
      }

      worksheet.mergeCells('A2:B2');
      worksheet.mergeCells('C2:D2');

      worksheet.getRow(2).border={top: {style:'thin'},left: {style:'thin'},bottom: {style:'thin'},right: {style:'thin'}}

      //await worksheet.commit();

      // write to a new buffer
      const buffer = await workbook.xlsx.writeBuffer();
      //console.log(buffer);
      downloadBlob([buffer],"application/octet-stream","data.xlsx");
    };

    return {
      search,exportExcel,
    };
  },
};
</script>

<style scoped>
.page_search {
  margin: 10px;
  display: flex;
  align-items: center;
}
.search {
  margin-left: 10px;
  width: 200px;
}
</style>
