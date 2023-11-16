import { createRouter, createWebHistory } from 'vue-router'
import Admin from '../views/Admin/Admin.vue'


const router = createRouter({
	history: createWebHistory(),
	routes: [
		{
			path: '/',
			component: Admin
			
		},
		{
			path: '/Orderedbooks',
			component: () => import('../views/Admin/Orderedbooks.vue')
		},
		{
			path: '/Managethestudents',
			component: () => import('../views/Admin/Managethestudents.vue')
		},
		{
			path: '/Uploadbooks',
			component: () => import('../views/Admin/Uploadbooks.vue')
		},
		{
			path: '/Books',
			component: () => import('../views/Admin/Books.vue')
		},
		{
			path: '/Authorization',
			component: () => import('../components/Authorization.vue')
		},
		{
			path: '/Logout',
			component: () => import('../components/Authorization.vue')

		},
	],
})

export default router