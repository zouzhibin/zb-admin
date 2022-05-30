import {Module} from "vuex";

const state = {
    visitedViews: [],
    cachedViews: []
}

const mutations = {
    ADD_VISITED_VIEW: (state, view) => {
        if (state.visitedViews.some(v => v.path === view.path)) return
        state.visitedViews.push(
            Object.assign({}, view, {
                title: view.meta.title || 'no-name'
            })
        )
        if (view.meta.keepAlive) {

            state.cachedViews.push(view.name)

        }
    },
    REMOVE_VISITED_VIEW: (state, routes) => {
        state.visitedViews = state.visitedViews.filter(item=>!routes.includes(item.path))
    },
    CLEAR_VISITED_VIEW:(state, view) => {
        state.visitedViews = []
        state.cachedViews = []
    },
    ADD_CACHED_VIEW: (state, view) => {
        if (state.cachedViews.includes(view.name)) return
        if (!view.meta.noCache) {
            state.cachedViews.push(view.name)
        }
    },
    DEL_VISITED_VIEW: (state, view) => {
        for (const [i, v] of state.visitedViews.entries()) {
            if (v.path === view.path) {
                state.visitedViews.splice(i, 1)
                break
            }
        }
        for (const i of state.cachedViews) {
            if (i === view.name) {
                const index = state.cachedViews.indexOf(i)
                state.cachedViews.splice(index, 1)
                break
            }
        }

    },
    DEL_CACHED_VIEW: (state, view) => {
        const index = state.cachedViews.indexOf(view.name)
        index > -1 && state.cachedViews.splice(index, 1)
    },

    DEL_ALL_VIEWS: (state) => {
        state.visitedViews = []
        state.cachedViews = []
    }

}

const actions = {
    addView({ dispatch }, view) {
        dispatch('addVisitedView', view)
        // dispatch('addCachedView', view)
    },
    removeView({ commit }, views){
        return new Promise((resolve, reject) => {
            commit('REMOVE_VISITED_VIEW', views)
            resolve(null)
        })

    },
    addVisitedView({ commit }, view) {
        commit('ADD_VISITED_VIEW', view)
    },
    delView({ dispatch, state }, view) {
        return new Promise(resolve => {
            dispatch('delVisitedView', view)
            dispatch('delCachedView', view)
            resolve({
                visitedViews: [...state.visitedViews],
                cachedViews: [...state.cachedViews]
            })
        })
    },
    delVisitedView({ commit, state }, view) {
        return new Promise(resolve => {
            commit('DEL_VISITED_VIEW', view)
            resolve([...state.visitedViews])
        })
    },
    delCachedView({ commit, state }, view) {
        return new Promise(resolve => {
            commit('DEL_CACHED_VIEW', view)
            resolve([...state.cachedViews])
        })
    },
    clearVisitedView({ commit, state }){
        commit('CLEAR_VISITED_VIEW')
    },
    delAllViews({ commit, state }) {
        return new Promise((resolve) => {
            commit('DEL_ALL_VIEWS')
            resolve([...state.visitedViews])
        })
    }
}



const tagsView:Module<any, any> = {
    namespaced:true,
    state,
    mutations,
    actions
}

export default tagsView
