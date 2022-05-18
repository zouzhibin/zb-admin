<template>
  <div class="m-permission-page">
    <div style="margin-bottom: 20px">
      权限列表{{store.getters.roles}}
    </div>
    <el-radio-group v-model="switchRoles">
      <el-radio-button label="other" />
      <el-radio-button label="admin" />
    </el-radio-group>
  </div>
</template>

<script lang="ts" setup>
  import {computed, ref} from "vue";
  import {useStore} from "vuex"
  const store = useStore()

  const switchRoles = computed({
    get(){
      return store.getters.roles[0]
    },
    set(val){
      (async ()=>{
        await store.dispatch("user/getInfo",[val])
        location.reload()
      })()
    }
  })
</script>

<style>

</style>
