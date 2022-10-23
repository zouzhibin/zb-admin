<template>
  <el-dropdown trigger="hover">
    <el-button size="small" type="primary">
      <span>{{ $t("tagsView.more") }}</span>
      <el-icon class="el-icon--right"><arrow-down /></el-icon>
    </el-button>
    <template #dropdown>
      <el-dropdown-menu>
        <el-dropdown-item @click="refresh">{{ $t("tagsView.refresh") }}</el-dropdown-item>
        <el-dropdown-item @click="closeCurrentTab">{{ $t("tagsView.closeCurrent") }}</el-dropdown-item>
        <el-dropdown-item @click="closeOtherTab">{{ $t("tagsView.closeOther") }}</el-dropdown-item>
        <el-dropdown-item @click="closeAllTab">{{ $t("tagsView.closeAll") }}</el-dropdown-item>
      </el-dropdown-menu>
    </template>
  </el-dropdown>
</template>
<script lang="ts" setup>
import {computed} from "vue";
import {useSettingStore} from "@/store/modules/setting"
import {useTagsViewStore} from "@/store/modules/tagsView"

const SettingStore = useSettingStore()
const TagsViewStore = useTagsViewStore()
const visitedViews = computed(() => TagsViewStore.visitedViews)
const refresh = () => {
  SettingStore.setReload()
}
// 关闭当前
const closeCurrentTab = (event)=>{
  closeSelectedTag(event,route)
}
// 关闭其他
const closeOtherTab= async ()=>{
  const { name } = route
  for(let item of visitedViews.value){
    if(item.name!==name){
      await closeSelectedTag(null,item)
    }
  }
}



// 关闭所有 去首页
const closeAllTab = async ()=>{
  let visitedViews = await TagsViewStore.delAllViews()
  await TagsViewStore.goHome()
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
