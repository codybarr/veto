import Vue from 'vue'
import Router from 'vue-router'

import Home from '@/views/Home.vue'

import Main from '@/views/Main.vue'
import Search from '@/views/Search.vue'
import Veto from '@/views/Veto.vue'

import store from '@/store'

Vue.use(Router)

const router = new Router({
	routes: [
		{
			path: '/',
			name: 'home',
			component: Home
		},
		{
			path: '/app',
			name: 'main',
			redirect: '/app/search',
			component: Main,
			children: [
				{
					path: 'search',
					component: Search
				},
				{
					path: 'veto',
					component: Veto
				}
			]
		}
	],
	scrollBehavior(to, from, savedPosition) {
		return { x: 0, y: 0 }
	}
})

export default router
