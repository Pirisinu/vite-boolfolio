import {createRouter, createWebHistory} from 'vue-router';
import Home from './pages/Home.vue';
import About from './pages/About.vue';
import Contacts from './pages/Contacts.vue';
import Error404 from './pages/Error404.vue';
import ProjectsCard from './components/ProjectCard.vue';
import ProjectDetails from './pages/ProjectDetails.vue'

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
      path: '/projects/:slug', 
      name: 'ProjectDetails',
      component: ProjectDetails,
    },
    {
      path: '/contatti',
      name: 'contacts',
      component: Contacts
    },

    {
      path: '/:pathMatch(.*)*',
      name: 'error-404',
      component: Error404
    }
  ]
});

export { router }