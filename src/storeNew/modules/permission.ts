import {defineStore} from 'pinia'
import { asyncRoutes, constantRoutes } from '@/router/index'
/**
 * 通过递归过滤异步路由表
 * @param routes asyncRoutes
 * @param roles
 */
export function filterAsyncRoutes(routes, roles) {
    const res = []
    routes.forEach(route => {
        const tmp = { ...route }
        if (hasPermission(roles, tmp)) {
            if (tmp.children) {
                tmp.children = filterAsyncRoutes(tmp.children, roles)
            }
            res.push(tmp)
        }
    })
    return res
}

/**
 * 使用 meta.role 来确定当前用户是否具有权限
 * @param roles
 * @param route
 */
function hasPermission(roles, route) {
    if (route.meta && route.meta.roles) {
        return roles.some(role => route.meta.roles.includes(role))
    } else {
        // return true
        return false
    }
}



export const usePermissionStore = defineStore({
    // id: 必须的，在所有 Store 中唯一
    id:'permissionState',
    // state: 返回对象的函数
    state: ()=>({
        // 路由
        routes:[],
        // 动态路由
        addRoutes:{},
    }),
    getters: {
        permission_routes:state=> {
            return state.routes
        }
    },
    // 可以同步 也可以异步
    actions:{
        // 生成路由
        generateRoutes(roles){
            return new Promise(resolve => {
                // 在这判断是否有权限，哪些角色拥有哪些权限
                let accessedRoutes
                if (roles&&roles.length&&!roles.includes('admin')) {
                    accessedRoutes = filterAsyncRoutes(asyncRoutes, roles)
                } else {
                    accessedRoutes = asyncRoutes || []
                }
                this.routes = constantRoutes.concat(accessedRoutes)
                this.addRoutes = accessedRoutes
                resolve(accessedRoutes)
            })
        },
        // 清楚路由
        clearRoutes(){
            this.routes = []
            this.addRoutes = []
        }
    },
    // persist: {
    //     // 本地存储的名称
    //     key: "permissionState",
    //     //保存的位置
    //     storage: window.localStorage,//localstorage
    // },

})
