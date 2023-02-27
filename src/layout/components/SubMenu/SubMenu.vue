<template>
  <template v-for="subItem in menuList" :key="subItem.path">
    <el-sub-menu v-if="subItem.children && subItem.children.length > 0" :index="subItem.path">
      <template #title>
        <el-icon>
          <component :is="subItem.meta.icon"></component>
        </el-icon>
        <span>{{ subItem.meta.title }}</span>
      </template>
      <SubMenu :menuList="subItem.children" :basePath="`${basePath}/${subItem.path}`"/>
    </el-sub-menu>
    <el-menu-item v-else-if="!subItem.hidden" :index="subItem.path" @click="handleClickMenu(subItem)">
      <el-icon>
        <component :is="subItem.meta.icon"></component>
      </el-icon>
      <template #title>
        <span>{{ subItem.meta.title }}</span>
      </template>
    </el-menu-item>
  </template>
</template>

<script setup lang="ts">
import { useRouter } from "vue-router";
import { isExternal } from '@/utils/validate.js'
let props = defineProps({
  menuList:{
    type:Array,
    default:()=>[]
  },
  basePath: {
    type: String,
    default: '',
  },
})

const router = useRouter();
const handleClickMenu = (subItem) => {
  console.log('isExternal(subItem.path)',subItem.path,isExternal(subItem.path))
  if (isExternal(subItem.path)) return window.open(subItem.path, "_blank");
  let path = props.basePath+'/'+subItem.path
  router.push(path);
};
</script>
