import { createRouter, createWebHistory } from 'vue-router'
import Admin from '../views/Admin.vue'


const router = createRouter({
	history: createWebHistory(),
	routes: [
		{
			path: '/',
			component: Admin
			
		},
		{
			path: '/Orderedbooks',
			component: () => import('../views/Orderedbooks.vue')
		},
		{
			path: '/Managethestudents',
			component: () => import('../views/Managethestudents.vue')
		},
		{
			path: '/Uploadbooks',
			component: () => import('../views/Uploadbooks.vue')
		},
		{
			path: '/Books',
			component: () => import('../views/Books.vue')
		},
		{
			path: '/authorization',
			component: () => import('../views/authorization.vue')
		},
	],
})

export default router