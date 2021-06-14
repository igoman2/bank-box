<template>
  <div>
    <Header @drawer="setDrawer"></Header>

    <v-row style="height: 100%" no-gutters>
      <v-col
        cols="auto"
        class="pt-0 mr-10 pl-4"
        style="width: 210px; background-color: rgb(235, 245, 255) !important"
      >
        <Menu />
      </v-col>
      <v-col cols="12" md="9" class="mt-10"><router-view /></v-col>
      <!-- <Sidebar :expand-on-hover.sync="expandOnHover"></Sidebar> -->
    </v-row>
  </div>
</template>

<script>
import Header from "../layouts/Header";
// import Sidebar from "../layouts/Sidebar";
import Menu from "../components/Menu";

export default {
  name: "Layout",
  components: {
    Menu,
    // Sidebar,
    Header,
  },
  data: () => ({
    expandOnHover: false,
  }),
  methods: {
    setDrawer: function (flag) {
      this.drawer = false;
      this.drawer = flag;
    },
  },
};
</script>
