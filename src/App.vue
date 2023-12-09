<script>
import axios from "axios";
import { store } from './data/store';
import Header from './components/partials/Header.vue';
import ProjectsCard from './components/ProjectsCard.vue';

export default {
  name: 'App',
  data() {
    return {
      apiResults: []
    };
  },
  components: {
    Header,
    ProjectsCard
  },
  methods: {
    getApi() {
      axios.get(store.apiUrl + 'projects-api')
        .then(results => {
          this.apiResults = results.data.result;
        })
        .catch(error => {
          console.error('Error fetching API:', error);
        });
    }
  },
  mounted() {
    this.getApi();
  }
}
</script>

<template>
  <div>
    <Header />
    <div class="main-wrapper">
      <div class="container">
        <ProjectsCard :projects="apiResults" />
      </div>  
    </div>  
  </div>    
</template>

<style lang="scss" scoped>
/* Stili aggiuntivi se necessario */
</style>
