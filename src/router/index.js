import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../views/HomePage.vue'
import PlayReaction from '../views/PlayReaction.vue'

const routes = [
  {
    path : '/', 
    name : 'HomePage',
    component : HomePage
  },
  {
    path : '/play', 
    name : 'PlayReaction',
    component : PlayReaction
    
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
