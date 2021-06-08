<template>
  <v-container>
    <v-row no-gutters> 매월 일정금액을 저축할 때 </v-row>
    <v-row no-gutters>
      <input
        class="border"
        v-model="message"
        placeholder="월저축액"
        type="text"
      />원씩 <input class="border" v-model="message" placeholder="기간" /> 개월
      간
    </v-row>
    <v-row class="pt-3" no-gutters>
      <input
        lass="border"
        v-model="message"
        placeholder="금리"
        type="number"
      />%의 적금상품에 저축하면?
    </v-row>
    <v-row class="pt-3" justify="end" no-gutters>
      <v-btn>결과 보기</v-btn>
    </v-row>
    <v-row class="pt-3" no-gutters>
      <input type="number" v-model="result" />원</v-row
    >
  </v-container>
</template>

<script>
export default {
  name: "CalculateSaving",
  components: {},
  data: () => ({
    message: "",
  }),
  created() {},
  watch: {
    message() {
      return (this.message = this.message.replace(/[^0-9]/g, ""));
    },
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
