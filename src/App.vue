<template>
  <v-app>
    <v-app-bar app color="primary" dark>
      <h3>Char Sheet Generator</h3>

      <v-spacer></v-spacer>

      <v-btn text @click="$router.push('/')">
        Home
      </v-btn>
      <v-btn text @click="$router.push('/list')">
        List
      </v-btn>
    </v-app-bar>

    <v-main>
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script>
import HelloWorld from "./components/HelloWorld";

export default {
  name: "App",

  components: {
    HelloWorld,
  },

  data: () => ({
    //
  }),
};
</script>
