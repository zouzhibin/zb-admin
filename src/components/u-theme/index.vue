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
    <el-drawer v-model="drawer" title="主题配置" size="300px">
      <div class="theme-item">
        <label>标签</label>
        <el-color-picker v-model="themeConfig.primary" :predefine="colorList" @change="changePrimary" />
      </div>
      <div class="theme-item">
        <label>菜单布局</label>
        <el-select
          v-model="layout"
          placeholder="请选择"
          style="width: 150px"
          @change="(val) => changeSwitch(val, 2)"
        >
          <el-option label="纵向" value="vertical"></el-option>
          <el-option label="横向" value="horizontal"></el-option>
        </el-select>
      </div>
      <div class="theme-item">
        <label>标签</label>
        <el-switch v-model="tag" @change="(val) => changeSwitch(val, 1)" />
      </div>
    </el-drawer>
  </div>
</template>

<script lang="ts" setup>
import {computed, ref} from 'vue'
  const drawer = ref(false)
  const tag = ref(true)
  const layout = ref('vertical')
  import { useStore } from 'vuex'

  const store = useStore()
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

  const themeConfig = computed(()=>store.state.setting.themeConfig)

  const changeSwitch = (val, type) => {
    switch (type) {
      // 是否显示tag
      case 1:
        store.dispatch('setting/setTag', val)
        return
      case 2:
        store.dispatch('setting/setMode', val)
        return
    }
  }
</script>

<style lang="scss" scoped>
  .m-setting-fix {
    position: fixed;
    top: 50%;
    right: 0;
    z-index: 1997;
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

  ::v-deep(.el-drawer__title) {
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
