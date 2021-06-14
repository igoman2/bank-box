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
    <v-row
      no-gutters
      class="mt-10 mb-10"
      style="font-weight: bold; color: #c3c3c3"
    >
      ∙ 기관과 금리를 확인하고 클릭하여 상세 정보를 확인하세요
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
        <v-pagination v-model="page" :length="3" circle></v-pagination>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
export default {
  name: "Loan",
  components: {},
  data: () => ({
    page: 1,
    menu: "",
    items: [
      // 대출
      {
        avatar: "https://cdn.vuetifyjs.com/images/lists/1.jpg",
        bank: "IBK기업은행",
        title: "i-ONE 직장인스마트론",
        max: "100만원 ~ 5000만원",
        interest: "3.00~7.33",
        url:
          "https://mybank.ibk.co.kr/uib/jsp/guest/ntr/ntr70/ntr7015/PNTR701500_i2.jsp",
      },
      {
        avatar: "https://cdn.vuetifyjs.com/images/lists/1.jpg",
        bank: "IBK기업은행",
        title: "IBK퍼스트원대출",
        max: "1000만원",
        interest: "2.90",
        url:
          "https://mybank.ibk.co.kr/uib/jsp/guest/ntr/ntr70/ntr7015/PNTR701500_i2.jsp",
      },
      {
        avatar: "https://cdn.vuetifyjs.com/images/lists/1.jpg",
        bank: "IBK기업은행",
        title: "i-ONE 예금담보대출",
        max: "4000만원",
        interest: ".",
        url:
          "https://mybank.ibk.co.kr/uib/jsp/guest/ntr/ntr70/ntr7015/PNTR701500_i2.jsp",
      },
      {
        avatar: "https://cdn.vuetifyjs.com/images/lists/1.jpg",
        bank: "IBK기업은행",
        title: "IBK파워신용대출",
        max: "4억원",
        interest: "3.14~3.32",
        url:
          "https://mybank.ibk.co.kr/uib/jsp/guest/ntr/ntr70/ntr7015/PNTR701500_i2.jsp",
      },
      {
        avatar: "https://cdn.vuetifyjs.com/images/lists/1.jpg",
        bank: "IBK기업은행",
        title: "e뱅크론",
        max: "5000만원",
        interest: ".",
        url:
          "https://mybank.ibk.co.kr/uib/jsp/guest/ntr/ntr70/ntr7015/PNTR701500_i2.jsp",
      },
      {
        avatar: "https://cdn.vuetifyjs.com/images/lists/1.jpg",
        bank: "KB국민은행",
        title: "KB Start 신용대출",
        interest: "2.66~2.93",
        max: "3억원",
        url:
          "https://obank.kbstar.com/quics?page=C019478&cc=b061479:b061589&isNew=N&prcode=LN20000149&QSL=F",
      },
      {
        avatar: "https://cdn.vuetifyjs.com/images/lists/1.jpg",
        bank: "KB국민은행",
        title: "KB 새희망홀씨 II",
        max: "3000만원",
        interest: "5.30~6.30",
        url:
          "https://obank.kbstar.com/quics?page=C019478&cc=b061479:b061589&isNew=N&prcode=LN20000029&QSL=F",
      },
      {
        avatar: "https://cdn.vuetifyjs.com/images/lists/1.jpg",
        bank: "KB국민은행",
        title: "KB직장인든든 신용대출",
        max: "3억원",
        interest: "2.54~3.71",
        url:
          "https://obank.kbstar.com/quics?page=C019478&cc=b061479:b061589&isNew=N&prcode=LN20000159&QSL=F",
      },
      {
        avatar: "https://cdn.vuetifyjs.com/images/lists/1.jpg",
        bank: "KB국민은행",
        title: "KB급여이체 신용대출",
        max: "1억 5000만원",
        interest: "2.99~4.46",
        url:
          "https://obank.kbstar.com/quics?page=C019478&cc=b061479:b061589&isNew=N&prcode=LN20000030&QSL=F",
      },
      {
        avatar: "https://cdn.vuetifyjs.com/images/lists/1.jpg",
        bank: "신한은행",
        title: "신한 새희망홀씨 II",
        interest: "4.13~5.13",
        max: "3000만원",
        url: "https://bank.shinhan.com/index.jsp#020304010000",
      },
    ],
    menus: [
      "전체보기",
      "IBK기업은행",
      "신한은행",
      "KB국민은행",
      "우리은행",
      "하나은행",
    ],
  }),
  mounted() {},
  watch: {
    page: "paging",
  },
  methods: {
    submit() {
      if (this.menu == "IBK기업은행") {
        console.log(this.menu);
        this.items = [
          {
            avatar: "https://cdn.vuetifyjs.com/images/lists/1.jpg",
            bank: "IBK기업은행",
            title: "i-ONE 직장인스마트론",
            max: "100만원 ~ 5000만원",
            interest: "3.00~7.33",
            url:
              "https://mybank.ibk.co.kr/uib/jsp/guest/ntr/ntr70/ntr7015/PNTR701500_i2.jsp",
          },
          {
            avatar: "https://cdn.vuetifyjs.com/images/lists/1.jpg",
            bank: "IBK기업은행",
            title: "IBK퍼스트원대출",
            max: "1000만원",
            interest: "2.90",
            url:
              "https://mybank.ibk.co.kr/uib/jsp/guest/ntr/ntr70/ntr7015/PNTR701500_i2.jsp",
          },
          {
            avatar: "https://cdn.vuetifyjs.com/images/lists/1.jpg",
            bank: "IBK기업은행",
            title: "i-ONE 예금담보대출",
            max: "4000만원",
            interest: ".",
            url:
              "https://mybank.ibk.co.kr/uib/jsp/guest/ntr/ntr70/ntr7015/PNTR701500_i2.jsp",
          },
          {
            avatar: "https://cdn.vuetifyjs.com/images/lists/1.jpg",
            bank: "IBK기업은행",
            title: "IBK파워신용대출",
            max: "4억원",
            interest: "3.14~3.32",
            url:
              "https://mybank.ibk.co.kr/uib/jsp/guest/ntr/ntr70/ntr7015/PNTR701500_i2.jsp",
          },
          {
            avatar: "https://cdn.vuetifyjs.com/images/lists/1.jpg",
            bank: "IBK기업은행",
            title: "e뱅크론",
            max: "5000만원",
            interest: ".",
            url:
              "https://mybank.ibk.co.kr/uib/jsp/guest/ntr/ntr70/ntr7015/PNTR701500_i2.jsp",
          },
        ];
      } else if (this.menu == "KB국민은행") {
        console.log(this.menu);

        this.items = [
          {
            avatar: "https://cdn.vuetifyjs.com/images/lists/1.jpg",
            bank: "KB국민은행",
            title: "KB Start 신용대출",
            interest: "2.66~2.93",
            max: "3억원",
            url:
              "https://obank.kbstar.com/quics?page=C019478&cc=b061479:b061589&isNew=N&prcode=LN20000149&QSL=F",
          },
          {
            avatar: "https://cdn.vuetifyjs.com/images/lists/1.jpg",
            bank: "KB국민은행",
            title: "KB 새희망홀씨 II",
            max: "3000만원",
            interest: "5.30~6.30",
            url:
              "https://obank.kbstar.com/quics?page=C019478&cc=b061479:b061589&isNew=N&prcode=LN20000029&QSL=F",
          },
          {
            avatar: "https://cdn.vuetifyjs.com/images/lists/1.jpg",
            bank: "KB국민은행",
            title: "KB직장인든든 신용대출",
            max: "3억원",
            interest: "2.54~3.71",
            url:
              "https://obank.kbstar.com/quics?page=C019478&cc=b061479:b061589&isNew=N&prcode=LN20000159&QSL=F",
          },
          {
            avatar: "https://cdn.vuetifyjs.com/images/lists/1.jpg",
            bank: "KB국민은행",
            title: "KB급여이체 신용대출",
            max: "1억 5000만원",
            interest: "2.99~4.46",
            url:
              "https://obank.kbstar.com/quics?page=C019478&cc=b061479:b061589&isNew=N&prcode=LN20000030&QSL=F",
          },
        ];
      } else if (this.menu == "신한은행") {
        console.log(this.menu);

        this.items = [
          {
            avatar: "https://cdn.vuetifyjs.com/images/lists/1.jpg",
            bank: "신한은행",
            title: "신한 새희망홀씨 II",
            interest: "4.13~5.13",
            max: "3000만원",
            url: "https://bank.shinhan.com/index.jsp#020304010000",
          },
          {
            avatar: "https://cdn.vuetifyjs.com/images/lists/1.jpg",
            bank: "신한은행",
            title: "신한 징검다리론",
            interest: "2.72~3.72",
            max: "3000만원",
            url: "https://bank.shinhan.com/index.jsp#020304010000",
          },
          {
            avatar: "https://cdn.vuetifyjs.com/images/lists/1.jpg",
            bank: "신한은행",
            title: "신한 새희망드림대출",
            interest: "4.13~5.13",
            max: "1000만원",
            url: "https://bank.shinhan.com/index.jsp#020304010000",
          },
          {
            avatar: "https://cdn.vuetifyjs.com/images/lists/1.jpg",
            bank: "신한은행",
            title: "신한전세대출(주택금융공사)",
            interest: "2.45~3.35",
            max: "2억 2200만원",
            url: "https://bank.shinhan.com/index.jsp#020305010000",
          },
          {
            avatar: "https://cdn.vuetifyjs.com/images/lists/1.jpg",
            bank: "신한은행",
            title: "미래설계 장기플랜 연금예금",
            interest: "4.5~5.4",
            max: "1200만원",
            url: "https://bank.shinhan.com/index.jsp#020304050000",
          },
        ];
      } else if (this.menu == "우리은행") {
        console.log(this.menu);

        this.items = [
          {
            avatar: "https://cdn.vuetifyjs.com/images/lists/1.jpg",
            bank: "우리은행",
            title: "우리 주거래 직장인대출",
            interest: "2.29~2.93",
            max: "2억원",
            url:
              "https://spot.wooribank.com/pot/Dream?withyou=POLON0052&cc=c010528:c010531;c012425:c012399&PLM_PDCD=P020000054&PRD_CD=P020000054&HOST_PRD_CD=2001122111184",
          },
          {
            avatar: "https://cdn.vuetifyjs.com/images/lists/1.jpg",
            bank: "우리은행",
            title: "우리 비상금대출",
            interest: "3.81~4.31",
            max: "300만원",
            url:
              "https://spot.wooribank.com/pot/Dream?withyou=POLON0052&cc=c010528:c010531;c012425:c012399&PLM_PDCD=P020006123&PRD_CD=P020006123&HOST_PRD_CD=2071306110000",
          },
          {
            avatar: "https://cdn.vuetifyjs.com/images/lists/1.jpg",
            bank: "우리은행",
            title: "우리 사잇돌 중금리대출",
            interest: "3.02~4.00",
            max: "2000만원",
            url:
              "https://spot.wooribank.com/pot/Dream?withyou=POLON0052&cc=c010528:c010531;c012425:c012399&PLM_PDCD=P020000004&PRD_CD=P020000004&HOST_PRD_CD=2011113001184",
          },

          {
            avatar: "https://cdn.vuetifyjs.com/images/lists/3.jpg",
            bank: "우리은행",
            title: "버팀목 전세자금",
            interest: ".",
            max: "2억",
            url:
              "https://spot.wooribank.com/pot/Dream?withyou=POLON0052&cc=c010528:c010531;c012425:c012399&PLM_PDCD=P020000227&PRD_CD=P020000227&HOST_PRD_CD=3204111150000",
          },
        ];
      } else if (this.menu == "하나은행") {
        console.log(this.menu);

        this.items = [
          {
            avatar: "https://cdn.vuetifyjs.com/images/lists/3.jpg",
            bank: "하나은행",
            title: "하나원큐신용대출",
            interest: "2.584~3.184",
            max: "1억 5000만원",
            url:
              "https://www.kebhana.com/cont/mall/mall08/mall0802/mall080204/1462446_115200.jsp?_menuNo=98786",
          },
          {
            avatar: "https://cdn.vuetifyjs.com/images/lists/3.jpg",
            bank: "하나은행",
            title: "하나 원큐 정기예금",
            interest: 1,
            url:
              "https://www.kebhana.com/cont/mall/mall08/mall0801/mall080101/1465828_115126.jsp",
          },
          {
            avatar: "https://cdn.vuetifyjs.com/images/lists/3.jpg",
            bank: "하나은행",
            title: "핀크생활비대출",
            interest: "4.887",
            max: "500만원",
            url:
              "https://www.kebhana.com/cont/mall/mall08/mall0802/mall080204/1472605_115200.jsp?_menuNo=98786",
          },
          {
            avatar: "https://cdn.vuetifyjs.com/images/lists/3.jpg",
            bank: "하나은행",
            title: "하나 주거래손님 대출",
            interest: "2.584~3.754",
            max: "5000만원",
            url:
              "https://www.kebhana.com/cont/mall/mall08/mall0802/mall080204/1472915_115200.jsp?_menuNo=98786",
          },
          {
            avatar: "https://cdn.vuetifyjs.com/images/lists/3.jpg",
            bank: "하나은행",
            title: "프리미엄 직장인론",
            interest: "4.284~4.835",
            max: "1억5000만원",
            url:
              "https://www.kebhana.com/cont/mall/mall08/mall0802/mall080204/1420271_115200.jsp?_menuNo=98786",
          },
          {
            avatar: "https://cdn.vuetifyjs.com/images/lists/3.jpg",
            bank: "하나은행",
            title: "서울특별시 청년 임차보증금대출",
            interest: "2.32",
            max: "7000만원",
            url:
              "https://www.kebhana.com/cont/mall/mall08/mall0802/mall080201/1465824_115194.jsp?_menuNo=98786",
          },
          {
            avatar: "https://cdn.vuetifyjs.com/images/lists/3.jpg",
            bank: "하나은행",
            title: "한사랑전세론",
            interest: "3.244~3.895",
            max: "2억원",
            url:
              "https://www.kebhana.com/cont/mall/mall08/mall0802/mall080201/1462557_115194.jsp?_menuNo=98786",
          },
        ];
      } else {
        this.items = [
          // 예금
          {
            avatar: "https://cdn.vuetifyjs.com/images/lists/1.jpg",
            bank: "IBK기업은행",
            title: "i-ONE 직장인스마트론",
            max: "100만원 ~ 5000만원",
            interest: "3.00~7.33",
            url:
              "https://mybank.ibk.co.kr/uib/jsp/guest/ntr/ntr70/ntr7015/PNTR701500_i2.jsp",
          },
          {
            avatar: "https://cdn.vuetifyjs.com/images/lists/1.jpg",
            bank: "IBK기업은행",
            title: "IBK퍼스트원대출",
            max: "1000만원",
            interest: "2.90",
            url:
              "https://mybank.ibk.co.kr/uib/jsp/guest/ntr/ntr70/ntr7015/PNTR701500_i2.jsp",
          },
          {
            avatar: "https://cdn.vuetifyjs.com/images/lists/1.jpg",
            bank: "IBK기업은행",
            title: "i-ONE 예금담보대출",
            max: "4000만원",
            interest: ".",
            url:
              "https://mybank.ibk.co.kr/uib/jsp/guest/ntr/ntr70/ntr7015/PNTR701500_i2.jsp",
          },
          {
            avatar: "https://cdn.vuetifyjs.com/images/lists/1.jpg",
            bank: "IBK기업은행",
            title: "IBK파워신용대출",
            max: "4억원",
            interest: "3.14~3.32",
            url:
              "https://mybank.ibk.co.kr/uib/jsp/guest/ntr/ntr70/ntr7015/PNTR701500_i2.jsp",
          },
          {
            avatar: "https://cdn.vuetifyjs.com/images/lists/1.jpg",
            bank: "IBK기업은행",
            title: "e뱅크론",
            max: "5000만원",
            interest: ".",
            url:
              "https://mybank.ibk.co.kr/uib/jsp/guest/ntr/ntr70/ntr7015/PNTR701500_i2.jsp",
          },

          {
            avatar: "https://cdn.vuetifyjs.com/images/lists/1.jpg",
            bank: "KB국민은행",
            title: "KB Start 신용대출",
            interest: "2.66~2.93",
            max: "3억원",
            url:
              "https://obank.kbstar.com/quics?page=C019478&cc=b061479:b061589&isNew=N&prcode=LN20000149&QSL=F",
          },
          {
            avatar: "https://cdn.vuetifyjs.com/images/lists/1.jpg",
            bank: "KB국민은행",
            title: "KB 새희망홀씨 II",
            max: "3000만원",
            interest: "5.30~6.30",
            url:
              "https://obank.kbstar.com/quics?page=C019478&cc=b061479:b061589&isNew=N&prcode=LN20000029&QSL=F",
          },
          {
            avatar: "https://cdn.vuetifyjs.com/images/lists/1.jpg",
            bank: "KB국민은행",
            title: "KB직장인든든 신용대출",
            max: "3억원",
            interest: "2.54~3.71",
            url:
              "https://obank.kbstar.com/quics?page=C019478&cc=b061479:b061589&isNew=N&prcode=LN20000159&QSL=F",
          },
          {
            avatar: "https://cdn.vuetifyjs.com/images/lists/1.jpg",
            bank: "KB국민은행",
            title: "KB급여이체 신용대출",
            max: "1억 5000만원",
            interest: "2.99~4.46",
            url:
              "https://obank.kbstar.com/quics?page=C019478&cc=b061479:b061589&isNew=N&prcode=LN20000030&QSL=F",
          },

          {
            avatar: "https://cdn.vuetifyjs.com/images/lists/1.jpg",
            bank: "신한은행",
            title: "신한 새희망홀씨 II",
            interest: "4.13~5.13",
            max: "3000만원",
            url: "https://bank.shinhan.com/index.jsp#020304010000",
          },
          {
            avatar: "https://cdn.vuetifyjs.com/images/lists/1.jpg",
            bank: "신한은행",
            title: "신한 징검다리론",
            interest: "2.72~3.72",
            max: "3000만원",
            url: "https://bank.shinhan.com/index.jsp#020304010000",
          },
          {
            avatar: "https://cdn.vuetifyjs.com/images/lists/1.jpg",
            bank: "신한은행",
            title: "신한 새희망드림대출",
            interest: "4.13~5.13",
            max: "1000만원",
            url: "https://bank.shinhan.com/index.jsp#020304010000",
          },
          {
            avatar: "https://cdn.vuetifyjs.com/images/lists/1.jpg",
            bank: "신한은행",
            title: "신한전세대출(주택금융공사)",
            interest: "2.45~3.35",
            max: "2억 2200만원",
            url: "https://bank.shinhan.com/index.jsp#020305010000",
          },
          {
            avatar: "https://cdn.vuetifyjs.com/images/lists/1.jpg",
            bank: "신한은행",
            title: "미래설계 장기플랜 연금예금",
            interest: "4.5~5.4",
            max: "1200만원",
            url: "https://bank.shinhan.com/index.jsp#020304050000",
          },

          {
            avatar: "https://cdn.vuetifyjs.com/images/lists/1.jpg",
            bank: "우리은행",
            title: "우리 주거래 직장인대출",
            interest: "2.29~2.93",
            max: "2억원",
            url:
              "https://spot.wooribank.com/pot/Dream?withyou=POLON0052&cc=c010528:c010531;c012425:c012399&PLM_PDCD=P020000054&PRD_CD=P020000054&HOST_PRD_CD=2001122111184",
          },
          {
            avatar: "https://cdn.vuetifyjs.com/images/lists/1.jpg",
            bank: "우리은행",
            title: "우리 비상금대출",
            interest: "3.81~4.31",
            max: "300만원",
            url:
              "https://spot.wooribank.com/pot/Dream?withyou=POLON0052&cc=c010528:c010531;c012425:c012399&PLM_PDCD=P020006123&PRD_CD=P020006123&HOST_PRD_CD=2071306110000",
          },
          {
            avatar: "https://cdn.vuetifyjs.com/images/lists/1.jpg",
            bank: "우리은행",
            title: "우리 사잇돌 중금리대출",
            interest: "3.02~4.00",
            max: "2000만원",
            url:
              "https://spot.wooribank.com/pot/Dream?withyou=POLON0052&cc=c010528:c010531;c012425:c012399&PLM_PDCD=P020000004&PRD_CD=P020000004&HOST_PRD_CD=2011113001184",
          },

          {
            avatar: "https://cdn.vuetifyjs.com/images/lists/3.jpg",
            bank: "우리은행",
            title: "버팀목 전세자금",
            interest: ".",
            max: "2억",
            url:
              "https://spot.wooribank.com/pot/Dream?withyou=POLON0052&cc=c010528:c010531;c012425:c012399&PLM_PDCD=P020000227&PRD_CD=P020000227&HOST_PRD_CD=3204111150000",
          },

          {
            avatar: "https://cdn.vuetifyjs.com/images/lists/3.jpg",
            bank: "하나은행",
            title: "하나원큐신용대출",
            interest: "2.584~3.184",
            max: "1억 5000만원",
            url:
              "https://www.kebhana.com/cont/mall/mall08/mall0802/mall080204/1462446_115200.jsp?_menuNo=98786",
          },
          {
            avatar: "https://cdn.vuetifyjs.com/images/lists/3.jpg",
            bank: "하나은행",
            title: "하나 원큐 정기예금",
            interest: 1,
            url:
              "https://www.kebhana.com/cont/mall/mall08/mall0801/mall080101/1465828_115126.jsp",
          },
          {
            avatar: "https://cdn.vuetifyjs.com/images/lists/3.jpg",
            bank: "하나은행",
            title: "핀크생활비대출",
            interest: "4.887",
            max: "500만원",
            url:
              "https://www.kebhana.com/cont/mall/mall08/mall0802/mall080204/1472605_115200.jsp?_menuNo=98786",
          },
          {
            avatar: "https://cdn.vuetifyjs.com/images/lists/3.jpg",
            bank: "하나은행",
            title: "하나 주거래손님 대출",
            interest: "2.584~3.754",
            max: "5000만원",
            url:
              "https://www.kebhana.com/cont/mall/mall08/mall0802/mall080204/1472915_115200.jsp?_menuNo=98786",
          },
          {
            avatar: "https://cdn.vuetifyjs.com/images/lists/3.jpg",
            bank: "하나은행",
            title: "프리미엄 직장인론",
            interest: "4.284~4.835",
            max: "1억5000만원",
            url:
              "https://www.kebhana.com/cont/mall/mall08/mall0802/mall080204/1420271_115200.jsp?_menuNo=98786",
          },
          {
            avatar: "https://cdn.vuetifyjs.com/images/lists/3.jpg",
            bank: "하나은행",
            title: "서울특별시 청년 임차보증금대출",
            interest: "2.32",
            max: "7000만원",
            url:
              "https://www.kebhana.com/cont/mall/mall08/mall0802/mall080201/1465824_115194.jsp?_menuNo=98786",
          },
          {
            avatar: "https://cdn.vuetifyjs.com/images/lists/3.jpg",
            bank: "하나은행",
            title: "한사랑전세론",
            interest: "3.244~3.895",
            max: "2억원",
            url:
              "https://www.kebhana.com/cont/mall/mall08/mall0802/mall080201/1462557_115194.jsp?_menuNo=98786",
          },
        ];
      }
    },
    goto(url) {
      window.open(url);
    },
    paging() {
      if (this.page == 1) {
        this.items = [
          {
            avatar: "https://cdn.vuetifyjs.com/images/lists/1.jpg",
            bank: "IBK기업은행",
            title: "i-ONE 직장인스마트론",
            max: "100만원 ~ 5000만원",
            interest: "3.00~7.33",
            url:
              "https://mybank.ibk.co.kr/uib/jsp/guest/ntr/ntr70/ntr7015/PNTR701500_i2.jsp",
          },
          {
            avatar: "https://cdn.vuetifyjs.com/images/lists/1.jpg",
            bank: "IBK기업은행",
            title: "IBK퍼스트원대출",
            max: "1000만원",
            interest: "2.90",
            url:
              "https://mybank.ibk.co.kr/uib/jsp/guest/ntr/ntr70/ntr7015/PNTR701500_i2.jsp",
          },
          {
            avatar: "https://cdn.vuetifyjs.com/images/lists/1.jpg",
            bank: "IBK기업은행",
            title: "i-ONE 예금담보대출",
            max: "4000만원",
            interest: ".",
            url:
              "https://mybank.ibk.co.kr/uib/jsp/guest/ntr/ntr70/ntr7015/PNTR701500_i2.jsp",
          },
          {
            avatar: "https://cdn.vuetifyjs.com/images/lists/1.jpg",
            bank: "IBK기업은행",
            title: "IBK파워신용대출",
            max: "4억원",
            interest: "3.14~3.32",
            url:
              "https://mybank.ibk.co.kr/uib/jsp/guest/ntr/ntr70/ntr7015/PNTR701500_i2.jsp",
          },
          {
            avatar: "https://cdn.vuetifyjs.com/images/lists/1.jpg",
            bank: "IBK기업은행",
            title: "e뱅크론",
            max: "5000만원",
            interest: ".",
            url:
              "https://mybank.ibk.co.kr/uib/jsp/guest/ntr/ntr70/ntr7015/PNTR701500_i2.jsp",
          },
          {
            avatar: "https://cdn.vuetifyjs.com/images/lists/1.jpg",
            bank: "KB국민은행",
            title: "KB Start 신용대출",
            interest: "2.66~2.93",
            max: "3억원",
            url:
              "https://obank.kbstar.com/quics?page=C019478&cc=b061479:b061589&isNew=N&prcode=LN20000149&QSL=F",
          },
          {
            avatar: "https://cdn.vuetifyjs.com/images/lists/1.jpg",
            bank: "KB국민은행",
            title: "KB 새희망홀씨 II",
            max: "3000만원",
            interest: "5.30~6.30",
            url:
              "https://obank.kbstar.com/quics?page=C019478&cc=b061479:b061589&isNew=N&prcode=LN20000029&QSL=F",
          },
          {
            avatar: "https://cdn.vuetifyjs.com/images/lists/1.jpg",
            bank: "KB국민은행",
            title: "KB직장인든든 신용대출",
            max: "3억원",
            interest: "2.54~3.71",
            url:
              "https://obank.kbstar.com/quics?page=C019478&cc=b061479:b061589&isNew=N&prcode=LN20000159&QSL=F",
          },
          {
            avatar: "https://cdn.vuetifyjs.com/images/lists/1.jpg",
            bank: "KB국민은행",
            title: "KB급여이체 신용대출",
            max: "1억 5000만원",
            interest: "2.99~4.46",
            url:
              "https://obank.kbstar.com/quics?page=C019478&cc=b061479:b061589&isNew=N&prcode=LN20000030&QSL=F",
          },
          {
            avatar: "https://cdn.vuetifyjs.com/images/lists/1.jpg",
            bank: "신한은행",
            title: "신한 새희망홀씨 II",
            interest: "4.13~5.13",
            max: "3000만원",
            url: "https://bank.shinhan.com/index.jsp#020304010000",
          },
        ];
      } else if (this.page == 2) {
        this.items = [
          {
            avatar: "https://cdn.vuetifyjs.com/images/lists/1.jpg",
            bank: "신한은행",
            title: "신한 징검다리론",
            interest: "2.72~3.72",
            max: "3000만원",
            url: "https://bank.shinhan.com/index.jsp#020304010000",
          },
          {
            avatar: "https://cdn.vuetifyjs.com/images/lists/1.jpg",
            bank: "신한은행",
            title: "신한 새희망드림대출",
            interest: "4.13~5.13",
            max: "1000만원",
            url: "https://bank.shinhan.com/index.jsp#020304010000",
          },
          {
            avatar: "https://cdn.vuetifyjs.com/images/lists/1.jpg",
            bank: "신한은행",
            title: "신한전세대출(주택금융공사)",
            interest: "2.45~3.35",
            max: "2억 2200만원",
            url: "https://bank.shinhan.com/index.jsp#020305010000",
          },
          {
            avatar: "https://cdn.vuetifyjs.com/images/lists/1.jpg",
            bank: "신한은행",
            title: "미래설계 장기플랜 연금예금",
            interest: "4.5~5.4",
            max: "1200만원",
            url: "https://bank.shinhan.com/index.jsp#020304050000",
          },

          {
            avatar: "https://cdn.vuetifyjs.com/images/lists/1.jpg",
            bank: "우리은행",
            title: "우리 주거래 직장인대출",
            interest: "2.29~2.93",
            max: "2억원",
            url:
              "https://spot.wooribank.com/pot/Dream?withyou=POLON0052&cc=c010528:c010531;c012425:c012399&PLM_PDCD=P020000054&PRD_CD=P020000054&HOST_PRD_CD=2001122111184",
          },
          {
            avatar: "https://cdn.vuetifyjs.com/images/lists/1.jpg",
            bank: "우리은행",
            title: "우리 비상금대출",
            interest: "3.81~4.31",
            max: "300만원",
            url:
              "https://spot.wooribank.com/pot/Dream?withyou=POLON0052&cc=c010528:c010531;c012425:c012399&PLM_PDCD=P020006123&PRD_CD=P020006123&HOST_PRD_CD=2071306110000",
          },
          {
            avatar: "https://cdn.vuetifyjs.com/images/lists/1.jpg",
            bank: "우리은행",
            title: "우리 사잇돌 중금리대출",
            interest: "3.02~4.00",
            max: "2000만원",
            url:
              "https://spot.wooribank.com/pot/Dream?withyou=POLON0052&cc=c010528:c010531;c012425:c012399&PLM_PDCD=P020000004&PRD_CD=P020000004&HOST_PRD_CD=2011113001184",
          },

          {
            avatar: "https://cdn.vuetifyjs.com/images/lists/3.jpg",
            bank: "우리은행",
            title: "버팀목 전세자금",
            interest: ".",
            max: "2억",
            url:
              "https://spot.wooribank.com/pot/Dream?withyou=POLON0052&cc=c010528:c010531;c012425:c012399&PLM_PDCD=P020000227&PRD_CD=P020000227&HOST_PRD_CD=3204111150000",
          },

          {
            avatar: "https://cdn.vuetifyjs.com/images/lists/3.jpg",
            bank: "하나은행",
            title: "하나원큐신용대출",
            interest: "2.584~3.184",
            max: "1억 5000만원",
            url:
              "https://www.kebhana.com/cont/mall/mall08/mall0802/mall080204/1462446_115200.jsp?_menuNo=98786",
          },
          {
            avatar: "https://cdn.vuetifyjs.com/images/lists/3.jpg",
            bank: "하나은행",
            title: "하나 원큐 정기예금",
            interest: 1,
            url:
              "https://www.kebhana.com/cont/mall/mall08/mall0801/mall080101/1465828_115126.jsp",
          },
        ];
      } else if (this.page == 3) {
        this.items = [
          {
            avatar: "https://cdn.vuetifyjs.com/images/lists/3.jpg",
            bank: "하나은행",
            title: "핀크생활비대출",
            interest: "4.887",
            max: "500만원",
            url:
              "https://www.kebhana.com/cont/mall/mall08/mall0802/mall080204/1472605_115200.jsp?_menuNo=98786",
          },
          {
            avatar: "https://cdn.vuetifyjs.com/images/lists/3.jpg",
            bank: "하나은행",
            title: "하나 주거래손님 대출",
            interest: "2.584~3.754",
            max: "5000만원",
            url:
              "https://www.kebhana.com/cont/mall/mall08/mall0802/mall080204/1472915_115200.jsp?_menuNo=98786",
          },
          {
            avatar: "https://cdn.vuetifyjs.com/images/lists/3.jpg",
            bank: "하나은행",
            title: "프리미엄 직장인론",
            interest: "4.284~4.835",
            max: "1억5000만원",
            url:
              "https://www.kebhana.com/cont/mall/mall08/mall0802/mall080204/1420271_115200.jsp?_menuNo=98786",
          },
          {
            avatar: "https://cdn.vuetifyjs.com/images/lists/3.jpg",
            bank: "하나은행",
            title: "서울특별시 청년 임차보증금대출",
            interest: "2.32",
            max: "7000만원",
            url:
              "https://www.kebhana.com/cont/mall/mall08/mall0802/mall080201/1465824_115194.jsp?_menuNo=98786",
          },
          {
            avatar: "https://cdn.vuetifyjs.com/images/lists/3.jpg",
            bank: "하나은행",
            title: "한사랑전세론",
            interest: "3.244~3.895",
            max: "2억원",
            url:
              "https://www.kebhana.com/cont/mall/mall08/mall0802/mall080201/1462557_115194.jsp?_menuNo=98786",
          },
        ];
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
