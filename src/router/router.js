import { createRouter, createWebHistory } from 'vue-router';

import FormTodoPage from '../views/FormTodoPage.vue';
import ListTodoPage from '../views/ListTodoPage.vue';

const routes = [
  {
    path: '/',
    name: 'FormTodo',
    component: FormTodoPage
  },
  {
    path: '/todo-list',
    name: 'ListTodo',
    component: ListTodoPage
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
