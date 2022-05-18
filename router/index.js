import Vue from 'vue'
import Router from 'uni-simple-router'
// import { Message, LoadingBar } from 'view-design';
import routes from './routers'
import store from '@/store'
/* import {
	getToken,
	canTurnTo,
	setTitle
} from '@/libs/util' */
Vue.use(Router);

const router = new Router({
	h5: {
		vueRouterDev: true
	},
	routes
});

const LOGIN_PAGE_NAME = 'login'

const turnTo = (to, access, next) => {
	if (canTurnTo(to.name, access, routes)) next() // 有权限，可访问
	else next({
		replace: true,
		name: 'error_401'
	}) // 无权限，重定向到401页面
}

//全局路由前置守卫
router.beforeEach((to, from, next) => {
  next()
	/* LoadingBar.start()
	const token = getToken()
	if (!token && to.name !== LOGIN_PAGE_NAME) {
		// 未登录且要跳转的页面不是登录页
		next({
			name: LOGIN_PAGE_NAME // 跳转到登录页
		})
	} else if (!token && to.name === LOGIN_PAGE_NAME) {
		// 未登陆且要跳转的页面是登录页
		next() // 跳转
	} else if (token && to.name === LOGIN_PAGE_NAME) {
		// 已经登录跳转登录
		Message.success({
			background: true,
			content: '您已经登录'
		});
		next({
			name: 'index'
		})
	} else {
		if (store.state.user.hasGetInfo) {
			turnTo(to, store.state.user.access, next)
		} else {
			store.dispatch('getUserInfo').then(access => {
				// 拉取用户信息，通过用户权限和跳转的页面的name来判断是否有权限访问;access必须是一个数组，如：['super_admin'] ['super_admin', 'admin']
				turnTo(to, access, next)
			}).catch(() => {
				getToken('')
				next({
					name: 'login'
				})
			})
		}
	} */
})
// 全局路由后置守卫
router.afterEach((to, from) => {
	/* setTitle(to, router.app)
	LoadingBar.finish()
	window.scrollTo(0, 0) */
})
export default router;
