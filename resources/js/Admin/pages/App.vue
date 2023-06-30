<template>
   <v-app>
    <sidebar/>
    <v-main>
      <v-container>
        <router-view></router-view>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import sidebar from '../common/sidebar'
export default {
    name: "App",
    components: {
        sidebar
    }
}

</script>

<style>


</style>