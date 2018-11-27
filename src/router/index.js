import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

/* Layout */
import Layout from '../views/layout/Layout'

export const constantRouterMap = [
  {path: '/login', component: () => import('@/views/login/index'), hidden: true},
  {path: '/authredirect', component: () => import('@/views/login/authredirect'), hidden: true},
  {path: '/404', component: () => import('@/views/errorPage/404'), hidden: true},
  {path: '/401', component: () => import('@/views/errorPage/401'), hidden: true},

  {
    path: '/',
    component: Layout,
    redirect: '/home',
    name: 'home',
    children: [{
      path: 'home',
      component: () => import('@/views/home/index'),
      name: 'home',
      meta: {title: '主页', icon: 'dashboard', noCache: true}
    }]
  },

  {
    path: '/databoard',
    component: Layout,
    name: 'databoard',
    children: [
      {
        path: 'explore',
        name: 'explore',
        component: () => import('@/views/databoard/explore/index'),
        meta: {title: '探索', icon: 'drag'}
      },
      {
        path: 'favorite',
        name: 'favorite',
        component: () => import('@/views/databoard/favorite/index'),
        meta: {title: '关注', icon: 'star'}
      },
      {
        path: 'user',
        name: 'user',
        component: () => import('@/views/databoard/user/index'),
        meta: {title: '用户', icon: 'user'}
      },
      {
        path: 'people',
        name: 'people',
        component: () => import('@/views/databoard/people/index'),
        meta: {title: '发现好友', icon: 'user'}
      }
    ]
  },

  {path: '*', redirect: '/404', hidden: true}
]

export default new Router({
  // mode: 'history', //后端支持可开
  scrollBehavior: () => ({y: 0}),
  routes: constantRouterMap
})

