
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
export function hasPermission(roles, route) {
    if (route.meta && route.meta.roles) {
        return roles.some(role => route.meta.roles.includes(role))
    } else {
        return false
    }
}

/**
 * @description 使用递归，过滤需要缓存的路由
 * @param {Array} _route 所有路由表
 * @param {Array} _cache 缓存的路由表
 * @return void
 * */

export function filterKeepAlive(routers){
    let cacheRouter: any[] = [];
    let deep = (routers)=>{
        routers.forEach(item=>{
            if(item.meta?.keepAlive&& item.name){
                cacheRouter.push(item.name)
            }
            if(item.children&&item.children.length){
                deep(item.children)
            }
        })
    }
    deep(routers)
    return cacheRouter
}
