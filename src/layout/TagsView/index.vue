<template>
  <div class="tags-wrap-container">
    <div class="tags-view" ref="scrollContainer">
      <better-scroll :options="{ scrollX: true, scrollY: false }" ref="bsScroll">
        <div class="tags-scroll-inner">
          <div
            v-for="tag in visitedViews"
            :ref="setTagRef"
            :path="tag.path"
            :data-id="tag.path"
            :fullPath="tag.fullPath"
            :to="{ path: tag.path, query: tag.query, fullPath: tag.fullPath }"
            :key="tag.path"
            class="item-tag-wrap"
            :class="isActive(tag) ? 'active' : ''"
            @click="routerGo(tag)"
          >
            <div class="tags-view-item">{{ tag.title }}</div>
            <el-icon @click.prevent.stop="(e) => closeSelectedTag(e, tag)" class="tag-icon">
              <circle-close-filled
            /></el-icon>
          </div>
        </div>
      </better-scroll>
    </div>
    <el-dropdown trigger="click">
        <el-button class="el-dropdown-link" type="primary">
          更多 <el-icon class="el-icon--right"><arrow-down /></el-icon>
        </el-button>
      <template #dropdown>
        <el-dropdown-menu>
          <el-dropdown-item @click="refresh">刷新当页</el-dropdown-item>
          <el-dropdown-item @click="closeCurrentTab">关闭当前</el-dropdown-item>
          <el-dropdown-item @click="closeOtherTab">关闭其他</el-dropdown-item>
          <el-dropdown-item @click="closeAllTab">关闭所有</el-dropdown-item>
        </el-dropdown-menu>
      </template>
    </el-dropdown>
  </div>
</template>

<script lang="ts" setup>
  import { computed, nextTick, onMounted, reactive, ref, watch } from 'vue'
  import betterScroll from './betterScroll.vue'
  import { useRoute, useRouter } from 'vue-router'

  import {useSettingStore} from "@/store/modules/setting"
  import {useTagsViewStore} from "@/store/modules/tagsView"
  import {usePermissionStore} from "@/store/modules/permission"

  import path from 'path-browserify'
  const route = useRoute()
  const router = useRouter()
  const SettingStore = useSettingStore()
  const TagsViewStore = useTagsViewStore()
  const PermissionStore = usePermissionStore()

  const refresh = () => {
    SettingStore.setReload()
  }

  const routes = computed(() => PermissionStore.routes)

  const visitedViews = computed(() => TagsViewStore.visitedViews)

  const bsScroll = ref<Expose.BetterScroll>()
  let obj = new WeakMap()

  let affixTags = ref([])
  const tags = ref(new Map())
  // 多个ref 添加tag
  const setTagRef = (el) => {
    if (el) {
      if (!obj.get(el)) {
        tags.value.set(el.dataset['id'], el)
      }
      obj.set(el, el)
    }
  }

  const rollPane = ref()
  const scrollContainer = ref()

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

  const isActive = (rou) => {
    return rou.path === route.path
  }
  const isAffix = (tag) => {
    return tag.meta && tag.meta.affix
  }
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

  function toLastView(visitedViews, view) {
    const latestView = visitedViews.slice(-1)[0]
    if (latestView) {
      router.push(latestView.fullPath)
    } else {
      if (view.name === 'home') {
        router.replace({ path: '/redirect' + view.fullPath })
      } else {
        router.push('/')
      }
    }
  }

  const closeSelectedTag = async (event, view) => {
    if (tags.value.get(view.path)) {
      tags.value.delete(view.path)
    }
    let { visitedViews } = await TagsViewStore.delView(view)
    if (isActive(view)) {
      toLastView(visitedViews, view)
    }
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
  const closeAllTab = ()=>{
    if(route.fullPath!=='/home'){
      TagsViewStore.delAllViews()
    }
    router.push('/')
  }

  const routerGo = (tag) => {
    router.push({
      path: tag.path,
      query: tag.query,
    })
  }

  function handleScrollAction(currentTag) {
    const scrollContainerRect = scrollContainer.value.getBoundingClientRect()
    let { left: currx, width: currentWidth } = currentTag.getBoundingClientRect()
    const clientX = currx + currentWidth / 2
    const currentX = clientX - scrollContainerRect.left
    const deltaX = currentX - scrollContainerRect.width / 2
    if (bsScroll.value) {
      const { maxScrollX, x: leftX } = bsScroll.value.instance
      const rightX = maxScrollX - leftX
      const update = deltaX > 0 ? Math.max(-deltaX, rightX) : Math.min(-deltaX, -leftX)
      bsScroll.value?.instance.scrollBy(update, 0, 300)
    }
  }

  function moveToCurrentTag() {
    nextTick(() => {
      for (const [key, tag] of tags.value) {
        let path = tag.attributes.path.value
        if (path === route.path) {
          let fullPath = tag.attributes.fullPath.value
          // 移动
          handleScrollAction(tag, tags.value)
          if (fullPath !== route.fullPath) {
            TagsViewStore.updateVisitedView(route)
          }
          break
        }
      }
    })
  }

  onMounted(() => {
    initTags()
    addTags()
    nextTick(() => {
      setTimeout(() => {
        moveToCurrentTag()
      }, 50)
    })

    watch(route, () => {
      addTags()
      nextTick(() => {
        setTimeout(() => {
          moveToCurrentTag()
        }, 100)
      })
    })

    router.beforeEach(async (to, from, next) => {
      if (
        (from.fullPath === '/error/404' || from.fullPath === '/error/401') &&
        to.fullPath === '/home'
      ) {
        let whiteList = ['/error/404', '/error/401']
        await TagsViewStore.removeView(whiteList)
      }
      next()
    })
  })
</script>

<style lang="scss" scoped>
  .tags-wrap-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-left: 10px;
    .tags-view {
      background: white;
      flex: 1;
      box-sizing: border-box;
      overflow: hidden;
    }
    .refresh {
      //margin-left: 20px;
      cursor: pointer;
      font-size: 22px;
      flex-shrink: 0;
      display: flex;
      align-items: center;
      justify-content: center;
      .refresh-inner {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 50px;
        height: 100%;
      }
      //box-shadow: 0 3px 6px -4px #0000001f, 0 6px 16px #00000014, 0 9px 28px 8px #0000000d;
    }
    //padding-right: 10px;
  }
  .item-tag-wrap {
    position: relative;
    display: inline-flex;
    align-items: center;
    padding: 6px 10px;
    font-size: 14px;
    cursor: pointer;
    margin-right: 10px;
    border: 1px solid #d8dce5;
    &.active .tag-icon {
      display: block;
    }
    &.active {
      background-color: $primaryColor;
      color: #fff;
      border-color: $primaryColor;
    }
  }
  .item-tag-wrap:hover {
    border-color: $primaryColor;
  }
  .tags-scroll-inner {
    display: flex;
    flex-wrap: nowrap;
  }
  .tag-icon {
    margin-left: 6px;
  }
  .tags-view-item {
    position: relative;
    z-index: 2;
    white-space: nowrap;
    .tags-inner {
      display: flex;
      align-items: center;
      white-space: nowrap;
    }
  }
</style>
