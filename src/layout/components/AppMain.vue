<template>
  <section class="app-main">
    <router-view v-slot="{ Component }">
        <component :is="Component" />
    </router-view>
  </section>
</template>

<script>

</script>

<style lang="scss" scoped>
  .app-main{
    padding: 20px;
    padding-top: 70px;
  }
</style>
