<script>
import axios from "axios";
import { store } from './data/store';
import Header from './components/partials/Header.vue';
import ProjectCard from "./components/ProjectCard.vue";



export default {
  name: 'App',
  data() {
    return {
      store
    };
  },
  components: {
    Header,
    ProjectCard,
},
  methods: {
    getApi() {
      axios.get(store.apiUrl + 'projects-api')
        .then(results => {
          this.store.projects = results.data.projects;
        })
        .catch(error => {
          console.error('Error fetching API:', error);
        });
    },
    getProjectDetails() {
      const slug = this.$route.params.slug;
      axios.get(`/api/projects/${slug}`)
        .then(response => {
          this.project = response.data.project;
        })
        .catch(error => {
          console.error('Error fetching project details:', error);
          // Handle the error, e.g., redirect to a 404 page
          this.$router.push({ name: 'error-404' });
        });
    },
  },
  mounted() {
    console.log(store.apiAll);

    this.getApi();
  }
}
</script>

<template>
  <Header />
  <div class="h-100">
    <div class="container m-3">
      <router-view></router-view>
    </div>
  </div>
  
</template>


<style lang="scss" scoped>

</style>
