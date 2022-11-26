<template>
  <el-dropdown trigger="hover">
    <el-button size="small" type="primary">
      <span>更多</span>
      <el-icon class="el-icon--right"><arrow-down /></el-icon>
    </el-button>
    <template #dropdown>
      <el-dropdown-menu>
        <el-dropdown-item @click="refresh"><el-icon :size="14"><Refresh /></el-icon> 刷新当页</el-dropdown-item>
        <el-dropdown-item @click="closeCurrentTab"><el-icon :size="14"><FolderRemove/></el-icon> 关闭当前</el-dropdown-item>
        <el-dropdown-item @click="closeOtherTab"><el-icon :size="14"><Close /></el-icon>关闭其他</el-dropdown-item>
        <el-dropdown-item @click="closeAllTab"><el-icon :size="14"><FolderDelete /></el-icon>关闭所有</el-dropdown-item>
      </el-dropdown-menu>
    </template>
  </el-dropdown>
</template>
<script lang="ts" setup>
import {computed} from "vue";
import {useSettingStore} from "@/store/modules/setting"
import {useTagsViewStore} from "@/store/modules/tagsView"
import { useRouter,useRoute } from 'vue-router'
const router = useRouter()
const route = useRoute()
const SettingStore = useSettingStore()
const TagsViewStore = useTagsViewStore()
const visitedViews = computed(() => TagsViewStore.visitedViews)
const refresh = () => {
  SettingStore.setReload()
}
// 关闭当前
const closeCurrentTab = (event)=>{
  TagsViewStore.toLastView(route.path)
  TagsViewStore.delView(route.path)

}
// 关闭其他
const closeOtherTab= async ()=>{
  TagsViewStore.delOtherViews(route.path)
}

// 关闭所有 去首页
const closeAllTab = async ()=>{
  await TagsViewStore.delAllViews()
  TagsViewStore.goHome()
}
</script>
<style lang="scss" scoped>
.more{
  background-color: $primaryColor;
  color: white;
  .tags-view-item{
    display: flex;
    align-items: center;
  }
}
</style>
