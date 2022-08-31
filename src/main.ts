import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import pinia from "./store";
import 'default-passive-events'

// 权限路由
import './permission'
// svg-icons注册导入
import 'virtual:svg-icons-register'
import SvgIcon from '@/components/SvgIcon/index.vue'// svg component
// UI框架 element-plus
import ElementPlus from 'element-plus'
import UContainerLayout from '@/components/u-container-layout/index.vue'
import 'element-plus/dist/index.css'

// 引入暗黑模式 element-plus 2.2 内置暗黑模式
import 'element-plus/theme-chalk/dark/css-vars.css'
// 自定义暗黑模式
import "@/styles/element-dark.scss";
// i18n
import I18n from "@/language/index";


const app = createApp(App)

// 注册全局组件
app.component('svg-icon',SvgIcon)
app.component('u-container-layout',UContainerLayout)

// 注册icon组件
import * as ElIconsModules from '@element-plus/icons-vue'
// 全局注册element-plus icon图标组件
Object.keys(ElIconsModules).forEach((key) => {//循环遍历组件名称
    if ("Menu" !== key) {//如果不是图标组件不是Menu，就跳过，否则加上ICon的后缀
        app.component(key, ElIconsModules[key]);
    } else {
        app.component(key + "Icon", ElIconsModules[key]);
    }
});
app.use(I18n)
app.use(pinia)
app.use(router)

app.use(ElementPlus).mount('#app')
