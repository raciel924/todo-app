<template>
<v-app>
    <v-navigation-drawer app clipped permanent>
      <!-- Contenido del sidebar -->
      <v-list
      dense
      nav
      >
        <v-list-item 
        v-for="item in items"
            :key="item.title"
            :to="{name: item.to}"
        link>
          <v-list-item-icon>
            <v-icon>{{item.icon}}</v-icon>
          </v-list-item-icon>
          <v-list-item-title>{{item.title}}</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-main>
        <router-view></router-view>
      <v-container>
        <!-- Contenido -->
      </v-container>
    </v-main>
  </v-app>

</template>

<script>
export default {
    data() {
    return {
        items: [
            { title: 'Crear tarea', icon: 'mdi mdi-pencil', to:'create-task' },
            { title: 'Listar tareas', icon: 'mdi mdi-format-list-numbered-rtl', to: 'list-task' },
            { title: 'tareas completadas', icon: 'mdi mdi-check', to: 'list-completed-task' },
            { title: 'tareas pendientes', icon: 'mdi mdi-pause', to: 'list-pending-task' },
            { title: 'Completar tarea', icon:'mdi mdi-checkbox-marked-circle-plus-outline', to: 'complete-task' },
            { title: 'Eliminar tarea', icon:'mdi-delete', to: 'delate-task' },
            { title:'Log out', icon:'mdi mdi-exit-to-app', to: 'log-out' },

          ],
    };
  }
}
</script>