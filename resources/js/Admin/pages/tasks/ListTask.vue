<template>
    <v-container>
        <h3>lista de tareas</h3>
        <v-card >
           <v-card-title></v-card-title> 
           <v-card-text></v-card-text>
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