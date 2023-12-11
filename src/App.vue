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

          this.store.apiAll = results.data;
          this.store.apiProjectResults = results.data['projects'];
          this.store.apiTypeResults = results.data['types'];
          this.store.apiTechnologiesResults = results.data['technologies'];
          

          this.apiAll = results.data;
          this.apiProjectResults = results.data['projects'];
          this.apiTypeResults = results.data['types'];
          this.apiTechnologiesResults = results.data['technologies'];

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
    console.log(store.apiProjectResults);
    console.log(store.apiTypeResults);
    console.log(store.apiTechnologiesResults);
    this.getApi();
  }
}
</script>

<template>

  <Header />
  <router-view></router-view>
  
</template>


<style lang="scss" scoped>

</style>
