<template>
  <v-container> asd </v-container>
</template>

<script>
export default {
  name: "Recommandation",
  components: {},
  data: () => ({
    activeMenu: "voca1",
    number: 1,
    vocaNum: 1,
    comment: [],
    korean: [],
    trans: [],
    imageFile: [],
    audioFile: [],
  }),
  created() {
    this.activeMenu = this.$router.meta.active;
  },
  watch: {
    activeMenu: "changeMenu",
  },
  methods: {
    changeMenu: function () {
      if (this.activeMenu == "voca1") {
        this.$router.push({ path: "/voca1" });
        this.init();
      } else {
        this.$router.push({ path: "/voca2" });
        this.init();
      }
    },
    add() {
      this.number++;
    },
    addVoca() {
      this.vocaNum++;
    },
    init() {
      this.number = 1;
      this.vocaNum = 1;
      this.comment = [];
      this.korean = [];
      this.trans = [];
      this.imageFile = [];
      this.transaudioFile = [];
    },
    save() {
      console.log(this.comment);
      console.log(this.korean);
      console.log(this.trans);
      console.log(this.imageFile);
      console.log(this.audioFile);
    },
  },
};
</script>

<style scoped></style>
