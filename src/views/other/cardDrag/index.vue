<template>
  <div class="m-card-drag">
    <el-card class="header">
      <el-button @click="sorter" type="primary" >还原</el-button>
      <el-button @click="getDataAction" type="primary" style="margin-left: 20px">获取数据</el-button>
    </el-card>

    <div class="footer">
      <draggable
          class="card grid-container"
          v-model="dragList"
          item-key="id"
          animation="300"
          chosenClass="chosenClass"
          @change="onMoveCallback"
          forceFallback="true"
      >
        <template #item="{ element }">
          <div class="item-group-item" >
            <el-icon
                :size="30"
                :color="element.color"
                class="item-icon"
            >
              <component :is="element.icon"></component>
            </el-icon>
            <div style="margin-top: 10px">按住拖拽排序</div>
          </div>
        </template>
      </draggable>
    </div>
  </div>
</template>
<script lang="ts" setup>
  import draggable from 'vuedraggable'
  import {ElMessage, ElMessageBox} from "element-plus";
  import { ref} from 'vue'
  import { getColor } from '@/utils/index'
  import {iconData} from './data'

  const dragList = ref([])
  const drag = ref(false)
  // 随机生成颜色
  for (let i = 0; i < 20; i++) {
    dragList.value.push({
      id: i + 1,
      icon: iconData[i],
      color: getColor(),
    })
  }
  const sorter = () => {
    dragList.value = dragList.value.sort((a, b) => a.id - b.id)
    ElMessage.success(`还原成功`)
  }
  const onMoveCallback = (val) => {
    console.log('拖动前的索引 :' + val.moved.newIndex)
    console.log('拖动后的索引 :' + val.moved.oldIndex)
  }
  // 查看最新的数据
  const getDataAction = () => {
    ElMessage.success(`获取数据：${JSON.stringify(dragList.value)}`)
  }
</script>

<style lang="scss" scoped>
@import "./index";
</style>
