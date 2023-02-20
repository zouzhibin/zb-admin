<template>
  <div class="main-container">
    <el-scrollbar>
      <div class="menu-wrap">
        <div class="item-menu-wrap">

        </div>
      </div>
    </el-scrollbar>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, watch } from "vue";
import { useRoute, useRouter } from "vue-router";
import {usePermissionStore} from "@/store/modules/permission"
const PermissionStore = usePermissionStore()

const route = useRoute()

// 获取路由
const permission_routes = computed(() => PermissionStore.permission_routes)

</script>


<style lang="scss" scoped>
.menu-wrap{

  width: 100%;
  height: 50px;
  text-align: center;
  display: flex;
  cursor: pointer;
  position: relative;
  z-index: 1;
}
</style>
