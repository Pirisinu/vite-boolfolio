<script>
import { store } from '../data/store';
import axios from "axios";

export default {
  name: 'ProjectDetails',
  components: {},
  props: {},
  data() {
    return {
      project:[]
    }
  },
  mounted() {
    this.getAPI(store.apiUrl + 'show-project/' + this.$route.params.slug)
    console.log(this.projects);
  },
  beforeDestroy() {},
  methods: {
    getAPI(url) {
      axios.get(url)
        .then((response) => {
          this.project = response.data;
        })
        .catch((error) => {
          // handle error
          console.log(error);
        });
    },
  }
}
</script>

<template>
  <div>
    ciao
    {{ this.project.title }}
  </div>
</template>

<style lang="scss" scoped>
</style>
