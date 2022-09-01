import {defineStore} from 'pinia'


export const useTagsViewStore = defineStore({
    // id: 必须的，在所有 Store 中唯一
    id:'tagsViewState',
    // state: 返回对象的函数
    state: ()=>({
        visitedViews:[],
        cachedViews:[],

    }),
    getters: {},
    // 可以同步 也可以异步
    actions:{
        addView(view){
            this.addVisitedView(view)
        },
        removeView(routes){
            return new Promise((resolve, reject) => {
                this.visitedViews = this.visitedViews.filter(item=>!routes.includes(item.path))
                resolve(null)
            })
        },
        addVisitedView(view){
            if (this.visitedViews.some(v => v.path === view.path)) return
            this.visitedViews.push(
                Object.assign({}, view, {
                    title: view.meta.title || 'no-name'
                })
            )
            if (view.meta.keepAlive) {
                this.cachedViews.push(view.name)
            }
        },
        delView(view){
            return new Promise(resolve => {
                this.delVisitedView(view)
                this.delCachedView(view)
                resolve({
                    visitedViews: [...this.visitedViews],
                    cachedViews: [...this.cachedViews]
                })
            })

        },
        delVisitedView(view){
            return new Promise(resolve => {
                this.visitedViews = this.visitedViews.filter(v=>{
                    return (v.path !== view.path||v.meta.affix)
                })
                this.cachedViews = this.cachedViews.filter(v=>{
                    return (v.path !== view.path||v.meta.affix)
                })
                resolve([...this.visitedViews])
            })

        },
        delCachedView(view){
            return new Promise(resolve => {
                const index = this.cachedViews.indexOf(view.name)
                index > -1 && this.cachedViews.splice(index, 1)
                resolve([...this.cachedViews])
            })

        },
        clearVisitedView(){
            this.delAllViews()
        },
        delAllViews(){
            return new Promise((resolve) => {
                this.visitedViews = this.visitedViews.filter(v=>v.meta.affix)
                console.log('===============',this.visitedViews)
                this.cachedViews = this.visitedViews.filter(v=>v.meta.affix)
                resolve([...this.visitedViews])
            })
        },
        updateVisitedView(view){
            for (let v of this.visitedViews) {
                if (v.path === view.path) {
                    v = Object.assign(v, view)
                    break
                }
            }
        }
    },

})
