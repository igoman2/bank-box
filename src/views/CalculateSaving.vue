<template>
  <v-container>
    <v-row no-gutters> 매월 일정금액을 저축할 때 </v-row>
    <v-row no-gutters>
      <input class="border" v-model="message" placeholder="월저축액" />원씩
      <input class="border" v-model="message" placeholder="기간" /> 개월 간
    </v-row>
    <v-row class="pt-3" no-gutters>
      <input lass="border" v-model="message" placeholder="금리" />%의 적금상품에
      저축하면?
    </v-row>
    <v-row class="pt-3" justify="end" no-gutters>
      <v-btn>결과 보기</v-btn>
    </v-row>
    <v-row class="pt-3" no-gutters>
      <input type="text" v-model="result" />원</v-row
    >
  </v-container>
</template>

<script>
export default {
  name: "CalculateSaving",
  components: {},
  data: () => ({
    activeMenu: "voca1",
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

<style scoped>
input,
textarea {
  border: 1px solid black;
}
</style>
