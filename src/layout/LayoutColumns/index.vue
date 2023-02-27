<template>
  <div class="main-columns">
    <div class="layout-columns-aside">
      <el-scrollbar>
        <div class="menu-wrap">
          <div
            class="item-menu-wrap"
            :class="{
              'active-menu':activeCurrentMenu===item.path
            }"
            v-for="item in menusRoutes"
            :key="item.path"
            @click="handleChangeMenu(item)"
          >
            <el-icon :size="20">
              <component :is="item?.meta?.icon"></component>
            </el-icon>
            <span class="title">{{ item?.meta?.title }}</span>
          </div>
        </div>
      </el-scrollbar>
    </div>

    <div class="layout-columns-sub" :style="{ width: isCollapse ? '60px' : '210px' }">
      <el-scrollbar style="height: 100%">
        <el-menu
          :collapse="isCollapse"
          :default-active="activeMenu"
          :unique-opened="SettingStore.themeConfig.uniqueOpened"
          :collapse-transition="false"
          class="menu-columns"
        >
          <SubItem
            v-for="route in subMenus"
            :key="route.path"
            :item="route"
            :base-path="basePath"
          />
        </el-menu>
      </el-scrollbar>
    </div>

    <div class="container">
      <div class="layout-header">
        <div class="header-tool">
          <HeaderToolLeft/>
          <HeaderToolRight/>
        </div>
        <TagsView v-if="themeConfig.showTag"/>
      </div>
      <Main/>
    </div>


  </div>
</template>

<script setup lang="ts">
import { ref, computed, watch } from "vue";
import { useRoute, useRouter } from "vue-router";
import {usePermissionStore} from "@/store/modules/permission"
import { useSettingStore } from "@/store/modules/setting";
import SubItem from '../components/SubMenu/SubItem.vue'
import TagsView from '../components/TagsView/index.vue'
const PermissionStore = usePermissionStore()
const SettingStore = useSettingStore()
const route = useRoute()
const router = useRouter();
import HeaderToolRight from '../components/Header/ToolRight.vue'
import HeaderToolLeft from '../components/Header/ToolLeft.vue'
import Main from '../components/Main/index.vue'
// 获取路由
const permission_routes = computed(() => PermissionStore.permission_routes)

// 获取路由
const menusRoutes = computed(()=>{
  return PermissionStore.permission_routes.filter(item=>!item.hidden)
})

const activeCurrentMenu = ref('')
// 主题配置
const themeConfig = computed(() =>SettingStore.themeConfig)
const isCollapse = computed(() =>!SettingStore.isCollapse)
const activeMenu = computed(() => {
  const { meta, path } = route
  if (meta.activeMenu) {
    return meta.activeMenu
  }
  return path
})
const basePath = ref<string>('/')
const subMenus = ref([])

watch(()=>[route],()=>{
    if (!menusRoutes.value.length) return;
    const [firstMenu] = route.matched
    activeCurrentMenu.value = firstMenu.path;
    let menuItem = menusRoutes.value.find(item=>firstMenu.path === item.path)
    if(menuItem&&menuItem.children?.length) {
      subMenus.value = menuItem.children
    }else {
      subMenus.value = []
    }
    basePath.value = firstMenu.path
  console.log('======触发========触发======',subMenus.value)
},{
  deep: true,
  immediate:true
})


const handleChangeMenu = (item)=>{
  if (item.children?.length) {
    subMenus.value = item.children
  }else {
    subMenus.value = [];
  }
  router.push(item.path);

}

console.log('permission_routes',menusRoutes.value,)

</script>


<style lang="scss" scoped>
.layout-columns-aside{
  flex-shrink: 0;
  width: 80px;
  min-height: 100vh;
  background-color: #304156;
  .menu-wrap{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    .item-menu-wrap{
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      height: 70px;
      width: 70px;
      cursor: pointer;
      transition: all .3s ease;
    }
    .active-menu{
      background: #1890ff;
      border-radius: 5px;
    }
    .title{
      color: #e5eaf3;
    }
    .el-icon{
      color: #e5eaf3;
    }
  }
}
.main-columns{
  display: flex;
  flex-direction: row!important;
}
.layout-columns-sub{
  flex-shrink: 0;
  width: 200px;
  min-height: 100vh;
  box-sizing: border-box;

  flex-direction: column;
  overflow: hidden;
  transition: all 0.3s ease;

  border-right: 1px solid #eee;
  ::v-deep(.el-menu){
    border-right: none;
    min-height: 100vh;
  }
}
.container{
  flex: 1;
  overflow: hidden;
  display: flex;
  flex-direction: column;
}
.layout-header{
  background: white;
  transition: width 0.28s;
  flex-shrink: 0;
  box-sizing: border-box;
  box-shadow: 0 1px 4px rgb(0 21 41 / 8%);
  .header-tool{
    height: 50px;
    width: 100%;
    border-bottom: 1px solid #eee;
    display: flex;
    align-items: center;
    padding: 0 10px 0 0;
    box-sizing: border-box;
    justify-content: space-between;
  }
}

</style>
