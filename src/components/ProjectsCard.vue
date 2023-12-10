<script>
export default {
  name: 'ProjectsCard',
  props: {
    projects: {
      type: Array,
      required: true
    }
  }
}
</script>

<!-- Nel template di ProjectsCard.vue -->
<template>
  <h2>Projects List:</h2>
  <div class="d-flex justify-content-evenly py-4 gap-2 flex-wrap">
    <div class="card mb-3 d-flex" style="width: 400px;" v-for="project in projects" :key="project.id">
      <div class="row g-0">
        <div class="col-md-4">
          <img src="..." class="img-fluid rounded-start" alt="...">
        </div>
        <div class="col-md-8">
          <div class="card-body">
            <h5 class="card-title"><strong>{{ project.title }}</strong></h5>
            <h6><strong>Description:</strong></h6>
            <p class="card-text">{{ project.description }}</p>
            <p class="card-text"><small class="text-body-secondary">Last updated 3 mins ago</small></p>
          </div>
        </div>
      </div>
    </div>
  </div>

 
</template>

<style scoped>

</style>
