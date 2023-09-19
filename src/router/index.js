import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: { transitionName: 'fade' }, 
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
    path: '/types',
    name: 'types',
    meta: { transitionName: 'fade' } ,
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Types.vue'),
    children: [
      {
        path: 'new',
        name: 'newConfig',
        component: () => import(/* webpackChunkName: "about" */ '../views/TypeConfigNew.vue')
      },

    ],
  },
  {
    path: '/types/:id',
    name: 'typeConfig',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/TypeConfig.vue'),
    children: [
      {
        path: 'edit',
        name: 'editConfig',
        component: () => import(/* webpackChunkName: "about" */ '../views/TypeConfigEdit.vue')
      },
      {
        path: 'veille/new',
        name: 'newVeille',
        component: () => import(/* webpackChunkName: "about" */ '../views/TypeVeilleNew.vue')
      },
      {
        path: 'veille/edit/:idVeille',
        name: 'editVeille',
        component: () => import(/* webpackChunkName: "about" */ '../views/TypeVeilleEdit.vue')
      },
    
      {
        path: ':idCollecte',
        name: 'readCollecte',
        component: () => import(/* webpackChunkName: "about" */ '../views/TypeReadCollecte.vue')
      }
    ]
  },
  {
    path: '/personnels',
    name: 'personnels',
    meta: { transitionName: 'fade' }, 
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Personnels.vue'),
  },
  {
    path: '/suspension',
    name: 'suspension',
    meta: { transitionName: 'fade' }, 
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Suspension.vue'),
  },
  {
    path: '/personnels/:id',
    name: 'ficheIndividuelleSuivi',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/FicheIndividuelle.vue'),
  },
  {
    path:'/registre',
    name: 'registre',
    meta: { transitionName: 'fade' }, 
    component: () => import(/* webpackChunkName: "about" */ '../views/Registre.vue')
  },
  {
    path:'/echeancier',
    name: 'echeancier',
    meta: { transitionName: 'fade' }, 
    component: () => import(/* webpackChunkName: "about" */ '../views/Echeancier.vue')
  },
  {
    path:'/programmer',
    name: 'programmer',
    meta: { transitionName: 'fade' }, 
    component: () => import(/* webpackChunkName: "about" */ '../views/Programmer.vue')
  },
  {
    path: '/habilitationPersonnel',
    name: 'programmerHabilitationPersonnel',
    component: () => import(/* webpackChunkName: "about" */ '../views/Programmer.vue'),
  },
  {
    path: '/habilitationPersonnel/:id',
    name: 'programmerHabilitationPersonnelInfo',
    component: () => import(/* webpackChunkName: "about" */ '../views/habilitation/HabilitationPersonnelStatus.vue'),
  },
  {
    path: '/habilitation',
    name: 'programmerHabilitation',
    component: () => import(/* webpackChunkName: "about" */ '../views/Programmer.vue'),
  },
  {
    path: '/habilitationHab/:id',
    name: 'programmerHabilitationHab',
    component: () => import(/* webpackChunkName: "about" */ '../views/habilitation/HabilitationByHab.vue'),
  },
  {
    path:'/statistiques',
    name: 'statistiques',
    meta: { transitionName: 'fade' }, 
    component: () => import(/* webpackChunkName: "about" */ '../views/Statistiques.vue')
  },
  {
    path: '/operateur',
    name: 'operateur',
    component: () => import("../views/Operateur.vue"),
  },
  {
    path: '/operateur/:id',
    name: 'habilitationByAgent',
    component: () => import(/* webpackChunkName: "about" */ '../views/HabilitationByAgent.vue'),
    children: [
      {
        path: ':idHab',
        name: 'controlHistory',
        component: () => import(/* webpackChunkName: "about" */ '../views/ControlHistory.vue'),
        children: [
          {
            path: ':idCollecte',
            name: 'controlView',
            component: () => import(/* webpackChunkName: "about" */ '../views/ControlVue.vue')
          }
        ]
      }
    ]
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
