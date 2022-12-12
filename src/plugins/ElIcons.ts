
// 注册icon组件
import * as ElIconsModules from '@element-plus/icons-vue'


export const registerElIcons = (app)=>{
    // 全局注册element-plus icon图标组件
    Object.keys(ElIconsModules).forEach((key) => {//循环遍历组件名称
        if ("Menu" !== key) {//如果不是图标组件不是Menu，就跳过，否则加上ICon的后缀
            app.component(key, ElIconsModules[key]);
        } else {
            app.component(key + "Icon", ElIconsModules[key]);
        }
    });
}

