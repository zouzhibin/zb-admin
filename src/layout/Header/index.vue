<template>
  <div
    class="m-layout-header"
    :style="{ left: `${mode === 'horizontal' ? 0 : isCollapse ? '60' : '210'}px` }"
  >
    <div
      class="header"
      :class="{
        transverseMenu: mode === 'horizontal',
      }"
    >
      <u-menu v-if="mode === 'horizontal'" />
      <div class="left" v-if="mode === 'vertical'">
        <div>
          <el-icon class="icon" v-if="isCollapse" @click="handleCollapse"><expand /></el-icon>
          <el-icon class="icon" v-else @click="handleCollapse"><fold /></el-icon>
        </div>
        <u-hamburger />
      </div>
      <div class="right">
        <language class="right-item-menu"/>

        <global-com-size class="right-item-menu"/>

        <u-header-search class="right-item-menu"/>

        <u-info class="right-item-menu"/>

        <u-screen-full class="right-item-menu"/>

        <u-setting class="right-item-menu"/>

        <el-dropdown @command="commandAction">
          <span class="el-dropdown-link">
            <el-avatar :icon="UserFilled" :size="30" style="margin-right: 6px" />{{
              userInfo.username
            }}
            <el-icon class="el-icon--right">
              <arrow-down />
            </el-icon>
          </span>
          <template #dropdown>
            <el-dropdown-menu>
              <el-dropdown-item :command="1">退出登录</el-dropdown-item>
              <el-dropdown-item :command="2">修改密码</el-dropdown-item>
            </el-dropdown-menu>
          </template>
        </el-dropdown>
      </div>
    </div>
    <tag-views v-if="showTag" />
    <personal ref="person" />
  </div>
</template>

<script lang="ts" setup>
  import { UserFilled } from '@element-plus/icons-vue'
  import Personal from './components/Personal.vue'
  import TagViews from '../TagsView/index.vue'
  import GlobalComSize from './components/globalComSize.vue'
  import Language from './components/Language.vue'
  import UHamburger from '@/components/u-Hamburger/index.vue'
  import USetting from './components/Setting.vue'
  import UScreenFull from '@/components/u-screenfull/index.vue'
  import UInfo from '@/components/u-info/index.vue'
  import UHeaderSearch from '@/components/u-headerSearch/index.vue'
  import UMenu from '../Sidebar/components/Menu.vue'
  import { computed, ref } from 'vue'
  import { useRouter } from 'vue-router'
  import { ElMessageBox, ElMessage } from 'element-plus'
  import {useSettingStore} from "@/store/modules/setting"
  import {useUserStore} from "@/store/modules/user"
  import {usePermissionStore} from "@/store/modules/permission"
  import {useTagsViewStore} from "@/store/modules/tagsView"

  const person = ref()
  const router = useRouter()
  const SettingStore = useSettingStore()
  const UserStore = useUserStore()
  const PermissionStore = usePermissionStore()
  const TagsViewStore = useTagsViewStore()

  const isCollapse = computed(() =>!SettingStore.isCollapse)
  // menu 布局
  const mode = computed(() => SettingStore.themeConfig.mode)
  // 显示 tag
  const showTag = computed(() =>SettingStore.themeConfig.showTag)
  // 用户信息
  const userInfo = computed(() => UserStore.userInfo)

  const logOut = async () => {
    ElMessageBox.confirm('确定退出登录吗？', '退出登录', {
      confirmButtonText: '确定',
      cancelButtonText: '取消',
      type: 'warning',
    })
      .then(async () => {
        try {
          await UserStore.logout()
          router.push({ path: '/login' })
          PermissionStore.clearRoutes()
          TagsViewStore.clearVisitedView()
        } catch (e) {}
      })
      .catch(() => {})
  }

  const commandAction = (key: number) => {
    switch (key) {
      case 1:
        logOut()
        break
      case 2:
        person.value.show()
        break
    }
  }
  const handleCollapse = () => {
    SettingStore.setCollapse(isCollapse.value)
  }
</script>

<style lang="scss" scoped>
  .mobile {
    .m-layout-header {
      left: 0 !important;
    }
  }
  .icon {
    font-size: 24px;
    cursor: pointer;
  }
  .header {
    height: 60px;
    width: 100%;
    display: flex;
    align-items: center;
    padding: 0 10px;
    box-sizing: border-box;
    justify-content: space-between;
    .left {
      display: flex;
      align-items: center;
    }
    .right {
      display: flex;
      align-items: center;
      .right-item-menu{
        margin-right: 22px;
      }
    }
  }
  .m-layout-header {
    position: fixed;
    top: 0;
    background: white;
    left: 0;
    z-index: 9;
    right: 0;
    transition: left 0.3s;
    flex-shrink: 0;
    box-sizing: border-box;
    box-shadow: 0 1px 4px rgb(0 21 41 / 8%);
  }
  .el-dropdown {
    display: flex;
    height: 100%;
    align-items: center;
  }
  .el-dropdown-link {
    cursor: pointer;
    color: var(--el-color-primary);
    display: flex;
    align-items: center;
  }
  .transverseMenu{
    display: flex;
    .el-menu{
      overflow: hidden;
    }
    .right{
      display: flex;
      justify-content: flex-end;
      min-width:300px ;
      flex-shrink: 0;
    }
  }
</style>
