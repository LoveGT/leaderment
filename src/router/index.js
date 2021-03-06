import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [{
		path: '/home',
		name: 'Home',
		// route level code-splitting
		// this generates a separate chunk (about.[hash].js) for this route
		// which is lazy-loaded when the route is visited.
		component: () => import('@/views/Home')
	},
	{
		path: '/',
		redirect: '/home'
	}
]

const router = new VueRouter({
	linkActiveClass: 'active',
	mode: 'history',
	base: process.env.BASE_URL,
	routes
})

export default router
