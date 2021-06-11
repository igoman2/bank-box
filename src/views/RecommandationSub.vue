<template>
  <v-container fluid>
    <v-data-table
      :headers="headers"
      :items="items"
      :items-per-page="5"
      class="elevation-1"
      @click:row="goto"
    >
      <!-- <template v-slot:item.name="{ item }">
        <span class="date" style="font-size: 16px">
          {{ changeDateFormat(item.purchase_date) }}
        </span> -->
      <!-- </template> -->
    </v-data-table>
  </v-container>
</template>

<script>
export default {
  name: "Recommandation",
  components: {},
  data: () => ({
    headers: [
      {
        text: "기관",
        align: "start",
        sortable: false,
        value: "organization",
      },
      { text: "펀드명", value: "name" },
      { text: "수익률(1개월)", value: "interest1M" },
      { text: "수익률(3개월)", value: "interest3M" },
      { text: "위험도", value: "danger" },
    ],
    items: [
      {
        organization: "트러스톤자산운용",
        name: "트러스톤ESG레벨업증권자투자신탁[주식]Ae클래스",
        interest1M: 6.08,
        interest3M: 22.35,
        danger: "초고위험",
      },
      {
        organization: "하나UBS자산운용",
        name: "하나UBS코리아중소형증권자투자신탁[주식]ClassC-E 상세보기",
        interest1M: 2.02,
        interest3M: 20.07,
        danger: "초고위험",
      },
      {
        organization: "미레에셋자산운용",
        name: "미래에셋미국블루칩인덱스증권투자신탁 1(주식)종류C-P2e 상세보기",
        interest1M: 1.17,
        interest3M: 8.08,
        danger: "고위험",
      },
    ],
  }),
  created() {},
  watch: {},
  methods: {
    goto() {
      console.log("asd");
      window.open("https://www.kbsec.com/go.able?linkcd=m01010005");
    },
  },
};
</script>

<style scoped>
.list-bottom-border {
  border-bottom: 1px;
  border-bottom-style: solid;
  border-bottom-color: rgb(219, 218, 218);
}
.question {
  font-size: 20px;
  font-weight: bold;
  margin-top: 40px;
}
</style>
