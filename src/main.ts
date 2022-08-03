import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
//
import './permission'
import 'virtual:svg-icons-register'
import SvgIcon from '@/components/SvgIcon/index.vue'// svg component
import ElementPlus from 'element-plus'
import UContainerLayout from '@/components/u-container-layout/index.vue'
import 'element-plus/dist/index.css'
import zhCn from 'element-plus/es/locale/lang/zh-cn'
const app = createApp(App)
app.component('svg-icon',SvgIcon)
app.component('u-container-layout',UContainerLayout)
import * as ElIconsModules from '@element-plus/icons-vue'
// 全局注册element-plus icon图标组件
Object.keys(ElIconsModules).forEach((key) => {//循环遍历组件名称
    if ("Menu" !== key) {//如果不是图标组件不是Menu，就跳过，否则加上ICon的后缀
        app.component(key, ElIconsModules[key]);
    } else {
        app.component(key + "Icon", ElIconsModules[key]);
    }
});

app.use(store)
app.use(router)

app.use(ElementPlus,{
    locale: zhCn,
}).mount('#app')
