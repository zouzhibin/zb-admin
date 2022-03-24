import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import './permission'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'


import '@/styles/index.scss' // global css
createApp(App).use(store).use(router).use(ElementPlus).mount('#app')
