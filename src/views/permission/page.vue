<template>
  <u-container-layout class="m-permission-page">
    <div style="margin-bottom: 20px"> 权限列表{{ store.getters.roles }} </div>
    <el-radio-group v-model="switchRoles">
      <el-radio-button label="other" />
      <el-radio-button label="admin" />
    </el-radio-group>
  </u-container-layout>
</template>

<script lang="ts" setup>
  import { computed, ref } from 'vue'
  import {useUserStore} from "@/store/modules/user"
  const UserStore = useUserStore()

  const switchRoles = computed({
    get() {
      return UserStore.roles[0]
    },
    set(val) {
      ;(async () => {
        await UserStore.getInfo([val])
        location.reload()
      })()
    },
  })
</script>

<style></style>
