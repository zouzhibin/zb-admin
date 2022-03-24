import {Module} from "vuex";
import { getToken, setToken, removeToken } from '@/utils/auth'
const state = {
    token: getToken(),
    userInfo:localStorage.userInfo?JSON.parse(localStorage.userInfo):{}
}

const mutations = {
    SET_TOKEN: (state, token) => {
        state.token = token
    },
    SET_INFO: (state, userInfo) => {
        localStorage.userInfo = JSON.stringify(userInfo)
        state.userInfo = userInfo
    },
}


const actions = {
    // 登录
    login({ commit }, userInfo) {
        console.log('=========')
        const { username, password } = userInfo
        return new Promise((resolve, reject) => {
            commit('SET_TOKEN', username)
            commit('SET_INFO', userInfo)
            setToken(username)
            resolve(username)
        })
    },
    // 退出
    logout({ commit, state, dispatch }) {
        return new Promise((resolve, reject) => {
            removeToken()
            commit('SET_TOKEN', '')
            commit('SET_INFO', '')
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
