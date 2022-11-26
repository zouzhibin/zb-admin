<template>
  <div class="m-tags-view">
    <div class="tags-view">
      <el-tabs
          v-model="activeTabsValue"
          type="card"
          @tab-click="tabClick"
          @tab-remove="removeTab"
      >
        <el-tab-pane
            v-for="item in visitedViews"
            :key="item.path"
            :path="item.path"
            :label="item.title"
            :name="item.path"
            :closable="!(item.meta&&item.meta.affix)"
        >
          <template #label>
            <el-icon class="tabs-icon" v-if="item.icon">
              <component :is="item.icon"></component>
            </el-icon>
            {{ item.title }}
          </template>
        </el-tab-pane>
      </el-tabs>
    </div>
    <div class="right-btn">
      <MoreButton/>
    </div>
  </div>
</template>
<script lang="ts" setup>
import {computed, watch, ref, onMounted} from "vue";
import { useRoute, useRouter } from "vue-router";
import { TabsPaneContext } from "element-plus";
import MoreButton from './components/MoreButton'
import path from 'path-browserify'
import {useTagsViewStore} from "@/store/modules/tagsView"
import {usePermissionStore} from "@/store/modules/permission"

const route = useRoute()
const router = useRouter()
const TagsViewStore = useTagsViewStore()
const PermissionStore = usePermissionStore()
const visitedViews = computed(() => TagsViewStore.visitedViews)
const routes = computed(() => PermissionStore.routes)

const addTags = () => {
  const { name } = route
  if (name === 'Login') {
    return
  }
  if (name) {
    TagsViewStore.addView(route)
  }
  return false
}
let affixTags = ref([])
function filterAffixTags(routes, basePath = '/') {
  let tags = []
  routes.forEach((route) => {
    if (route.meta && route.meta.affix) {
      const tagPath = path.resolve(basePath, route.path)
      tags.push({
        fullPath: tagPath,
        path: tagPath,
        name: route.name,
        meta: { ...route.meta },
      })
    }
    if (route.children) {
      const tempTags = filterAffixTags(route.children, route.path)
      if (tempTags.length >= 1) {
        tags = [...tags, ...tempTags]
      }
    }
  })
  return tags
}
const initTags = () => {
  let routesNew = routes.value
  let affixTag = (affixTags.value = filterAffixTags(routesNew))
  for (const tag of affixTag) {
    if (tag.name) {
      TagsViewStore.addVisitedView(tag)
    }
  }
}
onMounted(()=>{
  initTags()
  addTags()
})
watch(route, () => {
  addTags()
})
let tabIndex = 2
const activeTabsValue = computed({
  get: () => {
    return TagsViewStore.activeTabsValue;
  },
  set: val => {
    TagsViewStore.setTabsMenuValue(val);
  }
});
function toLastView(activeTabPath) {
  let index = visitedViews.value.findIndex(item=>item.path===activeTabPath)
  const nextTab = visitedViews.value[index + 1] || visitedViews.value[index - 1];
  if (!nextTab) return;
  router.push(nextTab.path);
  TagsViewStore.addVisitedView(nextTab)
}
const tabClick = (tabItem: TabsPaneContext) => {
  let path = tabItem.props.name as string;
  router.push(path);
};

const isActive = (path) => {
  return path === route.path
}
const removeTab = async (activeTabPath: string) => {
  if (isActive(activeTabPath)) {
    toLastView(activeTabPath)
  }
  await TagsViewStore.delView(activeTabPath)
}
</script>
<style lang="scss" scoped>
.m-tags-view{
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-left: 10px;
  padding-right: 10px;
  background: white;
  .right-btn{
    height: 100%;
    flex-shrink: 0;
  }
}
.tags-view {
  flex: 1;
  overflow: hidden;
  box-sizing: border-box;
}

.tags-view{
  .el-tabs--card :deep(.el-tabs__header){
    box-sizing: border-box;
    height: 40px;
    padding: 0 10px;
    margin: 0;
  }
  :deep(.el-tabs){
    .el-tabs__nav {
      border: none;
    }
    .el-tabs__header .el-tabs__item {
      border: none;
      color: #cccccc;
    }
    .el-tabs__header .el-tabs__item.is-active {
      color: $primaryColor;
      border-bottom:2px solid $primaryColor;
    }
  }
}
</style>
