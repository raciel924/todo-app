<template>
    <v-container>
        <h3>lista de tareas</h3>
        <v-card v-for="data in getdata" :key="data.id" >
           <v-card-title>{{ data.name }}</v-card-title> 
           <v-card-text>{{ data.description }} </v-card-text>
           <div>
        <p v-if="data.state === 'pendiente'" class="pendiente">{{ data.state }}</p>
        <p v-else-if="data.state === 'Trabajando'" class="trabajando">{{ data.state }}</p>
        <p v-else class="terminada">{{ data.state }}</p>
    
      </div>
        </v-card>
    </v-container>
</template>
<script>
 export default {
    data() {
      return {
        getdata: [],
      }
    },
    created() {
        this.getData()
    },
    methods: {
        getData(){
            const datatas = JSON.parse(localStorage.getItem('DataTask'));
            this.getdata = datatas
            console.log(datatas)
        }
    },
 }

</script>
<style scoped>
.pendiente {
  color: red; /* Cambia el color según tus necesidades */
}

.trabajando {
  color: blue; /* Cambia el color según tus necesidades */
}

.terminada {
  color: green; /* Cambia el color según tus necesidades */
}
</style>