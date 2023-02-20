import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Login from '../components/Login.vue'

const routes = [
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (About.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import('../views/AboutView.vue')
  },
  {
    path: '/login',
    name: 'login',
    component: Login,
    meta: {
      requireAuth: false,
      layout: 'auth-layout'
    }
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

router.beforeEach((to,from,next) => {
  if(to.name !== 'login' && !localStorage.getItem('user')) next({name: 'login'})
  else next()

  if(to.meta.requireAuth == true && !localStorage.getItem('user')) next({name: 'login'})
  else next()
})

export default router
