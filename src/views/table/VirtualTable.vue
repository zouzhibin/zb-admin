<template>
  <div>
    <div>
      <el-button @click="loadList(50)">50条</el-button>
      <el-button @click="loadList(100)">100条</el-button>
      <el-button @click="loadList(1000)">1k条</el-button>
      <el-button @click="loadList(5000)">5k条</el-button>
      <el-button @click="loadList(10000)">1w条</el-button>
      <el-button @click="loadList(50000)">5w条</el-button>
      <el-button @click="loadList(100000)">10w条</el-button>
      <el-button @click="loadList(300000)">30w条</el-button>
    </div>
    <vxe-table
        border
        show-overflow
        show-header-overflow
        ref="xTable"
        height="600"
        :column-config="{resizable: true}"
        :loading="demo1.loading"
        :scroll-y="{mode: 'wheel'}">
      <vxe-column type="seq" width="100"  ></vxe-column>
      <vxe-column field="attr0" title="Attr0" width="200" fixed="left" sortable></vxe-column>
      <vxe-column field="attr1" title="Attr1" width="200"></vxe-column>
      <vxe-column field="attr2" title="Attr2" width="200"></vxe-column>
      <vxe-column field="attr3" title="Attr3" width="200"></vxe-column>
      <vxe-column field="attr4" title="Attr4" width="120"></vxe-column>
      <vxe-column field="attr5" title="Attr5" width="200"></vxe-column>
      <vxe-column field="attr6" title="Attr6" width="300" sortable></vxe-column>
      <vxe-column field="attr7" title="Attr7" width="200" sortable></vxe-column>
      <vxe-column field="attr8" title="Attr8" width="220"></vxe-column>
      <vxe-column field="attr9" title="Attr9" width="200"></vxe-column>
      <vxe-column field="attr10" title="Attr10" width="130"></vxe-column>
      <vxe-column field="attr11" title="Attr11" width="200"></vxe-column>
      <vxe-column field="attr12" title="Attr12" width="100"></vxe-column>
      <vxe-column field="attr13" title="Attr14" width="200"></vxe-column>
      <vxe-column field="attr14" title="Attr14" width="300"></vxe-column>
      <vxe-column field="attr15" title="Attr15" width="200"></vxe-column>
      <vxe-column field="attr16" title="Attr16" width="200"></vxe-column>
      <vxe-column field="attr17" title="Attr17" width="80"></vxe-column>
      <vxe-column field="attr18" title="Attr18" width="200"></vxe-column>
      <vxe-column field="attr19" title="Attr19" width="140"></vxe-column>
      <vxe-column field="attr20" title="Attr20" width="200"></vxe-column>
      <vxe-column field="attr21" title="Attr21" width="160"></vxe-column>
      <vxe-column field="attr22" title="Attr22" width="200"></vxe-column>
      <vxe-column field="attr23" title="Attr23" width="200"></vxe-column>
      <vxe-column field="attr24" title="Attr24" width="100" fixed="right"></vxe-column>
      <vxe-column field="attr25" title="Attr25" width="200" fixed="right"></vxe-column>
    </vxe-table>
  </div>
</template>
<script lang="ts" setup>
import { defineComponent, ref, onMounted, nextTick,reactive } from 'vue'
import { VXETable, VxeTableInstance } from 'vxe-table'
import XEUtils from 'xe-utils'
const dataList: any[] = []
const demo1 = reactive({
  loading: false,
  tableData: []
})
const mockList = (rowSize: number): Promise<any[]> => {
  return new Promise(resolve => {
    setTimeout(() => {
      const currSize = dataList.length
      if (currSize < rowSize) {
        for (let i = currSize; i < rowSize; i++) {
          dataList.push({
            checked: false,
            attr0: 'attr0_row_' + i,
            attr1: 'attr1_row_' + i,
            attr2: 'attr2_row_' + i,
            attr3: 'attr3_row_' + i,
            attr4: 'attr4_row_' + i,
            attr5: 'attr5_row_' + i,
            attr6: i,
            attr7: '' + i,
            attr8: 'attr8_row_' + i,
            attr9: 'attr9_row_' + i,
            attr10: 'attr10_row_' + i,
            attr11: 'attr11_row_' + i,
            attr12: 'attr12_row_' + i,
            attr13: 'attr13_row_' + i,
            attr14: 'attr14_row_' + i,
            attr15: 'attr15_row_' + i,
            attr16: 'attr16_row_' + i,
            attr19: 'attr19_row_' + i,
            attr20: 'attr20_row_' + i,
            attr24: 'attr24_row_' + i,
            attr25: 'attr25_row_' + i
          })
        }
      }
      const result = XEUtils.clone(dataList.slice(0, rowSize), true)
      resolve(result)
    }, 100)
  })
}


const xTable = ref<VxeTableInstance>()
const loadList = (rowSize: number) => {
  demo1.loading = true
  mockList(rowSize).then(data => {
    const startTime = Date.now()
    const $table = xTable.value
    // 使用函数式加载
    if ($table) {
      $table.reloadData(data).then(() => {
        VXETable.modal.message({ content: `渲染 ${rowSize} 行，用时 ${Date.now() - startTime}毫秒`, status: 'info' })
        demo1.loading = false
      })
    } else {
      demo1.loading = false
    }
  })
}

onMounted(() => {
  nextTick(() => {
    loadList(100)
  })
})
</script>
<style>

</style>