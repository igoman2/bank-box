<template>
  <v-container fluid>
    <div style="font-size: 40px; font-weight: bold; margin-bottom: 40px">
      투자 성향 위험 등급 안내 및 자가 진단
    </div>
    <v-row no-gutters>
      <v-col cols="auto" class="pa-0" style="font-size: 40px; color: #c3c3c3">
        GUIDE
      </v-col>
      <v-col cols="9" offset="1" class="pa-0" style="font-size: 14px">
        <v-row no-gutters class="pt-2">
          ∙ 본 일반투자자 투자자정보 확인서는 자본시장과 금융투자업에 관한
          법률에 따라 고객님의 투자성향을 파악하여, 그에 적합한 투자권유를
          해드리기 위한 기초 자료로 활용됩니다. 고객님께 가장 적합한 투자대안을
          제시해 드리기 위하여 정확한 답변을 필요로 하오니 최대한 고객님의
          상황에 부합하거나 가장 가까운 항목을 선택해 주시기 바랍니다.
        </v-row>
        <v-row no-gutters class="">
          ∙ 고객님께서 제공해주신 투자목적, 자산현황, 투자경험에 대한 소중한
          정보를 바탕으로, 투자성향에 가장 적합한 상품을 추천해드리겠습니다.
        </v-row>
      </v-col>
    </v-row>
    <div class="question mt-10">
      <span class="number"> 1 </span>현재 고객님의 나이는 어떻게 되십니까?
    </div>

    <v-radio-group v-model="ages" row>
      <v-radio label="만6세 미만" value="age-1"></v-radio>
      <v-radio label="만65세 이상" value="age-2"></v-radio>
    </v-radio-group>
    <div class="question">
      <span class="number"> 2 </span>
      향후 고객님의 연간수입원에 대한 예상은 어떻게 되십니까?
    </div>
    <v-radio-group v-model="incomes" col>
      <v-radio
        label="현재 일정한 수입이 없으며, 연금이 주 수입원임"
        value="income-1"
      ></v-radio>
      <v-radio
        label="현재 일정한 수입이 발생하고 있으나, 향후 감소하거나 불안정할 것으로 예상"
        value="income-2"
      ></v-radio>
      <v-radio
        label="현재 일정한 수입이 발생하고 있으며, 향후 현재 수준을 유지하거나 증가할 것으로 예상"
        value="income-3"
      ></v-radio>
    </v-radio-group>
    <div class="question">
      <span class="number"> 3 </span>
      기존에 보유하고 계신 총자산 대비 금융자산의 비중은 어느 정도입니까?
    </div>

    <v-radio-group v-model="ratios" row>
      <v-radio label="5% 이하" value="ratio-1"></v-radio>
      <v-radio label="10% 이하" value="ratio-2"></v-radio>
      <v-radio label="20% 이하" value="ratio-3"></v-radio>
      <v-radio label="30% 이하" value="ratio-4"></v-radio>
      <v-radio label="30% 초과" value="ratio-5"></v-radio>
    </v-radio-group>
    <div class="question">
      <span class="number"> 4 </span>
      투자해 보신 경험이 있는 것을 모두 선택해 주십시오(중복체크 가능)
    </div>

    <v-radio-group v-model="experiences1" row class="pa-0" multiple>
      <v-radio label="선물 / 옵션" value="experience1-1"></v-radio>
      <v-radio label="주식 신용 거래" value="experience1-3"></v-radio>
      <v-radio label="ELW" value="experience1-4"></v-radio>
      <v-radio label="원금비보장형ELS/DLS/EL" value="experience1-5"></v-radio>
    </v-radio-group>
    <v-row> </v-row>

    <v-radio-group v-model="experiences1_year" row class="pa-0">
      <v-radio label="1년 미만" value="experiences1_year-1"></v-radio>
      <v-radio label="1년 이상 3년 미만" value="experiences1_year-2"></v-radio>
      <v-radio label="3년 이상" value="experiences1_year-3"></v-radio>
    </v-radio-group>
    <v-row class="list-bottom-border"> </v-row>

    <v-radio-group v-model="experiences2" row class="pa-0 mt-7" multiple>
      <v-radio label="주식" value="experiences2-1"></v-radio>
      <v-radio label="주식형 펀드" value="experiences2-2"></v-radio>
      <v-radio label="해외펀드" value="experiences2-3"></v-radio>
      <v-radio label="원금보장형ELS/DLS/EL" value="experiences2-4"></v-radio>
      <v-radio label="투자자문/일임(Wrap)" value="experiences2-5"></v-radio>
      <v-radio label="외화증권" value="experiences2-6"></v-radio>
    </v-radio-group>
    <v-row> </v-row>

    <v-radio-group v-model="experiences2_year" row class="pa-0">
      <v-radio label="1년 미만" value="experiences2_year-1"></v-radio>
      <v-radio label="1년 이상 3년 미만" value="experiences2_year-2"></v-radio>
      <v-radio label="3년 이상" value="experiences2_year-3"></v-radio>
    </v-radio-group>
    <v-row class="list-bottom-border"> </v-row>

    <v-radio-group v-model="experiences3" row class="pa-0 mt-7" multiple>
      <v-radio label="채권/혼합형 펀드" value="experiences3-1"></v-radio>
      <v-radio label="신탁" value="experiences3-2"></v-radio>
      <v-radio label="채권" value="experiences3-3"></v-radio>
    </v-radio-group>
    <v-row> </v-row>
    <v-radio-group v-model="experiences3_year" row class="pa-0">
      <v-radio label="1년 미만" value="experiences3_year-1"></v-radio>
      <v-radio label="1년 이상 3년 미만" value="experiences3_year-2"></v-radio>
      <v-radio label="3년 이상" value="experiences3_year-3"></v-radio>
    </v-radio-group>

    <v-row class="list-bottom-border"> </v-row>

    <v-radio-group v-model="experiences4" row class="pa-0 mt-7">
      <v-radio
        label="금융투자상품에 투자해 본 경험이 없음"
        value="experiences4-1"
      ></v-radio>
    </v-radio-group>
    <div class="question">
      <span class="number"> 5 </span>
      고객님은 다음 중 어떤 목적으로 투자하는 편입니까?
    </div>

    <v-radio-group v-model="purposes" row>
      <v-radio
        label="원금보존 가능성을 포기하기 어렵기 때문에 예적금 수익률 보다 1~2%정도만 더 나오면 됨 (투자수익을 고려하나 원금보존이 더 중요)"
        value="purpose-1"
      ></v-radio>
      <v-radio
        label="예적금 수익률보다 3~5%정도 기대할 수 있다면 원금보존 가능성은 좀 포기할 수 있음 (원금보존을 고려하나 투자수익이 더 중요)"
        value="purpose-2"
      ></v-radio>
      <v-radio
        label="고수익을 기대하고 있으며, 원금손실 가능성은 감수할 수 있음 (손실 위험이 있더라도 투자수익이 더 중요)"
        value="purpose-3"
      ></v-radio>
    </v-radio-group>
    <div class="question">
      <span class="number"> 6 </span>
      고객님께서 감내하실 수 있는 투자수익 및 위험수준은 어느정도 입니까?
    </div>

    <v-radio-group v-model="risks" row>
      <v-radio
        label="무슨 일이 있어도 투자 원금은 보전되어야 한다."
        value="risk-1"
      ></v-radio>
      <v-radio
        label="±10% 정도만 변동하더라도, 매도하고 빠져나와야 안심이 될 것 같다(±10% 범위 내 감수)"
        value="risk-2"
      ></v-radio>
      <v-radio
        label="±20% 정도까지는 당황하지 않고 기다리거나 상황에 따라서 추가매수 등 대응도 문제없다(±20% 범위 내 감수)"
        value="risk-3"
      ></v-radio>
      <v-radio
        label="±30% 정도 변동은 버틸 수 있으며, 때때로 그 이상의 변동을 기대하여 적극적으로 운용하려고 한다(±30% 범위 내 감수)"
        value="risk-4"
      ></v-radio>
    </v-radio-group>

    <div class="question">
      <span class="number"> 7 </span>
      고객님의 금융지식 수준(이해도)은 어느 정도라고 생각하십니까?
    </div>

    <v-radio-group v-model="informations" row>
      <v-radio
        label="예적금 외에 다른 금융투자상품에 투자해본적이 없음"
        value="information-1"
      ></v-radio>
      <v-radio
        label="주식, 채권, 펀드같은 일반적인 상품 정도는 설명만 좀 들으면, 투자할지 여부를 결정할 수 있음"
        value="information-2"
      ></v-radio>
      <v-radio
        label="주식, 채권, 펀드같은 일반적인 상품은 설명을 듣지 않아도 잘 알고 있으며, 투자 판단을 스스로 내릴 수 있음"
        value="information-3"
      ></v-radio>
      <v-radio
        label="파생상품을 포함한 대부분의 금융투자상품에 대해서 충분히 잘 알고 있음"
        value="information-4"
      ></v-radio>
    </v-radio-group>

    <div class="question">
      <span class="number"> 8 </span>
      파생상품, 파생결합증권 및 파생상품펀드에 투자한 경험은 얼마나 되십니까?
    </div>

    <v-radio-group v-model="exps" row>
      <v-radio label="1년 미만" value="exp-1"></v-radio>
      <v-radio label="1년 이상 3년 미만" value="exp-2"></v-radio>
      <v-radio label="3년 이상" value="exp-3"></v-radio>
    </v-radio-group>

    <div class="question">
      <span class="number"> 9 </span>
      고령투자자,주부,은퇴자 등 금융투자상품에 대한 이해가 부족하거나 투자경험이
      없는 투자자의 경우 「금융소비자 보호 모범규준」에 따른 금융취약 계층으로
      금융소비자의 불이익 사항을 다른 정보보다 우선하여 설명 받으실 수 있습니다.
      해당 항목에 체크하여 주시기 바랍니다.
    </div>

    <v-radio-group v-model="lasts" row>
      <v-radio
        label="금융투자상품에 대한 이해가 부족하거나 투자 경험이 없음"
        value="last-1"
      ></v-radio>
      <v-radio label="해당사항 없음" value="last-2"></v-radio>
    </v-radio-group>

    <div class="question">
      <span class="number"> 10 </span>MBTI를 입력해주세요
    </div>
    <v-select :items="items" label="MBTI" v-model="mbti"></v-select>

    <v-row no-gutters justify="end" class="mt-6">
      <v-btn @click="goto"> 제출 </v-btn>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "Recommandation",
  components: {},
  data: () => ({
    items: [
      "ISTJ",
      "ISTP",
      "ESTP",
      "ESTJ",
      "ISFJ",
      "ISFP",
      "ESFP",
      "ESFJ",
      "INFJ",
      "INFP",
      "ENFP",
      "ENFJ",
      "INTJ",
      "INTP",
      "ENTP",
      "ENTJ",
    ],
    ages: null,
    incomes: null,
    ratios: null,
    experiences1: null,
    experiences2: null,
    experiences3: null,
    experiences1_year: null,
    experiences2_year: null,
    experiences3_year: null,
    purposes: null,
    risks: null,
    informations: null,
    exps: null,
    lasts: null,
    mbti: null,
  }),
  created() {},
  watch: {},
  methods: {
    goto() {
      if (
        this.ages == null ||
        this.incomes == null ||
        this.ratios == null ||
        this.experiences1 == null ||
        this.experiences2 == null ||
        this.experiences3 == null ||
        this.experiences1_year == null ||
        this.experiences2_year == null ||
        this.experiences3_year == null ||
        this.purposes == null ||
        this.risks == null ||
        this.informations == null ||
        this.exps == null ||
        this.lasts == null ||
        this.mbti == null
      ) {
        alert("입력을 완료하세요");
      } else {
        this.$router.push({
          path: "recommand-invest",
        });
      }
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
.number {
  font-size: 50px;
  font-weight: 300 !important;
}
</style>
