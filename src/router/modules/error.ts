
import { RouteRecordRaw } from "vue-router";
import Layout from "@/layout/index.vue";
// 扩展继承属性
interface extendRoute {
    hidden?:boolean
}
const errorRouter : Array<RouteRecordRaw&extendRoute> = [
    {
        path: "/403",
        name: "403",
        component: () => import("@/views/error/403.vue"),
        hidden:true,
        meta: {
            requiresAuth: true,
            title: "403页面",
            key: "403"
        }
    },
    {
        path: "/404",
        name: "404",
        component: () => import("@/views/error/404.vue"),
        hidden:true,
        meta: {
            requiresAuth: true,
            title: "404页面",
            key: "404"
        }
    }
]

export default errorRouter
