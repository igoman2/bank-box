<template>
  <v-container>
    <v-row no-gutters style="font-size: 25px; font-weight: bold">
      매월 일정금액을 저축할 때
    </v-row>
    <v-row no-gutters class="mt-2">
      <input
        class="border"
        v-model="money"
        placeholder="월저축액"
        type="text"
      />원씩
      <input class="border ml-10" v-model="period" placeholder="기간" /> 개월 간
    </v-row>
    <v-row class="pt-5" no-gutters>
      <input lass="border" v-model="interest" placeholder="금리" />%의
      적금상품에 저축하면?
    </v-row>
    <v-row class="pt-3" justify="end" no-gutters>
      <v-btn @click="calc">결과 보기</v-btn>
    </v-row>
    <v-row class="pt-3" no-gutters>
      <input type="number" v-model="result" readonly />원</v-row
    >
  </v-container>
</template>

<script>
export default {
  name: "CalculateSaving",
  components: {},
  data: () => ({
    money: "",
    period: "",
    interest: "",
    result: "",
  }),
  created() {},
  watch: {
    money() {
      return (this.money = this.money.replace(/[^0-9]/g, ""));
    },
    period() {
      return (this.period = this.period.replace(/[^0-9]/g, ""));
    },
    interest() {
      return (this.interest = this.interest.replace(/[^0-9]/g, ""));
    },
    result() {
      return (this.result = this.result.replace(/[^0-9]/g, ""));
    },
  },
  methods: {
    calc() {
      let result;
      result = this.money * Math.pow(1 + this.interest / 100, this.period);
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
