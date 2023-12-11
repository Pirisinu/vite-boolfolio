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
          
        })
        .catch(error => {
          console.error('Error fetching API:', error);
        });
    }
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
