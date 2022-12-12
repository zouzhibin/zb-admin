import { createApp } from 'vue'
import App from './App.vue'
import router from './routers'
import pinia from "./store";

import {registerElIcons} from "@/plugins/ElIcons"
// 引入全局组件布局
import PageWrapLayout from '@/components/PageWrapLayout/index.vue'
// 权限路由
import './permission'
// svg-icons注册导入
import 'virtual:svg-icons-register'
import SvgIcon from '@/components/SvgIcon/index.vue'// svg component
// UI框架 element-plus
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
// 引入暗黑模式 element-plus 2.2 内置暗黑模式
import 'element-plus/theme-chalk/dark/css-vars.css'
// 自定义暗黑模式
import "@/styles/element-dark.scss";
// 引入阿里图标库
import "@/assets/iconfont/iconfont.css";
import "@/assets/iconfont/iconfont.js";

const app = createApp(App)
registerElIcons(app)

app.component('svg-icon',SvgIcon)
app.component('PageWrapLayout',PageWrapLayout)

app.use(pinia)
app.use(router)
app.use(ElementPlus).mount('#app')
