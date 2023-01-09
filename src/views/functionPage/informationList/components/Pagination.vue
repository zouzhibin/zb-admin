<template>
  <div class="pagination">
    <el-pagination
        v-model:currentPage="currentPage"
        :page-size="10"
        background
        layout="total, sizes, prev, pager, next, jumper"
        :total="1000"
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
    />
  </div>
</template>
<script lang="ts" setup>
import {ref} from "vue";

const currentPage = ref(1)

const handleSizeChange = (val: number) => {
  console.log(`${val} items per page`)
}

const handleCurrentChange = (val: number) => {
  currentPage.value = val
}

</script>

<style lang="scss" scoped>
.pagination{
  width: 100%;
 display: flex;
  justify-content: center;
}
</style>
