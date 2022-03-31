import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import './permission'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

const app = createApp(App)

import * as ElIconsModules from '@element-plus/icons-vue'
// 全局注册element-plus icon图标组件
Object.keys(ElIconsModules).forEach((key) => {//循环遍历组件名称
    if ("Menu" !== key) {//如果不是图标组件不是Menu，就跳过，否则加上ICon的后缀
        app.component(key, ElIconsModules[key]);
    } else {
        app.component(key + "Icon", ElIconsModules[key]);
    }
});

import '@/styles/index.scss' // global css
app.use(store).use(router).use(ElementPlus).mount('#app')
