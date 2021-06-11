import { createRouter, createWebHistory } from 'vue-router'
import CreateTodoRoute from '@/pages/CreateToDo/route.js'
import AllTodoRoute from '@/pages/AllToDo/route.js'

const routes = [
  CreateTodoRoute,
  AllTodoRoute
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
