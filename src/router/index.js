import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'À propos',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/veille',
    name: 'ConsultationVeille',
    component: () => import(/* webpackChunkName: "about" */ '../views/ConsultationVeille.vue'),
    children: [
      {
        path: ':id',
        name: 'ConsultationVeilleInformation',
        component: () => import('../views/ConsultationVeilleInformation.vue')
      },
    ]
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
