<script>
import axios from "axios";
import { store } from './data/store';
import Header from './components/partials/Header.vue';
import ProjectCard from "./components/ProjectCard.vue";



export default {
  name: 'App',
  data() {
    return {
      apiProjectResults: [],
      apiTypeResults: [],
      apiTechnologiesResults: [],
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
          this.apiProjectResults = results.data['projects'];
          this.apiTypeResults = results.data['types'];
          this.apiTechnologiesResults = results.data['technologies'];
          console.log();
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
  <RouterView :projects="apiProjectResults"
              :typesProps="apiTypeResults"/>

</template>


<style lang="scss" scoped>

</style>
