import {Module} from "vuex";
import { getToken, setToken, removeToken } from '@/utils/auth'
const state = {
    token: getToken(),
    userInfo:localStorage.userInfo?JSON.parse(localStorage.userInfo):{},
    roles: localStorage.roles?JSON.parse(localStorage.roles):[],
}

const mutations = {
    SET_TOKEN: (state, token) => {
        state.token = token
    },
    SET_INFO: (state, userInfo) => {
        localStorage.userInfo = JSON.stringify(userInfo)
        state.userInfo = userInfo
    },
    SET_ROLES: (state, roles) => {
        localStorage.roles = JSON.stringify(roles)
        state.roles = roles
    }
}


const actions = {
    // 登录
    login({ commit,dispatch }, userInfo) {
        const { username, password } = userInfo
        return new Promise(async (resolve, reject) => {
            commit('SET_TOKEN', username)

            commit('SET_INFO', userInfo)
            await dispatch('getInfo', ['admin']) // 获取权限列表 默认就是超级管理员，因为没有进行接口请求 写死
            setToken(username)
            resolve(username)
        })
    },
    // 获取用户信息 ，如实际应用中 可以通过token通过请求接口在这里获取用户信息
    getInfo({ commit, state },roles) {
        return new Promise((resolve, reject) =>{
            commit('SET_ROLES', roles)
            resolve(roles)
        } )
    },
    // 退出
    logout({ commit, state, dispatch }) {
        return new Promise((resolve, reject) => {
            removeToken()
            commit('SET_TOKEN', '')
            commit('SET_INFO', '')
            commit('SET_ROLES', '')
            resolve(null)
        })
    },
}


const user:Module<any, any> = {
    namespaced:true,
    state,
    actions,
    mutations,
}

export default user
