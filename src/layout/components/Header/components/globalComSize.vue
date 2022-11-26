<template>
  <el-dropdown trigger="hover" @command="setAssemblySize">
    <svg-icon class-name="size-icon header-icon" icon-class="size" style="font-size: 20px;cursor: pointer"/>
    <template #dropdown>
      <el-dropdown-menu>
        <el-dropdown-item v-for="item in assemblySizeList" :key="item" :disabled="globalComSize === item" :command="item">
          {{ assemblySizeListCh[item] }}
        </el-dropdown-item>
      </el-dropdown-menu>
    </template>
  </el-dropdown>
</template>

<script setup lang="ts">
import { reactive, computed } from "vue";
import {useSettingStore} from "@/store/modules/setting"
const SettingStore = useSettingStore()

const globalComSize = computed(():string=>SettingStore.themeConfig.globalComSize)

const assemblySizeListCh = reactive<{ [key: string]: any }>({
  default: "默认",
  large: "大型",
  small: "小型"
});

const assemblySizeList = reactive<string[]>(["default", "large", "small"]);

const setAssemblySize = (item: string) => {
  if (globalComSize.value === item) return;
  SettingStore.setThemeConfig({key:'globalComSize', val:item})
};
</script>

<style scoped lang="scss">
.transverseMenu {
  .size-icon {
    color: white;
  }
}
</style>
