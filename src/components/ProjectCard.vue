<script>
export default {
  name: 'ProjectsCard',
  data() {
    return {
      types: [],
    };
  },
  props: {
    projects: {
      type: Array,
      required: true
    },
    typesProps: {
      type: Array,
      required: true,
    },
  },
  components:{
  },
  methods:{
    getTypeName(typeId) {
      //console.log(typeId);
      const typeName = this.typesProps.find(type => type.id === typeId);
      //console.log(typeName.name);
      return typeName.name ;
    },
  }
}
</script>

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
            <h6><strong>Technologies:</strong></h6>
            
            <ul>
              <li v-for="technology in project.technologies" :key="technology.id">
                {{ technology.name }}
              </li>
            </ul>
            <h6><strong>Type:</strong></h6>
            <p class="card-text">{{ getTypeName(project.type_id) }}</p>
            <h6><strong>Description:</strong></h6>
            <p class="card-text">{{ project.description }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>

 
</template>

<style scoped>

</style>
