import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import CharacterList from '../views/CharacterList.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/list',
    name: 'CharacterList',
    component: CharacterList
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
