import Vue from 'vue'
import VueRouter from 'vue-router'
import PlayField from '@/views/PlayField.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/game',
    name: 'PlayField',
    component: PlayField
  },
  {
  path: '/',
  name: 'SnakeMain',
  component: () => import('@/views/SnakeMain.vue') 
  },
  {
    path: '/leaderboards',
    name: 'LeaderBoards',
    component: () => import('@/views/LeaderBoards.vue') 
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
