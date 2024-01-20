import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '../views/HomePage.vue';
import LoginPage from '../views/LoginPage.vue';
import RegisterPage from '../views/RegisterPage.vue';
import TaskPage from '../views/TaskPage.vue'; 
import EditTaskPage from '../views/EditTaskPage.vue'; 
import NewTaskPage from '../views/NewTaskPage.vue'; 

const routes = [
  { path: '/', component: HomePage, meta: { requiresAuth: true } },
  { path: '/login', component: LoginPage },
  { path: '/register', component: RegisterPage },
  { path: '/tasks', component: TaskPage, meta: { requiresAuth: true } }, 
  { path: '/edit-task/:taskId', component: EditTaskPage, meta: { requiresAuth: true } },
  { path: '/add-task', component: NewTaskPage },

];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach((to, from, next) => {
  const isAuthenticated = localStorage.getItem('access_token');

  if (to.matched.some(record => record.meta.requiresAuth) && !isAuthenticated) {
    next('/login');
  } else {
    next();
  }
});

export default router;
