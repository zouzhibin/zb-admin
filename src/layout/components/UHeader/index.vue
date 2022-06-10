<template>
  <div
          class="m-layout-header"
          :style="{left:`${mode==='horizontal'?0:isCollapse?'56':'210'}px`}">
        <div class="header" :class="{
            transverseMenu:mode==='horizontal'
          }">
      <menu-slide v-if="mode==='horizontal'"/>
      <div class="left" v-if="mode==='vertical'">
        <div>
          <el-icon class="icon" v-if="isCollapse" @click="handleCollapse"><expand /></el-icon>
          <el-icon class="icon" v-else @click="handleCollapse"><fold/></el-icon>
        </div>
        <u-hamburger/>
      </div>
      <div class="right">
        <u-info/>
        <u-screen-full/>
        <el-dropdown @command="commandAction">
          <span class="el-dropdown-link">
             <el-avatar :icon="UserFilled" :size="30" style="margin-right: 6px"/>{{ userInfo.username }}
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
    </div>
    <tag-views v-if="isShowTag"/>
    <personal ref="person"/>
  </div>
</template>

<script lang="ts" setup>
  import { UserFilled } from '@element-plus/icons-vue'
  import Personal from './Personal.vue'
  import TagViews from '../TagsView/index.vue'
  import UHamburger from "@/components/u-Hamburger/index.vue"
  import UScreenFull from '@/components/u-screenfull/index.vue'
  import UInfo from '@/components/u-info/index.vue'
  import MenuSlide from '../Sidebar/menuSlide.vue'
  import {computed, ref,} from 'vue'
  import {useRouter} from 'vue-router'
  import { ElMessageBox, ElMessage } from 'element-plus'
  import {useStore} from "vuex";

  const store = useStore()
  const person = ref()
  const router = useRouter()

  const isCollapse = computed(()=>{
    return !store.state.app.isCollapse
  })
  const mode = computed(()=>{
    return store.state.setting.mode
  })

  const isShowTag = computed(()=>{
    return store.state.setting.isShowTag
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
            store.dispatch('permission/clearRoutes')
            store.dispatch('tagsView/clearVisitedView')
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
  const handleCollapse = () => {
    store.commit('app/SET_COLLAPSE', isCollapse.value)
  }
</script>

<style lang="scss" scoped>
.mobile{
  .m-layout-header{
    left: 0!important;
  }
}
  .icon{
    font-size:24px;
    cursor: pointer;
  }
  .header{
    height: 60px;
    width: 100%;
    display: flex;
    align-items: center;
    padding: 0 10px;
    box-sizing: border-box;
    justify-content: space-between;
    .left{
      display: flex;
      align-items: center;
    }
    .right{
      display: flex;
      align-items: center;
    }
  }
  .m-layout-header{
    position: fixed;
    top: 0;
    background: white;
    left: 0;
    z-index:99;
    right: 0;
    transition: left 0.28s;
    flex-shrink: 0;
    box-sizing: border-box;

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
