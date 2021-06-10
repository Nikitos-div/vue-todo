import { createRouter, createWebHistory } from 'vue-router';

import FormTodoPage from '../views/FormTodoPage.vue';
import ListTodoPage from '../views/ListTodoPage.vue';

const routes = [
  {
    path: '/',
    name: 'vTodo',
    component: FormTodoPage,
  },
   {
      path: 'todo-list',
      name: 'todoList',
      component: ListTodoPage
    }
 
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
