<template>
  <div class="tags-view-container">
    <scroll-pane ref="rollPane" class="tags-view-wrapper" >
      <router-link
          v-for="tag in visitedViews"
          :ref="setTagRef"
          :class="isActive(tag)?'active':''"
          :key="tag.path"
          :to="{ path: tag.path, query: tag.query, fullPath: tag.fullPath }"
          tag="span"
          class="tags-view-item"
      >
        <div class="tags-inner">
          <span >{{ tag.title }}</span>
          <el-icon v-if="!isAffix(tag)" @click.prevent.stop="closeSelectedTag(tag)"
                   class="tag-icon"
          ><circle-close-filled /></el-icon>
        </div>
      </router-link>
    </scroll-pane>

  </div>
</template>

<script lang="ts" setup>
  import {computed, nextTick, onMounted, reactive, ref, watch} from "vue";
  import ScrollPane from "./ScrollPane.vue";
  import { useStore } from 'vuex'
  import {useRoute,useRouter} from 'vue-router'
  const path = require('path')
  const store = useStore()
  const route = useRoute()
  const router = useRouter()
  const routes = computed(()=>{
    return store.state.permission.routes
  })
  const visitedViews = computed(()=>{
    return store.state.tagsView.visitedViews
  })
  let obj = new WeakMap()

  let affixTags = ref([])
  const tags = ref([])
  const setTagRef = (el)=>{
    if(el){
      if(!obj.get(el)){
        tags.value.push(el)
      }
      obj.set(el,el)
    }

  }

    const rollPane = ref()

  function filterAffixTags(routes, basePath = '/') {
    let tags = []
    routes.forEach(route => {
      if (route.meta && route.meta.affix) {
        const tagPath = path.resolve(basePath, route.path)
        tags.push({
          fullPath: tagPath,
          path: tagPath,
          name: route.name,
          meta: { ...route.meta }
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

  const initTags = ()=>{
    // let routesNew = routes.value.filter(item=>item.path!=='/login')
    let routesNew = routes.value
    let affixTag = affixTags.value = filterAffixTags(routesNew)
    for (const tag of affixTag) {
      if (tag.name) {
        store.dispatch('tagsView/addVisitedView', tag)
      }
    }
  }
  function handleScroll() {
    closeMenu()
  }

  const isActive = (rou)=> {
    return rou.path === route.path
  }
  const isAffix = (tag)=>{
      return tag.meta && tag.meta.affix
  }
  const addTags = ()=> {
    const { name } = route
    if(name==='Login'){
      return
    }
    if (name) {
      store.dispatch('tagsView/addView', route)
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

  const closeSelectedTag = (view)=>{
    store.dispatch('tagsView/delView', view).then(({ visitedViews }) => {
      if (isActive(view)) {
        toLastView(visitedViews, view)
      }
    })
  }

  function moveToCurrentTag(){
    nextTick(() => {
      for (const tag of tags.value) {
        if (tag.to.path === route.path) {
          rollPane.value.moveToTarget(tag,tags.value)
          if (tag.to.fullPath !== route.fullPath) {
            store.dispatch('tagsView/updateVisitedView', route)
          }
          break
        }
      }
    })
  }


  onMounted(()=>{
    initTags()
    addTags()

    watch(route,()=>{
      addTags()
      moveToCurrentTag()
    })

    router.beforeEach(async (to, from, next)=>{


      if((from.fullPath==='/error/404'||from.fullPath==='/error/401')&&to.fullPath==="/home") {
        let whiteList = ['/error/404','/error/401']
        await store.dispatch('tagsView/removeView', whiteList)
      }
      next()
    })
  })


</script>

<style lang="scss" scoped>
  .tags-view-item {
    text-decoration: none;
    display: inline-block;
    position: relative;
    cursor: pointer;
    height: 26px;
    line-height: 26px;
    border: 1px solid #d8dce5;
    color: #495060;
    background: #fff;
    font-size: 12px;
    padding: 0 10px;
    box-sizing: border-box;
    margin-left: 5px;
    margin-top: 4px;
    /*display: flex;*/
    /*align-items: center;*/
    &:first-of-type {
      margin-left: 15px;
    }
    &:last-of-type {
      margin-right: 15px;
    }
    .tags-inner{
      display: flex;
      align-items: center;
    }
    .tag-icon{
      margin-left: 6px;
    }
    .tag-icon{
      display: none;
    }
    &:hover{
      .tag-icon{
        display: block;

      }
    }
    &.active .tag-icon{
      display: block;
    }
    &.active {
      background-color: #42b983;
      color: #fff;
      border-color: #42b983;
    /*  &::before {*/
    /*    content: '';*/
    /*    background: #fff;*/
    /*    display: inline-block;*/
    /*    width: 8px;*/
    /*    height: 8px;*/
    /*    border-radius: 50%;*/
    /*    position: relative;*/
    /*    margin-right: 2px;*/
    /*  }*/
    }
  }
</style>
