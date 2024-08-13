import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/home/home.vue';
import Login from '../views/login/login.vue';
import Users from '../views/users/users.vue';
import Patients from '../views/patients/patients.vue';
import PatientsDetails from '../views/patients/patients-details.vue';
import PatientsAdd from '../views/patients/patients-add.vue';
import PatientsTabeladeAcompanhamento from '../views/patients/patients-tabeladeacompanhamento.vue';
import PatientsAtendimento from '../views/patients/patients-atendimento.vue';
import AntecedentesClinicos from '../views/patients/antecedentes-clinicos.vue';
import AntecedentesCirurgicos from '../views/patients/antecedentes-cirurgicos.vue';
import AntecedentesFamiliares from '../views/patients/antecedentes-familiares.vue';
import Habitos from '../views/patients/habitos.vue';
import ExamesProcedimentos from '../views/patients/patients-examesprocedimentos.vue';

const routes = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    name: 'Home',
    component: Home,
    meta: { requiresAuth: true }
  },
  {
    path: '/users',
    name: 'Users',
    component: Users,
    meta: { requiresAuth: true }
  },
  {
    path: '/patients',
    name: 'Patients',
    component: Patients,
    meta: { requiresAuth: true }
  },
  {
    path: '/patients/add',
    name: 'PatientsAdd',
    component: PatientsAdd,
    meta: { requiresAuth: true }
  },
  {
    path: '/patients/:customerId/details',
    name: 'PatientsDetails',
    component: PatientsDetails,
    meta: { requiresAuth: true }
  },
  {
    path: '/patients/:customerId/tabeladeacompanhamento',
    name: 'PatientsTabeladeAcompanhamento',
    component: PatientsTabeladeAcompanhamento,
    meta: { requiresAuth: true }
  },
  {
    path: '/patients/:customerId/atendimento',
    name: 'PatientsAtendimento',
    component: PatientsAtendimento,
    meta: { requiresAuth: true }
  },
  {
    path: '/patients/:customerId/antecclinicos',
    name: 'AntecedentesClinicos',
    component: AntecedentesClinicos,
    meta: { requiresAuth: true }
  },
  {
    path: '/patients/:customerId/anteccirurgicos',
    name: 'AntecedentesCirurgicos',
    component: AntecedentesCirurgicos,
    meta: { requiresAuth: true }
  },
  {
    path: '/patients/:customerId/antecfamiliares',
    name: 'AntecedentesFamiliares',
    component: AntecedentesFamiliares,
    meta: { requiresAuth: true }
  },
  {
    path: '/patients/:customerId/habitos',
    name: 'Habitos',
    component: Habitos,
    meta: { requiresAuth: true }
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/:catchAll(.*)',
    redirect: '/home'
  },
  {
    path: '/patients/:customerId/examesprocedimentos',
    name: 'ExamesProcedimentos',
    component: ExamesProcedimentos,
    meta: { requiresAuth: true }
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

router.beforeEach((to, _, next) => {
  const isAuthenticated = !!localStorage.getItem('accessToken');
  if (to.matched.some(record => record.meta.requiresAuth) && !isAuthenticated) {
    next('/login');
  } else {
    next();
  }
});

export default router;
