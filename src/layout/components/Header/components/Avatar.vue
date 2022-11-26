<template>
  <el-dropdown >
        <span class="el-dropdown-link">
          <el-avatar :size="30" class="avatar" :src="AvatarLogo"/>
          {{userInfo.username}}
          <el-icon class="header-icon el-icon--right">
            <arrow-down />
          </el-icon>
        </span>
    <template #dropdown>
      <el-dropdown-menu>
        <el-dropdown-item :command="0" @click="switchRolesAction('admin')">
          {{currentRoles==='admin'?'当前角色':'切换角色'}}：管理员
        </el-dropdown-item>
        <el-dropdown-item :command="0" divided @click="switchRolesAction('other')">
          {{currentRoles==='other'?'当前角色':'切换角色'}}：普通用户
        </el-dropdown-item>
        <el-dropdown-item :command="3" divided @click="modifyPassword">
          <el-icon><Edit /></el-icon>修改密码
        </el-dropdown-item>
        <el-dropdown-item :command="4" divided @click="logOut" >
          <el-icon><SwitchButton /></el-icon>退出登录
        </el-dropdown-item>
      </el-dropdown-menu>
    </template>
  </el-dropdown>

  <PersonalDialog ref="person"/>
</template>

<script lang="ts" setup>
import { useRouter } from 'vue-router'
import {ElMessage, ElMessageBox} from "element-plus";
import {computed, ref} from "vue";

import AvatarLogo from '@/assets/image/avatar.png'
import {useUserStore} from "@/store/modules/user"
import {useTagsViewStore} from "@/store/modules/tagsView"
import {usePermissionStore} from "@/store/modules/permission"
import PersonalDialog from './PersonalDialog.vue'

const router = useRouter()
const UserStore = useUserStore()
const TagsViewStore = useTagsViewStore()
const PermissionStore = usePermissionStore()

const currentRoles = computed({
  get() {
    return UserStore.roles[0]
  },
  set(val) {
    ;(async () => {
      await UserStore.getInfo([val])
      router.push({
        path:'/'
      })
      location.reload()
    })()
  },
})

const switchRolesAction = (type:string)=>{
  if(type===currentRoles.value) return
  currentRoles.value = currentRoles.value==='admin'?'other':'admin'
}

// 用户信息
const userInfo = computed(() => UserStore.userInfo)
const person = ref()

const logOut = async () => {
    ElMessageBox.confirm('您是否确认退出登录?', '温馨提示', {
      confirmButtonText: '确定',
      cancelButtonText: '取消',
      type: 'warning',
    })
    .then(async () => {
      await UserStore.logout()
      await router.push({path: '/login'})
      TagsViewStore.clearVisitedView()
      PermissionStore.clearRoutes()
      ElMessage({
        type: "success",
        message: "退出登录成功！"
      });
    })
    .catch(() => {})
}
const modifyPassword = ()=>{
  person.value.show()
}
</script>

<style lang="scss" scoped>
.avatar{
  margin-right: 6px
}
.el-dropdown-link {
  cursor: pointer;
  //color: var(--el-color-primary);
  display: flex;
  align-items: center;
}
</style>
