import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
  path: '/',
    name: 'Sidebar',
    component: () => import('../views/SideBar.vue')
  },

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
