
<template>
  <el-dropdown trigger="hover" @command="setLanguage">
    <svg-icon class-name="size-icon" icon-class="language" style="font-size: 22px;cursor: pointer"/>
    <template #dropdown>
      <el-dropdown-menu>
        <el-dropdown-menu>
          <el-dropdown-item :disabled="language && language === 'zh'" command="zh">简体中文</el-dropdown-item>
          <el-dropdown-item :disabled="language === 'en'" command="en">English</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown-menu>
    </template>
  </el-dropdown>
</template>

<script lang="ts" setup>
import {useSettingStore} from "@/store/modules/setting"
import { useI18n } from "vue-i18n";
import {computed, reactive} from "vue";

const SettingStore = useSettingStore()
const i18n = useI18n();
const language = computed(():string=>SettingStore.themeConfig.language)

const setLanguage = (val)=>{
  i18n.locale.value = val;
  SettingStore.setThemeConfig({key:'language', val})
}

</script>

<style lang="scss" scoped>
.m-setting {
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.3s;
  .item-info-pop {
    display: flex;
    align-items: center;
  }
  .bell{
    color: black;
  }
  .item-child {
    display: flex;
    align-items: center;
    font-size: 13px;
  }
}
.transverseMenu {
  .size-icon {
    color: white;
  }
}


</style>
