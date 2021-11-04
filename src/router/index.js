import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    redirect: '/login',
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('../views/Login.vue')
  },
  {
    path: '/cadastro',
    name: 'Cadastro',
    component: () => import('../views/Cadastro.vue')
  },
  {
    path: '/gerenciamento',
    name: 'Gerenciamento',
    component: () => import('../views/Gerenciamento.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
