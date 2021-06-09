<template>
  <v-row style="height: 100%" no-gutters>
    <v-col
      cols="auto"
      class="pt-0 mr-10 pl-4"
      style="width: 210px; background-color: rgb(235, 245, 255) !important"
    >
      <Menu />
    </v-col>
    <v-col cols="7" class="mt-10"><router-view /></v-col>
  </v-row>
</template>

<script>
import Menu from "../components/Menu";
export default {
  name: "Layout",
  components: {
    Menu,
  },
};
</script>
