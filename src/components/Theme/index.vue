<template>
  <div>
    <div class="m-setting-fix">
      <div class="item">
        <div class="item-child" @click="operator(1)">
          <el-icon size="30" color="#3698fd" style="margin-bottom: 8px"><brush /></el-icon>
          主题配置
        </div>
        <div class="item-child item-child2" @click="operator(2)">
          <el-icon size="30" color="#3698fd" style="margin-bottom: 8px"><Link /></el-icon>
          源码拷贝
        </div>
      </div>
    </div>
    <el-drawer
        v-model="drawer" title="主题配置" size="300px">
      <div class="theme-item">
        <label>导航栏布局</label>
        <el-select
            v-model="layout"
            placeholder="请选择"
            style="width: 150px"
            @change="(val) => changeSwitch('mode',val)"
        >
          <el-option label="纵向" value="vertical"></el-option>
          <el-option label="横向" value="horizontal"></el-option>
        </el-select>
      </div>
      <div class="theme-item">
        <label>主题颜色</label>
        <el-color-picker v-model="primary" :predefine="predefineColor" @change="changePrimary" />
      </div>
      <div class="theme-item">
        <label>暗黑模式</label>
        <switch-dark></switch-dark>
      </div>
      <div class="theme-item">
        <label>灰色模式</label>
        <el-switch v-model="gray" @change="(val) => changeGrayWeak('gray',val)" />
      </div>
      <div class="theme-item">
        <label>色弱模式</label>
        <el-switch v-model="weak" @change="(val) => changeGrayWeak('weak',val)" />
      </div>
      <div class="theme-item">
        <label>标签栏</label>
        <el-switch v-model="showTag" @change="(val) => changeSwitch('showTag',val)" />
      </div>
      <div class="theme-item">
        <label>侧边栏 Logo</label>
        <el-switch v-model="showLogo" @change="(val) => changeSwitch('showLogo',val)" />
      </div>
      <div class="theme-item">
        <label>保持一个子菜单的展开</label>
        <el-switch v-model="uniqueOpened" @change="(val) => changeSwitch('uniqueOpened',val)" />
      </div>
      <div class="theme-item">
        <label>固定header</label>
        <el-switch v-model="fixedHeader" @change="(val) => changeSwitch('fixedHeader',val)" />
      </div>
    </el-drawer>
  </div>
</template>

<script lang="ts" setup>
  import {computed, ref,watch} from 'vue'
  import {ElMessage} from "element-plus";
  import {openLoading,closeLoading} from "@/utils/element"
  import SwitchDark from '@/components/SwitchDark/index.vue'
  import {PRIMARY_COLOR} from "@/config/index";
  import {useSettingStore} from "@/store/modules/setting"

  const SettingStore = useSettingStore()
  const layout = ref(SettingStore.themeConfig.mode)
  const showTag = ref(SettingStore.themeConfig.showTag)
  const showLogo = ref(SettingStore.themeConfig.showLogo)
  const uniqueOpened = ref(SettingStore.themeConfig.uniqueOpened)
  const primary = ref(SettingStore.themeConfig.primary)
  const fixedHeader = ref(SettingStore.themeConfig.fixedHeader)
  const gray = ref(SettingStore.themeConfig.gray)
  const weak = ref(SettingStore.themeConfig.weak)

  const drawer = computed({
    get() {
      return SettingStore.themeConfig.showSetting;
    },
    set() {
      changeSwitch('showSetting',!SettingStore.themeConfig.showSetting)
    }
  })

  // 预定义主题颜色
  const predefineColor = [
    '#409EFF', '#1890ff', '#304156','#212121','#11a983', '#13c2c2', '#6959CD', '#f5222d'
  ];

  const operator = (type) => {
    switch (type) {
      case 1:
        drawer.value = true
        return
      case 2:
        window.open('https://github.com/zouzhibin/vue-admin-perfect')
        return
    }
  }

  // 进行配置
  const changeSwitch = (key,val) => {
    SettingStore.setThemeConfig({key, val})
    if(key==='mode'){
      openLoading()
      setTimeout(()=>{
        closeLoading()
      },600)
    }
  }

  // 监听布局变化
  watch(
      () => layout.value,
      () => {
        const body = document.body as HTMLElement;
        body.setAttribute("class", `layout-${layout.value}`);
      },
      { immediate: true }
  );

  // 修改主题颜色
  const changePrimary = (val)=>{
    if (!val) {
      primary.value = val = PRIMARY_COLOR;
      ElMessage({ type: "success", message: `主题颜色已重置为 ${PRIMARY_COLOR}` });
    }
    document.documentElement.style.setProperty("--el-color-primary", val);
    changeSwitch('primary',val)
  }

  // 修改灰色模式
  const changeGrayWeak = (type,val)=>{
    const body = document.documentElement as HTMLElement;
    if (!val) return body.setAttribute("style", "");
    if (type === "gray") body.setAttribute("style", "filter: grayscale(1)");
    if (type === "weak") body.setAttribute("style", "filter: invert(80%)");
    changeSwitch(type,val)
  }

</script>

<style lang="scss" scoped>
::v-deep(.el-drawer__header){
  border-bottom: 1px solid #ebeef5;
  padding: 15px 20px 14px;
  margin-bottom: 0;
}
  .m-setting-fix {
    position: fixed;
    top: 50%;
    right: 0;
    z-index: 999;
    padding: 10px 0 0 0;
    margin: 0;
    text-align: center;
    cursor: pointer;
    background: #fff;
    border: 1px solid #dcdfe6;
    border-top-left-radius: 5.5px;
    border-bottom-left-radius: 5.5px;
    box-shadow: 0 0 50px 0 rgb(82 63 105 / 15%);
    transform: translateY(-50%);
    .item {
      display: flex;
      flex-direction: column;
      align-items: center;

      justify-content: center;
      padding: 0 8px 10px 10px;
      margin: 0;
      list-style: none;
    }
    .item-child {
      color: #3698fd;
      width: 60px;
      height: 60px;
      /*padding-top: 10px;*/
      text-align: center;
      display: flex;
      flex-direction: column;
      background: #f6f8f9;
      align-items: center;
      justify-content: center;
      border-radius: 5.5px;
      font-size: 12px;
      background: #ebf5ff;
      transition: color 0.15s ease, background-color 0.15s ease, border-color 0.15s ease,
        box-shadow 0.15s ease;
    }
    .item-child2 {
      margin-top: 10px;
      color: #b37feb;
      background: #f7f2fd;
      transition: color 0.15s ease, background-color 0.15s ease, border-color 0.15s ease,
        box-shadow 0.15s ease;
    }
  }

:deep(.el-drawer__title) {
    font-weight: bold;
    color: black;
  }
  .theme-item {
    width: 100%;
    display: flex;
    margin-bottom: 15px;
    align-items: center;
    font-size: 14px;
    color: black;
    justify-content: space-between;

  }
</style>
