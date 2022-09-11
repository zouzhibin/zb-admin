<template>
  <div style="padding: 30px">
    <el-alert title="menu 1" :closable="false">
      <router-view v-slot="{ Component }">
        <component :is="Component" />
      </router-view>
    </el-alert>
  </div>
</template>
