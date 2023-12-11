<script>
import { store } from '../data/store';

export default {
  name: 'ProjectsCard',
  data() {
    return {
      store
    };
  },
  props: {
  
  },
  components:{
  },
  methods:{
    
  },
  mounted(){

  }
}
</script>

<template>
  <h2>Projects List:</h2>

  <div class="d-flex justify-content-evenly py-4 gap-2 flex-wrap">
    <div
      class="card mb-3 d-flex"
      style="width: 400px;"
      v-for="project in this.store.projects"
      :key="project.id">
    {{ console.log(project.technologies)}}
        <div class="row g-0">
          <div class="col-md-4">
            <img src="..." class="img-fluid rounded-start" alt="...">
          </div>
          
          <div class="col-md-8">
            <div class="card-body bg-body-tertiary d-flex flex-column align-items-center">
              
              
              <h5 class="card-title"><strong>{{ project.title }}</strong></h5>

              <p class="card-text mb-0"><strong>Technologies:</strong></p>
              <div>
                <span v-if="!project.technologies.length" class="badge text-bg-warning m-1">
                  No Technology
                </span>
                <span
                class="badge bg-success m-1"
                v-for="technology in project.technologies"
                :key="technology.id"
                >
                  {{ technology.name }}
                </span>
              </div>
            
            <h6><strong>Type:</strong>{{ project.type?.name || "No Type" }}</h6>
            <p class="card-text"></p>
            
            <router-link :to="({ name: 'ProjectDetails', params: { slug: project.slug } })">
              <button class="badge bg-black border-0">See more</button>
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </div>


</template>

<style scoped>

</style>
