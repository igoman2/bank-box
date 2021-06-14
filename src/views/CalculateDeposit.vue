<template>
  <v-container>
    <v-row no-gutters style="font-size: 25px; font-weight: bold">
      목돈을 예치할 때
    </v-row>
    <v-row no-gutters class="mt-2">
      <input
        class="border"
        v-model="money"
        placeholder="예치금액"
        oninput="this.value = this.value.replace(/[^0-9.]/g, '').replace(/(\..*)\./g, '$1');"
      />원을
      <input
        class="border ml-md-10"
        v-model="period"
        placeholder="기간"
        oninput="this.value = this.value.replace(/[^0-9.]/g, '').replace(/(\..*)\./g, '$1');"
      />
      개월 간
    </v-row>
    <v-row class="pt-5" no-gutters>
      <input
        lass="border"
        v-model="interest"
        placeholder="금리"
        oninput="this.value = this.value.replace(/[^0-9.]/g, '').replace(/(\..*)\./g, '$1');"
      />%의 예금상품에 저축하면?
    </v-row>
    <v-row class="pt-3" justify="end" no-gutters v-model="result">
      <v-btn @click="calc">결과 보기</v-btn>
    </v-row>
    <v-row class="pt-13" justify="end" no-gutters>
      <input type="text" v-model="result" readonly />원</v-row
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
  watch: {},
  methods: {
    calc() {
      let result = (this.money * this.period * this.interest) / 100 / 12;
      // 이자소득세 15.4%
      result = result - result * 0.154;
      this.result = Math.round(result);
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
