<template>
  <v-container>
    <v-row justify="end">
      <v-col cols="2">
        <v-select
          :items="menus"
          label="상품을 고르세요"
          dense
          v-model="menu"
        ></v-select>
      </v-col>
      <v-col cols="auto">
        <v-btn @click="submit"> 검색 </v-btn>
      </v-col>
    </v-row>
    <v-row no-gutters class="mt-10 mb-10" style="font-weight: bold">
      기관과 금리를 확인하고 클릭하여 상세 정보를 확인하세요
    </v-row>
    <v-row no-gutters>
      <v-col>
        <v-list>
          <template v-for="(item, index) in items" :keys="index">
            <v-list-item :key="item.title" class="list-bottom-border pa-0">
              <v-list-item-content @click="goto(item.url)" class="item">
                <v-col cols="11" class="pa-0">
                  <v-list-item-title
                    v-html="item.title"
                    class="title"
                  ></v-list-item-title>
                  <v-row no-gutters>
                    <v-col class="py-0 pt-3">
                      <span
                        style="background-color: rgb(233, 233, 233)"
                        class="px-6 level-font-1"
                      >
                        {{ item.bank }}
                      </span>
                    </v-col>
                  </v-row>
                </v-col>
                <v-col cols="1">
                  <v-row no-gutters justify="end">
                    <span class="interest">
                      {{ item.interest + "%" }}
                    </span>
                  </v-row>
                </v-col>
              </v-list-item-content>
            </v-list-item>
          </template>
        </v-list>
        <v-pagination v-model="page" :length="5" circle></v-pagination>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
export default {
  name: "Saving",
  components: {},
  data: () => ({
    page: 1,
    menu: "",
    items: [
      // 적금
      {
        avatar: "https://cdn.vuetifyjs.com/images/lists/1.jpg",
        bank: "IBK기업은행",
        title: "i-ONE 놀이터적금",
        interest: 1.8,
        url:
          "https://mybank.ibk.co.kr/uib/jsp/guest/ntr/ntr70/ntr7010/PNTR701000_i2.jsp",
      },
      {
        avatar: "https://cdn.vuetifyjs.com/images/lists/1.jpg",
        bank: "IBK기업은행",
        title: "IBK D-day적금",
        interest: 2.5,
        url:
          "https://mybank.ibk.co.kr/uib/jsp/guest/ntr/ntr70/ntr7010/PNTR701000_i2.jsp",
      },
      {
        avatar: "https://cdn.vuetifyjs.com/images/lists/1.jpg",
        bank: "IBK기업은행",
        title: "IBK첫만남통장",
        interest: 2,
        url:
          "https://mybank.ibk.co.kr/uib/jsp/guest/ntr/ntr70/ntr7010/PNTR701000_i2.jsp",
      },
      {
        avatar: "https://cdn.vuetifyjs.com/images/lists/1.jpg",
        bank: "IBK기업은행",
        title: "IBK W소확행통장",
        interest: 3.1,
        url:
          "https://mybank.ibk.co.kr/uib/jsp/guest/ntr/ntr70/ntr7010/PNTR701000_i2.jsp",
      },
      {
        avatar: "https://cdn.vuetifyjs.com/images/lists/1.jpg",
        bank: "IBK기업은행",
        title: "IBK SOPITV NOW적금",
        interest: 5,
        url:
          "https://mybank.ibk.co.kr/uib/jsp/guest/ntr/ntr70/ntr7010/PNTR701000_i2.jsp",
      },
      {
        avatar: "https://cdn.vuetifyjs.com/images/lists/1.jpg",
        bank: "IBK기업은행",
        title: "IBK생활금융적금",
        interest: 2.5,
        url:
          "https://mybank.ibk.co.kr/uib/jsp/guest/ntr/ntr70/ntr7010/PNTR701000_i2.jsp",
      },
      {
        avatar: "https://cdn.vuetifyjs.com/images/lists/1.jpg",
        bank: "IBK기업은행",
        title: "IBK웅진스마트올통장[적립식중금채]",
        interest: 7,
        url:
          "https://mybank.ibk.co.kr/uib/jsp/guest/ntr/ntr70/ntr7010/PNTR701000_i2.jsp",
      },

      {
        avatar: "https://cdn.vuetifyjs.com/images/lists/1.jpg",
        bank: "KB국민은행",
        title: "KB내맘대로적금",
        interest: 2,
        url:
          "https://obank.kbstar.com/quics?page=C016613&cc=b061496:b061645&isNew=N&prcode=DP01000821",
      },
      {
        avatar: "https://cdn.vuetifyjs.com/images/lists/1.jpg",
        bank: "KB국민은행",
        title: "직장인우대적금",
        interest: 1.95,
        url:
          "https://obank.kbstar.com/quics?page=C016613&cc=b061496:b061645&isNew=N&prcode=DP01000228",
      },
      {
        avatar: "https://cdn.vuetifyjs.com/images/lists/1.jpg",
        bank: "KB국민은행",
        title: "KB장병내일준비적금",
        interest: 5.5,
        url:
          "https://obank.kbstar.com/quics?page=C016613&cc=b061496:b061645&isNew=N&prcode=DP01000939",
      },
      {
        avatar: "https://cdn.vuetifyjs.com/images/lists/1.jpg",
        bank: "KB국민은행",
        title: "KB맑은하늘적금",
        interest: 2.1,
        url:
          "https://obank.kbstar.com/quics?page=C016613&cc=b061496:b061645&isNew=N&prcode=DP01000942",
      },
      {
        avatar: "https://cdn.vuetifyjs.com/images/lists/1.jpg",
        bank: "KB국민은행",
        title: "KB국민ONE적금",
        interest: 1.65,
        url:
          "https://obank.kbstar.com/quics?page=C016613&cc=b061496:b061645&isNew=N&prcode=DP01000333",
      },
      {
        avatar: "https://cdn.vuetifyjs.com/images/lists/1.jpg",
        bank: "KB국민은행",
        title: "KB마이핏적금",
        interest: 2.7,
        url:
          "https://obank.kbstar.com/quics?page=C016613&cc=b061496:b061645&isNew=N&prcode=DP01001242",
      },
      {
        avatar: "https://cdn.vuetifyjs.com/images/lists/1.jpg",
        bank: "KB국민은행",
        title: "KB Young Youth 적금",
        interest: 2.15,
        url:
          "https://obank.kbstar.com/quics?page=C016613&cc=b061496:b061645&isNew=N&prcode=DP01000940",
      },

      {
        avatar: "https://cdn.vuetifyjs.com/images/lists/1.jpg",
        bank: "신한은행",
        title: "신한 주거래 드림(Dream)적금",
        interest: 1.9,
        url:
          "https://bank.shinhan.com/index.jsp?referrer=https%3A%2F%2Fwww.google.com%2F#020102010110",
      },
      {
        avatar: "https://cdn.vuetifyjs.com/images/lists/1.jpg",
        bank: "신한은행",
        title: "신한 스마트 적금",
        interest: 1.6,
        url:
          "https://bank.shinhan.com/index.jsp?referrer=https%3A%2F%2Fwww.google.com%2F#020102010110",
      },
      {
        avatar: "https://cdn.vuetifyjs.com/images/lists/1.jpg",
        bank: "신한은행",
        title: "신한 첫급여 드림(DREAM) 적금",
        interest: 4.2,
        url:
          "https://bank.shinhan.com/index.jsp?referrer=https%3A%2F%2Fwww.google.com%2F#020102010110",
      },
      {
        avatar: "https://cdn.vuetifyjs.com/images/lists/1.jpg",
        bank: "신한은행",
        title: "신한 첫거래 세배드림(DREAM) 적금",
        interest: 2.4,
        url:
          "https://bank.shinhan.com/index.jsp?referrer=https%3A%2F%2Fwww.google.com%2F#020102010110",
      },
      {
        avatar: "https://cdn.vuetifyjs.com/images/lists/1.jpg",
        bank: "신한은행",
        title: "신한 S드림(DREAM) 적금",
        interest: 1,
        url:
          "https://bank.shinhan.com/index.jsp?referrer=https%3A%2F%2Fwww.google.com%2F#020102010110",
      },

      {
        avatar: "https://cdn.vuetifyjs.com/images/lists/1.jpg",
        bank: "우리은행",
        title: "WON 적금",
        interest: 1.9,
        url:
          "https://spot.wooribank.com/pot/Dream?withyou=PODEP0021&cc=c007095:c009166;c012263:c012399&PLM_PDCD=P010002353&PRD_CD=P010002353&ALL_GB=&depKind=A04",
      },
      {
        avatar: "https://cdn.vuetifyjs.com/images/lists/1.jpg",
        bank: "우리은행",
        title: "우리 Magic 적금 by 우리카드",
        interest: 6,
        url:
          "https://spot.wooribank.com/pot/Dream?withyou=PODEP0021&cc=c007095:c009166;c012263:c012399&PLM_PDCD=P010002409&PRD_CD=P010002409&ALL_GB=&depKind=A04",
      },
      {
        avatar: "https://cdn.vuetifyjs.com/images/lists/1.jpg",
        bank: "우리은행",
        title: "스무살 우리 정기적금",
        interest: 3,
        url:
          "https://spot.wooribank.com/pot/Dream?withyou=PODEP0021&cc=c007095:c009166;c012263:c012399&PLM_PDCD=P010002291&PRD_CD=P010002291&ALL_GB=&depKind=A04",
      },
      {
        avatar: "https://cdn.vuetifyjs.com/images/lists/2.jpg",
        bank: "우리은행",
        title: "우리 Magic 적금 by 현대카드",
        interest: 5.7,
        url:
          "https://spot.wooribank.com/pot/Dream?withyou=PODEP0021&cc=c007095:c009166;c012263:c012399&PLM_PDCD=P010002384&PRD_CD=P010002384&ALL_GB=&depKind=A04",
      },
      {
        avatar: "https://cdn.vuetifyjs.com/images/lists/3.jpg",
        bank: "우리은행",
        title: "시니어플러스 우리적금",
        interest: 1.56,
        url:
          "https://spot.wooribank.com/pot/Dream?withyou=PODEP0021&cc=c007095:c009166;c012263:c012399&PLM_PDCD=P010002345&PRD_CD=P010002345&ALL_GB=&depKind=A04",
      },

      {
        avatar: "https://cdn.vuetifyjs.com/images/lists/3.jpg",
        bank: "하나은행",
        title: "하나의 여행 적금",
        interest: 2.3,
        url:
          "https://kebhana.com/cont/mall/mall08/mall0801/mall080102/1473850_115157.jsp",
      },
      {
        avatar: "https://cdn.vuetifyjs.com/images/lists/3.jpg",
        bank: "하나은행",
        title: "펫사랑 적금",
        interest: 1.5,
        url:
          "https://kebhana.com/cont/mall/mall08/mall0801/mall080102/1470991_115157.jsp",
      },
      {
        avatar: "https://cdn.vuetifyjs.com/images/lists/3.jpg",
        bank: "하나은행",
        title: "하나 원큐 적금",
        interest: 2,
        url:
          "https://kebhana.com/cont/mall/mall08/mall0801/mall080102/1462078_115157.jsp",
      },
      {
        avatar: "https://cdn.vuetifyjs.com/images/lists/3.jpg",
        bank: "하나은행",
        title: "금연 성공 적금",
        interest: 2.5,
        url:
          "https://kebhana.com/cont/mall/mall08/mall0801/mall080102/1465820_115157.jsp",
      },
      {
        avatar: "https://cdn.vuetifyjs.com/images/lists/3.jpg",
        bank: "하나은행",
        title: "평생 군인 적금",
        interest: 4.5,
        url:
          "https://kebhana.com/cont/mall/mall08/mall0801/mall080102/1463826_115157.jsp",
      },
      {
        avatar: "https://cdn.vuetifyjs.com/images/lists/3.jpg",
        bank: "하나은행",
        title: "(아이)꿈하나 적금",
        interest: 1.5,
        url:
          "https://kebhana.com/cont/mall/mall08/mall0801/mall080102/1452125_115157.jsp",
      },
      {
        avatar: "https://cdn.vuetifyjs.com/images/lists/3.jpg",
        bank: "하나은행",
        title: "도전365 적금",
        interest: 2,
        url:
          "https://kebhana.com/cont/mall/mall08/mall0801/mall080102/1452858_115157.jsp",
      },
    ],
    menus: [
      "전체",
      "IBK기업은행",
      "신한은행",
      "KB국민은행",
      "우리은행",
      "하나은행",
    ],
  }),
  mounted() {},
  methods: {
    submit() {
      if (this.menu == "IBK기업은행") {
        this.items = [
          {
            avatar: "https://cdn.vuetifyjs.com/images/lists/1.jpg",
            bank: "IBK기업은행",
            title: "i-ONE 놀이터적금",
            interest: 1.8,
            url:
              "https://mybank.ibk.co.kr/uib/jsp/guest/ntr/ntr70/ntr7010/PNTR701000_i2.jsp",
          },
          {
            avatar: "https://cdn.vuetifyjs.com/images/lists/1.jpg",
            bank: "IBK기업은행",
            title: "IBK D-day적금",
            interest: 2.5,
            url:
              "https://mybank.ibk.co.kr/uib/jsp/guest/ntr/ntr70/ntr7010/PNTR701000_i2.jsp",
          },
          {
            avatar: "https://cdn.vuetifyjs.com/images/lists/1.jpg",
            bank: "IBK기업은행",
            title: "IBK첫만남통장",
            interest: 2,
            url:
              "https://mybank.ibk.co.kr/uib/jsp/guest/ntr/ntr70/ntr7010/PNTR701000_i2.jsp",
          },
          {
            avatar: "https://cdn.vuetifyjs.com/images/lists/1.jpg",
            bank: "IBK기업은행",
            title: "IBK W소확행통장",
            interest: 3.1,
            url:
              "https://mybank.ibk.co.kr/uib/jsp/guest/ntr/ntr70/ntr7010/PNTR701000_i2.jsp",
          },
          {
            avatar: "https://cdn.vuetifyjs.com/images/lists/1.jpg",
            bank: "IBK기업은행",
            title: "IBK SOPITV NOW적금",
            interest: 5,
            url:
              "https://mybank.ibk.co.kr/uib/jsp/guest/ntr/ntr70/ntr7010/PNTR701000_i2.jsp",
          },
          {
            avatar: "https://cdn.vuetifyjs.com/images/lists/1.jpg",
            bank: "IBK기업은행",
            title: "IBK생활금융적금",
            interest: 2.5,
            url:
              "https://mybank.ibk.co.kr/uib/jsp/guest/ntr/ntr70/ntr7010/PNTR701000_i2.jsp",
          },
          {
            avatar: "https://cdn.vuetifyjs.com/images/lists/1.jpg",
            bank: "IBK기업은행",
            title: "IBK웅진스마트올통장[적립식중금채]",
            interest: 7,
            url:
              "https://mybank.ibk.co.kr/uib/jsp/guest/ntr/ntr70/ntr7010/PNTR701000_i2.jsp",
          },
        ];
      } else if (this.menu == "KB국민은행") {
        this.items = [
          {
            avatar: "https://cdn.vuetifyjs.com/images/lists/1.jpg",
            bank: "KB국민은행",
            title: "KB내맘대로적금",
            interest: 2,
            url:
              "https://obank.kbstar.com/quics?page=C016613&cc=b061496:b061645&isNew=N&prcode=DP01000821",
          },
          {
            avatar: "https://cdn.vuetifyjs.com/images/lists/1.jpg",
            bank: "KB국민은행",
            title: "직장인우대적금",
            interest: 1.95,
            url:
              "https://obank.kbstar.com/quics?page=C016613&cc=b061496:b061645&isNew=N&prcode=DP01000228",
          },
          {
            avatar: "https://cdn.vuetifyjs.com/images/lists/1.jpg",
            bank: "KB국민은행",
            title: "KB장병내일준비적금",
            interest: 5.5,
            url:
              "https://obank.kbstar.com/quics?page=C016613&cc=b061496:b061645&isNew=N&prcode=DP01000939",
          },
          {
            avatar: "https://cdn.vuetifyjs.com/images/lists/1.jpg",
            bank: "KB국민은행",
            title: "KB맑은하늘적금",
            interest: 2.1,
            url:
              "https://obank.kbstar.com/quics?page=C016613&cc=b061496:b061645&isNew=N&prcode=DP01000942",
          },
          {
            avatar: "https://cdn.vuetifyjs.com/images/lists/1.jpg",
            bank: "KB국민은행",
            title: "KB국민ONE적금",
            interest: 1.65,
            url:
              "https://obank.kbstar.com/quics?page=C016613&cc=b061496:b061645&isNew=N&prcode=DP01000333",
          },
          {
            avatar: "https://cdn.vuetifyjs.com/images/lists/1.jpg",
            bank: "KB국민은행",
            title: "KB마이핏적금",
            interest: 2.7,
            url:
              "https://obank.kbstar.com/quics?page=C016613&cc=b061496:b061645&isNew=N&prcode=DP01001242",
          },
          {
            avatar: "https://cdn.vuetifyjs.com/images/lists/1.jpg",
            bank: "KB국민은행",
            title: "KB Young Youth 적금",
            interest: 2.15,
            url:
              "https://obank.kbstar.com/quics?page=C016613&cc=b061496:b061645&isNew=N&prcode=DP01000940",
          },
        ];
      } else if (this.menu == "신한은행") {
        this.items = [
          {
            avatar: "https://cdn.vuetifyjs.com/images/lists/1.jpg",
            bank: "신한은행",
            title: "신한 주거래 드림(Dream)적금",
            interest: 1.9,
            url:
              "https://bank.shinhan.com/index.jsp?referrer=https%3A%2F%2Fwww.google.com%2F#020102010110",
          },
          {
            avatar: "https://cdn.vuetifyjs.com/images/lists/1.jpg",
            bank: "신한은행",
            title: "신한 스마트 적금",
            interest: 1.6,
            url:
              "https://bank.shinhan.com/index.jsp?referrer=https%3A%2F%2Fwww.google.com%2F#020102010110",
          },
          {
            avatar: "https://cdn.vuetifyjs.com/images/lists/1.jpg",
            bank: "신한은행",
            title: "신한 첫급여 드림(DREAM) 적금",
            interest: 4.2,
            url:
              "https://bank.shinhan.com/index.jsp?referrer=https%3A%2F%2Fwww.google.com%2F#020102010110",
          },
          {
            avatar: "https://cdn.vuetifyjs.com/images/lists/1.jpg",
            bank: "신한은행",
            title: "신한 첫거래 세배드림(DREAM) 적금",
            interest: 2.4,
            url:
              "https://bank.shinhan.com/index.jsp?referrer=https%3A%2F%2Fwww.google.com%2F#020102010110",
          },
          {
            avatar: "https://cdn.vuetifyjs.com/images/lists/1.jpg",
            bank: "신한은행",
            title: "신한 S드림(DREAM) 적금",
            interest: 1,
            url:
              "https://bank.shinhan.com/index.jsp?referrer=https%3A%2F%2Fwww.google.com%2F#020102010110",
          },
        ];
      } else if (this.menu == "우리은행") {
        this.items = [
          {
            avatar: "https://cdn.vuetifyjs.com/images/lists/1.jpg",
            bank: "우리은행",
            title: "WON 적금",
            interest: 1.9,
            url:
              "https://spot.wooribank.com/pot/Dream?withyou=PODEP0021&cc=c007095:c009166;c012263:c012399&PLM_PDCD=P010002353&PRD_CD=P010002353&ALL_GB=&depKind=A04",
          },
          {
            avatar: "https://cdn.vuetifyjs.com/images/lists/1.jpg",
            bank: "우리은행",
            title: "우리 Magic 적금 by 우리카드",
            interest: 6,
            url:
              "https://spot.wooribank.com/pot/Dream?withyou=PODEP0021&cc=c007095:c009166;c012263:c012399&PLM_PDCD=P010002409&PRD_CD=P010002409&ALL_GB=&depKind=A04",
          },
          {
            avatar: "https://cdn.vuetifyjs.com/images/lists/1.jpg",
            bank: "우리은행",
            title: "스무살 우리 정기적금",
            interest: 3,
            url:
              "https://spot.wooribank.com/pot/Dream?withyou=PODEP0021&cc=c007095:c009166;c012263:c012399&PLM_PDCD=P010002291&PRD_CD=P010002291&ALL_GB=&depKind=A04",
          },
          {
            avatar: "https://cdn.vuetifyjs.com/images/lists/2.jpg",
            bank: "우리은행",
            title: "우리 Magic 적금 by 현대카드",
            interest: 5.7,
            url:
              "https://spot.wooribank.com/pot/Dream?withyou=PODEP0021&cc=c007095:c009166;c012263:c012399&PLM_PDCD=P010002384&PRD_CD=P010002384&ALL_GB=&depKind=A04",
          },
          {
            avatar: "https://cdn.vuetifyjs.com/images/lists/3.jpg",
            bank: "우리은행",
            title: "시니어플러스 우리적금",
            interest: 1.56,
            url:
              "https://spot.wooribank.com/pot/Dream?withyou=PODEP0021&cc=c007095:c009166;c012263:c012399&PLM_PDCD=P010002345&PRD_CD=P010002345&ALL_GB=&depKind=A04",
          },
        ];
      } else if (this.menu == "하나은행") {
        this.items = [
          {
            avatar: "https://cdn.vuetifyjs.com/images/lists/3.jpg",
            bank: "하나은행",
            title: "하나의 여행 적금",
            interest: 2.3,
            url:
              "https://kebhana.com/cont/mall/mall08/mall0801/mall080102/1473850_115157.jsp",
          },
          {
            avatar: "https://cdn.vuetifyjs.com/images/lists/3.jpg",
            bank: "하나은행",
            title: "펫사랑 적금",
            interest: 1.5,
            url:
              "https://kebhana.com/cont/mall/mall08/mall0801/mall080102/1470991_115157.jsp",
          },
          {
            avatar: "https://cdn.vuetifyjs.com/images/lists/3.jpg",
            bank: "하나은행",
            title: "하나 원큐 적금",
            interest: 2,
            url:
              "https://kebhana.com/cont/mall/mall08/mall0801/mall080102/1462078_115157.jsp",
          },
          {
            avatar: "https://cdn.vuetifyjs.com/images/lists/3.jpg",
            bank: "하나은행",
            title: "금연 성공 적금",
            interest: 2.5,
            url:
              "https://kebhana.com/cont/mall/mall08/mall0801/mall080102/1465820_115157.jsp",
          },
          {
            avatar: "https://cdn.vuetifyjs.com/images/lists/3.jpg",
            bank: "하나은행",
            title: "평생 군인 적금",
            interest: 4.5,
            url:
              "https://kebhana.com/cont/mall/mall08/mall0801/mall080102/1463826_115157.jsp",
          },
          {
            avatar: "https://cdn.vuetifyjs.com/images/lists/3.jpg",
            bank: "하나은행",
            title: "(아이)꿈하나 적금",
            interest: 1.5,
            url:
              "https://kebhana.com/cont/mall/mall08/mall0801/mall080102/1452125_115157.jsp",
          },
          {
            avatar: "https://cdn.vuetifyjs.com/images/lists/3.jpg",
            bank: "하나은행",
            title: "도전365 적금",
            interest: 2,
            url:
              "https://kebhana.com/cont/mall/mall08/mall0801/mall080102/1452858_115157.jsp",
          },
        ];
      } else {
        this.items = [
          // 적금
          {
            avatar: "https://cdn.vuetifyjs.com/images/lists/1.jpg",
            bank: "IBK기업은행",
            title: "i-ONE 놀이터적금",
            interest: 1.8,
            url:
              "https://mybank.ibk.co.kr/uib/jsp/guest/ntr/ntr70/ntr7010/PNTR701000_i2.jsp",
          },
          {
            avatar: "https://cdn.vuetifyjs.com/images/lists/1.jpg",
            bank: "IBK기업은행",
            title: "IBK D-day적금",
            interest: 2.5,
            url:
              "https://mybank.ibk.co.kr/uib/jsp/guest/ntr/ntr70/ntr7010/PNTR701000_i2.jsp",
          },
          {
            avatar: "https://cdn.vuetifyjs.com/images/lists/1.jpg",
            bank: "IBK기업은행",
            title: "IBK첫만남통장",
            interest: 2,
            url:
              "https://mybank.ibk.co.kr/uib/jsp/guest/ntr/ntr70/ntr7010/PNTR701000_i2.jsp",
          },
          {
            avatar: "https://cdn.vuetifyjs.com/images/lists/1.jpg",
            bank: "IBK기업은행",
            title: "IBK W소확행통장",
            interest: 3.1,
            url:
              "https://mybank.ibk.co.kr/uib/jsp/guest/ntr/ntr70/ntr7010/PNTR701000_i2.jsp",
          },
          {
            avatar: "https://cdn.vuetifyjs.com/images/lists/1.jpg",
            bank: "IBK기업은행",
            title: "IBK SOPITV NOW적금",
            interest: 5,
            url:
              "https://mybank.ibk.co.kr/uib/jsp/guest/ntr/ntr70/ntr7010/PNTR701000_i2.jsp",
          },
          {
            avatar: "https://cdn.vuetifyjs.com/images/lists/1.jpg",
            bank: "IBK기업은행",
            title: "IBK생활금융적금",
            interest: 2.5,
            url:
              "https://mybank.ibk.co.kr/uib/jsp/guest/ntr/ntr70/ntr7010/PNTR701000_i2.jsp",
          },
          {
            avatar: "https://cdn.vuetifyjs.com/images/lists/1.jpg",
            bank: "IBK기업은행",
            title: "IBK웅진스마트올통장[적립식중금채]",
            interest: 7,
            url:
              "https://mybank.ibk.co.kr/uib/jsp/guest/ntr/ntr70/ntr7010/PNTR701000_i2.jsp",
          },

          {
            avatar: "https://cdn.vuetifyjs.com/images/lists/1.jpg",
            bank: "KB국민은행",
            title: "KB내맘대로적금",
            interest: 2,
            url:
              "https://obank.kbstar.com/quics?page=C016613&cc=b061496:b061645&isNew=N&prcode=DP01000821",
          },
          {
            avatar: "https://cdn.vuetifyjs.com/images/lists/1.jpg",
            bank: "KB국민은행",
            title: "직장인우대적금",
            interest: 1.95,
            url:
              "https://obank.kbstar.com/quics?page=C016613&cc=b061496:b061645&isNew=N&prcode=DP01000228",
          },
          {
            avatar: "https://cdn.vuetifyjs.com/images/lists/1.jpg",
            bank: "KB국민은행",
            title: "KB장병내일준비적금",
            interest: 5.5,
            url:
              "https://obank.kbstar.com/quics?page=C016613&cc=b061496:b061645&isNew=N&prcode=DP01000939",
          },
          {
            avatar: "https://cdn.vuetifyjs.com/images/lists/1.jpg",
            bank: "KB국민은행",
            title: "KB맑은하늘적금",
            interest: 2.1,
            url:
              "https://obank.kbstar.com/quics?page=C016613&cc=b061496:b061645&isNew=N&prcode=DP01000942",
          },
          {
            avatar: "https://cdn.vuetifyjs.com/images/lists/1.jpg",
            bank: "KB국민은행",
            title: "KB국민ONE적금",
            interest: 1.65,
            url:
              "https://obank.kbstar.com/quics?page=C016613&cc=b061496:b061645&isNew=N&prcode=DP01000333",
          },
          {
            avatar: "https://cdn.vuetifyjs.com/images/lists/1.jpg",
            bank: "KB국민은행",
            title: "KB마이핏적금",
            interest: 2.7,
            url:
              "https://obank.kbstar.com/quics?page=C016613&cc=b061496:b061645&isNew=N&prcode=DP01001242",
          },
          {
            avatar: "https://cdn.vuetifyjs.com/images/lists/1.jpg",
            bank: "KB국민은행",
            title: "KB Young Youth 적금",
            interest: 2.15,
            url:
              "https://obank.kbstar.com/quics?page=C016613&cc=b061496:b061645&isNew=N&prcode=DP01000940",
          },

          {
            avatar: "https://cdn.vuetifyjs.com/images/lists/1.jpg",
            bank: "신한은행",
            title: "신한 주거래 드림(Dream)적금",
            interest: 1.9,
            url:
              "https://bank.shinhan.com/index.jsp?referrer=https%3A%2F%2Fwww.google.com%2F#020102010110",
          },
          {
            avatar: "https://cdn.vuetifyjs.com/images/lists/1.jpg",
            bank: "신한은행",
            title: "신한 스마트 적금",
            interest: 1.6,
            url:
              "https://bank.shinhan.com/index.jsp?referrer=https%3A%2F%2Fwww.google.com%2F#020102010110",
          },
          {
            avatar: "https://cdn.vuetifyjs.com/images/lists/1.jpg",
            bank: "신한은행",
            title: "신한 첫급여 드림(DREAM) 적금",
            interest: 4.2,
            url:
              "https://bank.shinhan.com/index.jsp?referrer=https%3A%2F%2Fwww.google.com%2F#020102010110",
          },
          {
            avatar: "https://cdn.vuetifyjs.com/images/lists/1.jpg",
            bank: "신한은행",
            title: "신한 첫거래 세배드림(DREAM) 적금",
            interest: 2.4,
            url:
              "https://bank.shinhan.com/index.jsp?referrer=https%3A%2F%2Fwww.google.com%2F#020102010110",
          },
          {
            avatar: "https://cdn.vuetifyjs.com/images/lists/1.jpg",
            bank: "신한은행",
            title: "신한 S드림(DREAM) 적금",
            interest: 1,
            url:
              "https://bank.shinhan.com/index.jsp?referrer=https%3A%2F%2Fwww.google.com%2F#020102010110",
          },

          {
            avatar: "https://cdn.vuetifyjs.com/images/lists/1.jpg",
            bank: "우리은행",
            title: "WON 적금",
            interest: 1.9,
            url:
              "https://spot.wooribank.com/pot/Dream?withyou=PODEP0021&cc=c007095:c009166;c012263:c012399&PLM_PDCD=P010002353&PRD_CD=P010002353&ALL_GB=&depKind=A04",
          },
          {
            avatar: "https://cdn.vuetifyjs.com/images/lists/1.jpg",
            bank: "우리은행",
            title: "우리 Magic 적금 by 우리카드",
            interest: 6,
            url:
              "https://spot.wooribank.com/pot/Dream?withyou=PODEP0021&cc=c007095:c009166;c012263:c012399&PLM_PDCD=P010002409&PRD_CD=P010002409&ALL_GB=&depKind=A04",
          },
          {
            avatar: "https://cdn.vuetifyjs.com/images/lists/1.jpg",
            bank: "우리은행",
            title: "스무살 우리 정기적금",
            interest: 3,
            url:
              "https://spot.wooribank.com/pot/Dream?withyou=PODEP0021&cc=c007095:c009166;c012263:c012399&PLM_PDCD=P010002291&PRD_CD=P010002291&ALL_GB=&depKind=A04",
          },
          {
            avatar: "https://cdn.vuetifyjs.com/images/lists/2.jpg",
            bank: "우리은행",
            title: "우리 Magic 적금 by 현대카드",
            interest: 5.7,
            url:
              "https://spot.wooribank.com/pot/Dream?withyou=PODEP0021&cc=c007095:c009166;c012263:c012399&PLM_PDCD=P010002384&PRD_CD=P010002384&ALL_GB=&depKind=A04",
          },
          {
            avatar: "https://cdn.vuetifyjs.com/images/lists/3.jpg",
            bank: "우리은행",
            title: "시니어플러스 우리적금",
            interest: 1.56,
            url:
              "https://spot.wooribank.com/pot/Dream?withyou=PODEP0021&cc=c007095:c009166;c012263:c012399&PLM_PDCD=P010002345&PRD_CD=P010002345&ALL_GB=&depKind=A04",
          },

          {
            avatar: "https://cdn.vuetifyjs.com/images/lists/3.jpg",
            bank: "하나은행",
            title: "하나의 여행 적금",
            interest: 2.3,
            url:
              "https://kebhana.com/cont/mall/mall08/mall0801/mall080102/1473850_115157.jsp",
          },
          {
            avatar: "https://cdn.vuetifyjs.com/images/lists/3.jpg",
            bank: "하나은행",
            title: "펫사랑 적금",
            interest: 1.5,
            url:
              "https://kebhana.com/cont/mall/mall08/mall0801/mall080102/1470991_115157.jsp",
          },
          {
            avatar: "https://cdn.vuetifyjs.com/images/lists/3.jpg",
            bank: "하나은행",
            title: "하나 원큐 적금",
            interest: 2,
            url:
              "https://kebhana.com/cont/mall/mall08/mall0801/mall080102/1462078_115157.jsp",
          },
          {
            avatar: "https://cdn.vuetifyjs.com/images/lists/3.jpg",
            bank: "하나은행",
            title: "금연 성공 적금",
            interest: 2.5,
            url:
              "https://kebhana.com/cont/mall/mall08/mall0801/mall080102/1465820_115157.jsp",
          },
          {
            avatar: "https://cdn.vuetifyjs.com/images/lists/3.jpg",
            bank: "하나은행",
            title: "평생 군인 적금",
            interest: 4.5,
            url:
              "https://kebhana.com/cont/mall/mall08/mall0801/mall080102/1463826_115157.jsp",
          },
          {
            avatar: "https://cdn.vuetifyjs.com/images/lists/3.jpg",
            bank: "하나은행",
            title: "(아이)꿈하나 적금",
            interest: 1.5,
            url:
              "https://kebhana.com/cont/mall/mall08/mall0801/mall080102/1452125_115157.jsp",
          },
          {
            avatar: "https://cdn.vuetifyjs.com/images/lists/3.jpg",
            bank: "하나은행",
            title: "도전365 적금",
            interest: 2,
            url:
              "https://kebhana.com/cont/mall/mall08/mall0801/mall080102/1452858_115157.jsp",
          },
        ];
      }
    },
    goto(url) {
      window.open(url);
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
.item {
  cursor: pointer;
}
.title {
  font-size: 25px;
}
.interest {
  background-color: black;
  color: white;
  widows: 100%;
  font-size: 50px;
  font-weight: 700;
}
</style>
