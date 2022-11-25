<template>
  <div class="app-container m-user">
    <UserSide/>
    <UserTable/>
  </div>
</template>

<script lang="ts" setup>
  import UserTable from './components/userTable.vue'
  import UserSide from './components/userSide.vue'

</script>

<style scoped lang="scss">
@import "./index";
</style>
