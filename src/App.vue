<template>
  <v-app>
    <v-main>
      <v-app-bar color="#DC143C" class="my-app-bar-text">
        <v-toolbar-title>Most Used Words</v-toolbar-title>
      </v-app-bar>
      <HomePage />
    </v-main>
  </v-app>
</template>

<script>
import HomePage from "./components/HomePage.vue"

export default {
  name: 'App',

  components: {
    HomePage,
  },

  data: () => ({
    //
  }),
}
</script>

<style scoped>
  .my-app-bar-text {
    color:white;
  }
</style>
