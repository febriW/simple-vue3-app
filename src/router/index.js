import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Login from '../components/Login.vue'
import DataTable from '../components/DataTable.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
    meta: {
      requireAuth: true,
      layout: 'base-layout'
    }
  },
  {
    path: '/login',
    name: 'login',
    component: Login,
    meta: {
      requireAuth: false,
      layout: 'auth-layout'
    }
  },
  {
    path: '/table',
    name: 'dataTable',
    component: DataTable,
    meta: {
      requireAuth: true,
      layout: 'base-layout'
    }
  }
]

const router = createRouter({
  mode: history,
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

router.beforeEach((to,from,next) => {
  if(to.matched.some(record => record.meta.requireAuth == true)){
    if(!localStorage.getItem('user')){
      next({name: 'login'})
    }else{
      next()
    }
  }else{
    if(localStorage.getItem('user')) next({name:'home'})
    else next()
  }

})

export default router
