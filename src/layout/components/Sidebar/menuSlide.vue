<template>
       <el-menu
               :default-active="activeMenu"
               active-text-color="#ffd04b"
               background-color="#304156"
               text-color="#fff"
               :mode="mode"
               :collapse-transition="false"
               class="el-menu-vertical-demo"
               :collapse="isCollapse"
       >
           <sidebar-item v-for="route in permission_routes" :key="route.path" :item="route" :base-path="route.path"/>
       </el-menu>
</template>

<script lang="ts" setup>
    import SidebarItem from './SidebarItem.vue'
    import logo from './Logo.vue'
    import {useRoute} from 'vue-router'
    import { useStore,mapGetters } from 'vuex' // useStore ===vue2.0中的this.$store
    import { ref,computed } from 'vue'

    // 在setup中获取store
    const store = useStore()
    const route = useRoute()

    // 获取路由
    const permission_routes = computed(()=>{
      console.log('permission_routes',store.state.permission.routes)
        return store.state.permission.routes
    })

    const activeMenu = computed(()=>{
        const { meta, path } = route
        // if set path, the sidebar will highlight the path you set
        if (meta.activeMenu) {
            return meta.activeMenu
        }
        return path
    })

    // 是否折叠
    const isCollapse = computed(()=>{
        return !store.state.app.isCollapse
    })

    // 横向
    const mode = computed(()=>{
        return store.state.setting.mode
    })
</script>
