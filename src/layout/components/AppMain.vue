<template>
  <section class="app-main">

      <router-view v-slot="{ Component }">
        <transition name="fade-transform" mode="out-in">
          <div>
            <component :is="Component" />
          </div>
        </transition>
      </router-view>

  </section>
</template>

<script>

</script>

<style lang="scss" scoped>
  .app-main{
    padding: 20px;
    padding-top: 110px;
    //min-height: 100%;
    //overflow: auto;
    //flex: 1;
    //overflow: auto;
    box-sizing: border-box;
    //padding-top: 70px;
  }
</style>
