<template>
  <v-app-bar app clipped-left clipped-right color="white" dark flat>
    <div>
      <v-app-bar-nav-icon
        class="grey--text"
        @click="setSidebarDrawer(!Sidebar_drawer)"
      />
    </div>

    <!---/Toggle sidebar part -->
    <v-spacer />
    <!---Logo part -->

    <v-spacer />
  </v-app-bar>
</template>
<script>
// Utilities
import { mapState, mapMutations, mapActions } from "vuex";

export default {
  name: "Header",
  components: {},
  props: {},
  data: () => ({}),

  computed: {
    ...mapState(["user", "Sidebar_drawer"]),
    user: {},
  },

  created: function () {},

  methods: {
    ...mapActions(["setLocale"]),
    ...mapMutations({
      setSidebarDrawer: "SET_SIDEBAR_DRAWER",
    }),

    setDrawer: function () {
      console.log("inner drawer");
      this.$emit("drawer", true);
    },
    goto: function (name) {
      this.$router.push({ name: name }).catch((error) => {
        if (error.name != "NavigationDuplicated") {
          throw error;
        }
        this.$router.go(this.$router.currentRoute);
      });

      this.expandOnHover = false;
    },
    // showhideLogo: function() {
    //   this.showLogo = !this.showLogo;
    // },
    // searchbox: function() {
    //   this.showSearch = !this.showSearch;
    // }
  },
};
</script>

<style lang="scss"></style>
