import {createRouter, createWebHistory} from 'vue-router';
import Home from './pages/Home.vue';
import About from './pages/About.vue';
import Contacts from './pages/Contacts.vue';
import ProjectsCard from './components/ProjectCard.vue'

const router = createRouter({
  history: createWebHistory(),
  linkExactActiveClass: 'active',

  routes:[
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/chi-siamo',
      name: 'about',
      component: About
    },
    {
      path: '/projects',
      name: 'projects',
      component: ProjectsCard
    },
    {
      path: '/contatti',
      name: 'contacts',
      component: Contacts
    },

  ]
});

export { router }