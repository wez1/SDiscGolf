import Vue from 'vue'
import Router from 'vue-router'
import Register from '@/components/Register'
import Login from '@/components/Login'
import Game from '@/components/Game'
import CreateGame from '@/components/CreateGame'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: { name: 'login' }
    },
    {
      path: '/register',
      name: 'register',
      component: Register
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/game',
      name: 'game',
      component: Game
    },
    {
      path: '/creategame',
      name: 'creategame',
      component: CreateGame
    }
  ]
})
