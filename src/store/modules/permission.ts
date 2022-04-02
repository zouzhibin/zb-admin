import {Module} from "vuex";

import { asyncRoutes, constantRoutes } from '@/router/index'
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


const state = {
    routes: [],
    addRoutes: []
}

const mutations = {
    SET_ROUTES: (state, routes) => {
        state.addRoutes = routes
        state.routes = constantRoutes.concat(routes)


    }
}

const actions = {
    generateRoutes({ commit }, roles) {
        return new Promise(resolve => {
            // 在这判断是否有权限，哪些角色拥有哪些权限
            let accessedRoutes
            if (roles&&roles.length&&!roles.includes('admin')) {
                accessedRoutes = filterAsyncRoutes(asyncRoutes, roles)
            } else {
                accessedRoutes = asyncRoutes || []
            }

            commit('SET_ROUTES', accessedRoutes)
            resolve(accessedRoutes)
        })
    }
}

const permission:Module<any, any> = {
    namespaced:true,
    state,
    mutations,
    actions
}

export default permission
