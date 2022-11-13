<template>
  <div class="app-container">
   <div class="app-container-inner">
     <el-alert title="menu 1" :closable="false">

     </el-alert>
     <router-view  v-slot="{ Component }">
       <component :is="Component"></component>
     </router-view>
   </div>
  </div>
</template>
<script lang="ts" setup name="menu1"></script>
