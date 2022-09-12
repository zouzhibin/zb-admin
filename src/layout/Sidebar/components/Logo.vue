<template>
  <div class="sidebar-logo-container" >
    <transition name="sidebarLogoFade">
      <router-link v-if="isCollapse" key="collapse" class="sidebar-logo-link" to="/">
        <img src="@/assets/logo.png" class="sidebar-logo">
      </router-link>
      <router-link v-else key="expand" class="sidebar-logo-link" to="/">
        <img src="@/assets/logo.png" class="sidebar-logo">
        <h1 class="sidebar-title">Vue Admin Perfect</h1>
      </router-link>
    </transition>
  </div>
</template>

<script lang="ts" setup>
defineProps<{ isCollapse: boolean }>();
</script>

<style lang="scss" scoped>
  .sidebar-logo-container {
    position: relative;
    width: 100%;
    height: 50px;
    display: flex;
    align-items: center;
    background: #2b2f3a;
    text-align: center;
    overflow: hidden;

    & .sidebar-logo-link {
      text-decoration: none;
      height: 100%;
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      & .sidebar-logo {
        width: 32px;
        height: 32px;
        margin-right: 12px;
      }

      & .sidebar-title {
        color: #fff;
        font-weight: 600;
        font-size: 14px;
        white-space: nowrap;
      }
    }

    &.collapse {
      .sidebar-logo {
        margin-right: 0px;
      }
    }
  }
</style>
