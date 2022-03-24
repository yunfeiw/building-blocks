import Vue from 'vue'
import VueRouter from 'vue-router'

import About from '../view/about'
import Home from '../view/home'
import List from '../view/list'

Vue.use(VueRouter)

const routes = [
  {
    path: "/",
    component: Home,
  },
  {
    path: "/list",
    component: List
  },
  {
    path: "/about",
    component: About
  }
]

// eslint-disable-next-line no-new
// const router = new VueRouter({
//   mode: 'history',
//   base: process.env.BASE_URL,
//   routes
// })

export default routes
