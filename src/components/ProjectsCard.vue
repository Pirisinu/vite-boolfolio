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
  <div>
    <h2>Projects List</h2>
    <ul>
      <li v-for="project in projects" :key="project.id">
        {{ console.log(project)
         }}
        {{ project.title }}
      </li>  
    </ul>  
  </div>    
</template>

<style scoped>

</style>
