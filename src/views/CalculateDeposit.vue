<template>
  <v-container>
    <v-row no-gutters> 목돈을 예치할 때 </v-row>
    <v-row no-gutters>
      <input class="border" v-model="money" placeholder="예치금액" />원을
      <input class="border" v-model="period" placeholder="기간" /> 개월 간
    </v-row>
    <v-row class="pt-3" no-gutters>
      <input lass="border" v-model="interest" placeholder="금리" />%의
      적금상품에 저축하면?
    </v-row>
    <v-row class="pt-3" justify="end" no-gutters v-model="result">
      <v-btn>결과 보기</v-btn>
    </v-row>
    <v-row class="pt-3" no-gutters>
      <input type="text" v-model="result" />원</v-row
    >
  </v-container>
</template>

<script>
export default {
  name: "CalculateDeposit",
  components: {},
  data: () => ({
    money: "",
    period: "",
    interest: "",
    result: "",
  }),
  created() {},
  watch: {
    activeMenu: "changeMenu",
  },
  methods: {},
};
</script>

<style scoped>
input,
textarea {
  border: 1px solid black;
}
</style>
