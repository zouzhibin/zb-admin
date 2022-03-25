<template>
  <div class="m-layout-header">
    <div>
      <el-icon class="icon" v-if="isCollapse" @click="handleCollapse(false)"><expand /></el-icon>
      <el-icon class="icon" v-else @click="handleCollapse(true)"><fold/></el-icon>
    </div>
    <div>
      <el-dropdown @command="commandAction">
        <span class="el-dropdown-link">
          {{ userInfo.username }}
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
    <personal ref="person"/>
  </div>
</template>

<script lang="ts" setup>
  import Personal from './Personal.vue'
  import {computed, ref,} from 'vue'
  import {useRouter} from 'vue-router'
  import { ElMessageBox, ElMessage } from 'element-plus'
  import {
    Expand,
    Fold,
  } from '@element-plus/icons-vue'
  import {useStore} from "vuex";

  const store = useStore()
  const person = ref()
  const router = useRouter()

  const isCollapse = computed(()=>{
    return store.state.app.isCollapse
  })

  const userInfo = computed(()=>{
    return store.state.user.userInfo
  })

  const logOut = async ()=>{
    ElMessageBox.confirm(
        '确定退出登录吗？',
        '退出登录',
        {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning',
        }
    )
        .then(async () => {
          try {
            await store.dispatch('user/logout')
            router.push({path:'/login'})
          }catch (e) {

          }
        })
        .catch(() => {

        })
  }

  const commandAction = (key:number)=>{
    switch (key){
      case 1:
        logOut()
        break;
      case 2:
        person.value.show()
        break;
    }
  }

  const handleCollapse = (type:boolean) => {
    store.commit('app/SET_COLLAPSE', type)
  }
</script>

<style lang="scss" scoped>
.icon{
  font-size:24px;
  cursor: pointer;
}
.m-layout-header{
  height: 50px;
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-sizing: border-box;
  padding: 0 10px;
  box-shadow: 0 1px 4px rgb(0 21 41 / 8%);
}
.el-dropdown{
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
</style>
