<template>
  <v-container>
    <v-col>
      <!-- <v-select :items="items" label="Standard" dense></v-select> -->
    </v-col>
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

    <v-row>
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
  name: "Deposit",
  components: {},
  data: () => ({
    page: 1,
    menu: "",
    items: [
      // 예금
      {
        avatar: "https://cdn.vuetifyjs.com/images/lists/1.jpg",
        bank: "IBK기업은행",
        title: "1석7조 통장(정기예금)",
        interest: 1.25,
        url:
          "https://mybank.ibk.co.kr/uib/jsp/guest/ntr/ntr70/ntr7010/PNTR701000_i2.jsp",
      },
      {
        avatar: "https://cdn.vuetifyjs.com/images/lists/1.jpg",
        bank: "IBK기업은행",
        title: "1석7조 통장(중금채)",
        interest: 1.47,
        url:
          "https://mybank.ibk.co.kr/uib/jsp/guest/ntr/ntr70/ntr7010/PNTR701000_i2.jsp",
      },
      {
        avatar: "https://cdn.vuetifyjs.com/images/lists/1.jpg",
        bank: "IBK기업은행",
        title: "IBK 늘푸른하늘통장[거치식]",
        interest: 1.11,
        url:
          "https://mybank.ibk.co.kr/uib/jsp/guest/ntr/ntr70/ntr7010/PNTR701000_i2.jsp",
      },
      {
        avatar: "https://cdn.vuetifyjs.com/images/lists/1.jpg",
        bank: "IBK기업은행",
        title: "중소기업금융채권",
        interest: 1,
        url:
          "https://mybank.ibk.co.kr/uib/jsp/guest/ntr/ntr70/ntr7010/PNTR701000_i2.jsp",
      },

      {
        avatar: "https://cdn.vuetifyjs.com/images/lists/1.jpg",
        bank: "KB국민은행",
        title: "국민수퍼정기예금(개인)",
        interest: 0.85,
        url:
          "https://obank.kbstar.com/quics?page=C016613&cc=b061496:b061645&isNew=N&prcode=DP01000029",
      },
      {
        avatar: "https://cdn.vuetifyjs.com/images/lists/1.jpg",
        bank: "KB국민은행",
        title: "KB Star 정기예금",
        interest: 1.95,
        url:
          "https://obank.kbstar.com/quics?page=C016613&cc=b061496:b061645&isNew=N&prcode=DP01000938",
      },
      {
        avatar: "https://cdn.vuetifyjs.com/images/lists/1.jpg",
        bank: "KB국민은행",
        title: "KB국민첫재테크예금",
        interest: 5.5,
        url:
          "https://obank.kbstar.com/quics?page=C016613&cc=b061496:b061645&isNew=N&prcode=DP01000511",
      },

      {
        avatar: "https://cdn.vuetifyjs.com/images/lists/1.jpg",
        bank: "신한은행",
        title: "쏠편한 정기예금",
        interest: 0.9,
        url:
          "https://bank.shinhan.com/index.jsp?referrer=https%3A%2F%2Fwww.google.com%2F#020102010110",
      },
      {
        avatar: "https://cdn.vuetifyjs.com/images/lists/1.jpg",
        bank: "신한은행",
        title: "신한 S드림 정기예금",
        interest: 0.6,
        url:
          "https://bank.shinhan.com/index.jsp?referrer=https%3A%2F%2Fwww.google.com%2F#020102010110",
      },
      {
        avatar: "https://cdn.vuetifyjs.com/images/lists/1.jpg",
        bank: "신한은행",
        title: "Tops Cd연동 정기예금",
        interest: 0.66,
        url:
          "https://bank.shinhan.com/index.jsp?referrer=https%3A%2F%2Fwww.google.com%2F#020102010110",
      },
      {
        avatar: "https://cdn.vuetifyjs.com/images/lists/1.jpg",
        bank: "신한은행",
        title: "Tops 회전 정기예금",
        interest: 0.4,
        url:
          "https://bank.shinhan.com/index.jsp?referrer=https%3A%2F%2Fwww.google.com%2F#020102010110",
      },
      {
        avatar: "https://cdn.vuetifyjs.com/images/lists/1.jpg",
        bank: "신한은행",
        title: "미래설계 장기플랜 연금예금",
        interest: 0.9,
        url:
          "https://bank.shinhan.com/index.jsp?referrer=https%3A%2F%2Fwww.google.com%2F#020102010110",
      },

      {
        avatar: "https://cdn.vuetifyjs.com/images/lists/1.jpg",
        bank: "우리은행",
        title: "WON 예금",
        interest: 0.9,
        url:
          "https://spot.wooribank.com/pot/Dream?withyou=PODEP0001&cc=c011240:c009166;c012263:c012399&PRD_CD=P010002354&PRD_YN=Y",
      },
      {
        avatar: "https://cdn.vuetifyjs.com/images/lists/1.jpg",
        bank: "우리은행",
        title: "모이면 금리가 올라가는 예금",
        interest: 1.0,
        url:
          "https://spot.wooribank.com/pot/Dream?withyou=PODEP0001&cc=c011240:c009166;c012263:c012399&PRD_CD=P010002355&PRD_YN=Y",
      },
      {
        avatar: "https://cdn.vuetifyjs.com/images/lists/1.jpg",
        bank: "우리은행",
        title: "우리 웰리치100 예금-회전형",
        interest: 0.7,
        url:
          "https://spot.wooribank.com/pot/Dream?withyou=PODEP0001&cc=c011240:c009166;c012263:c012399&PRD_CD=P010000160&PRD_YN=Y",
      },

      {
        avatar: "https://cdn.vuetifyjs.com/images/lists/3.jpg",
        bank: "하나은행",
        title: "언제나 청춘 정기예금",
        interest: 1.1,
        url:
          "https://www.kebhana.com/cont/mall/mall08/mall0801/mall080101/1471180_115126.jsp",
      },
      {
        avatar: "https://cdn.vuetifyjs.com/images/lists/3.jpg",
        bank: "하나은행",
        title: "하나 더예금",
        interest: 1.3,
        url:
          "https://www.kebhana.com/cont/mall/mall08/mall0801/mall080101/1466995_115126.jsp",
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
        title: "N플러스 정기예금",
        interest: 1.05,
        url:
          "https://www.kebhana.com/cont/mall/mall08/mall0801/mall080101/1419658_115126.jsp",
      },
      {
        avatar: "https://cdn.vuetifyjs.com/images/lists/3.jpg",
        bank: "하나은행",
        title: "주거래 정기예금",
        interest: 1.15,
        url:
          "https://www.kebhana.com/cont/mall/mall08/mall0801/mall080101/1419655_115126.jsp",
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
        title: "행복knowhow 연금예금",
        interest: 1,
        url:
          "https://www.kebhana.com/cont/mall/mall08/mall0801/mall080101/1419664_115126.jsp",
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
  methods: {
    submit() {
      if (this.menu == "IBK기업은행") {
        console.log(this.menu);
        this.items = [
          {
            avatar: "https://cdn.vuetifyjs.com/images/lists/1.jpg",
            bank: "IBK기업은행",
            title: "1석7조 통장(정기예금)",
            interest: 1.25,
            url:
              "https://mybank.ibk.co.kr/uib/jsp/guest/ntr/ntr70/ntr7010/PNTR701000_i2.jsp",
          },
          {
            avatar: "https://cdn.vuetifyjs.com/images/lists/1.jpg",
            bank: "IBK기업은행",
            title: "1석7조 통장(중금채)",
            interest: 1.47,
            url:
              "https://mybank.ibk.co.kr/uib/jsp/guest/ntr/ntr70/ntr7010/PNTR701000_i2.jsp",
          },
          {
            avatar: "https://cdn.vuetifyjs.com/images/lists/1.jpg",
            bank: "IBK기업은행",
            title: "IBK 늘푸른하늘통장[거치식]",
            interest: 1.11,
            url:
              "https://mybank.ibk.co.kr/uib/jsp/guest/ntr/ntr70/ntr7010/PNTR701000_i2.jsp",
          },
          {
            avatar: "https://cdn.vuetifyjs.com/images/lists/1.jpg",
            bank: "IBK기업은행",
            title: "중소기업금융채권",
            interest: 1,
            url:
              "https://mybank.ibk.co.kr/uib/jsp/guest/ntr/ntr70/ntr7010/PNTR701000_i2.jsp",
          },
        ];
      } else if (this.menu == "KB국민은행") {
        console.log(this.menu);

        this.items = [
          {
            avatar: "https://cdn.vuetifyjs.com/images/lists/1.jpg",
            bank: "KB국민은행",
            title: "국민수퍼정기예금(개인)",
            interest: 0.85,
            url:
              "https://obank.kbstar.com/quics?page=C016613&cc=b061496:b061645&isNew=N&prcode=DP01000029",
          },
          {
            avatar: "https://cdn.vuetifyjs.com/images/lists/1.jpg",
            bank: "KB국민은행",
            title: "KB Star 정기예금",
            interest: 1.95,
            url:
              "https://obank.kbstar.com/quics?page=C016613&cc=b061496:b061645&isNew=N&prcode=DP01000938",
          },
          {
            avatar: "https://cdn.vuetifyjs.com/images/lists/1.jpg",
            bank: "KB국민은행",
            title: "KB국민첫재테크예금",
            interest: 5.5,
            url:
              "https://obank.kbstar.com/quics?page=C016613&cc=b061496:b061645&isNew=N&prcode=DP01000511",
          },
        ];
      } else if (this.menu == "신한은행") {
        console.log(this.menu);

        this.items = [
          {
            avatar: "https://cdn.vuetifyjs.com/images/lists/1.jpg",
            bank: "신한은행",
            title: "쏠편한 정기예금",
            interest: 0.9,
            url:
              "https://bank.shinhan.com/index.jsp?referrer=https%3A%2F%2Fwww.google.com%2F#020102010110",
          },
          {
            avatar: "https://cdn.vuetifyjs.com/images/lists/1.jpg",
            bank: "신한은행",
            title: "신한 S드림 정기예금",
            interest: 0.6,
            url:
              "https://bank.shinhan.com/index.jsp?referrer=https%3A%2F%2Fwww.google.com%2F#020102010110",
          },
          {
            avatar: "https://cdn.vuetifyjs.com/images/lists/1.jpg",
            bank: "신한은행",
            title: "Tops Cd연동 정기예금",
            interest: 0.66,
            url:
              "https://bank.shinhan.com/index.jsp?referrer=https%3A%2F%2Fwww.google.com%2F#020102010110",
          },
          {
            avatar: "https://cdn.vuetifyjs.com/images/lists/1.jpg",
            bank: "신한은행",
            title: "Tops 회전 정기예금",
            interest: 0.4,
            url:
              "https://bank.shinhan.com/index.jsp?referrer=https%3A%2F%2Fwww.google.com%2F#020102010110",
          },
          {
            avatar: "https://cdn.vuetifyjs.com/images/lists/1.jpg",
            bank: "신한은행",
            title: "미래설계 장기플랜 연금예금",
            interest: 0.9,
            url:
              "https://bank.shinhan.com/index.jsp?referrer=https%3A%2F%2Fwww.google.com%2F#020102010110",
          },
        ];
      } else if (this.menu == "우리은행") {
        console.log(this.menu);

        this.items = [
          {
            avatar: "https://cdn.vuetifyjs.com/images/lists/1.jpg",
            bank: "우리은행",
            title: "WON 예금",
            interest: 0.9,
            url:
              "https://spot.wooribank.com/pot/Dream?withyou=PODEP0001&cc=c011240:c009166;c012263:c012399&PRD_CD=P010002354&PRD_YN=Y",
          },
          {
            avatar: "https://cdn.vuetifyjs.com/images/lists/1.jpg",
            bank: "우리은행",
            title: "모이면 금리가 올라가는 예금",
            interest: 1.0,
            url:
              "https://spot.wooribank.com/pot/Dream?withyou=PODEP0001&cc=c011240:c009166;c012263:c012399&PRD_CD=P010002355&PRD_YN=Y",
          },
          {
            avatar: "https://cdn.vuetifyjs.com/images/lists/1.jpg",
            bank: "우리은행",
            title: "우리 웰리치100 예금-회전형",
            interest: 0.7,
            url:
              "https://spot.wooribank.com/pot/Dream?withyou=PODEP0001&cc=c011240:c009166;c012263:c012399&PRD_CD=P010000160&PRD_YN=Y",
          },
        ];
      } else if (this.menu == "하나은행") {
        console.log(this.menu);

        this.items = [
          {
            avatar: "https://cdn.vuetifyjs.com/images/lists/3.jpg",
            bank: "하나은행",
            title: "언제나 청춘 정기예금",
            interest: 1.1,
            url:
              "https://www.kebhana.com/cont/mall/mall08/mall0801/mall080101/1471180_115126.jsp",
          },
          {
            avatar: "https://cdn.vuetifyjs.com/images/lists/3.jpg",
            bank: "하나은행",
            title: "하나 더예금",
            interest: 1.3,
            url:
              "https://www.kebhana.com/cont/mall/mall08/mall0801/mall080101/1466995_115126.jsp",
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
            title: "N플러스 정기예금",
            interest: 1.05,
            url:
              "https://www.kebhana.com/cont/mall/mall08/mall0801/mall080101/1419658_115126.jsp",
          },
          {
            avatar: "https://cdn.vuetifyjs.com/images/lists/3.jpg",
            bank: "하나은행",
            title: "주거래 정기예금",
            interest: 1.15,
            url:
              "https://www.kebhana.com/cont/mall/mall08/mall0801/mall080101/1419655_115126.jsp",
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
            title: "행복knowhow 연금예금",
            interest: 1,
            url:
              "https://www.kebhana.com/cont/mall/mall08/mall0801/mall080101/1419664_115126.jsp",
          },
        ];
      } else {
        this.items = [
          // 예금
          {
            avatar: "https://cdn.vuetifyjs.com/images/lists/1.jpg",
            bank: "IBK기업은행",
            title: "1석7조 통장(정기예금)",
            interest: 1.25,
            url:
              "https://mybank.ibk.co.kr/uib/jsp/guest/ntr/ntr70/ntr7010/PNTR701000_i2.jsp",
          },
          {
            avatar: "https://cdn.vuetifyjs.com/images/lists/1.jpg",
            bank: "IBK기업은행",
            title: "1석7조 통장(중금채)",
            interest: 1.47,
            url:
              "https://mybank.ibk.co.kr/uib/jsp/guest/ntr/ntr70/ntr7010/PNTR701000_i2.jsp",
          },
          {
            avatar: "https://cdn.vuetifyjs.com/images/lists/1.jpg",
            bank: "IBK기업은행",
            title: "IBK 늘푸른하늘통장[거치식]",
            interest: 1.11,
            url:
              "https://mybank.ibk.co.kr/uib/jsp/guest/ntr/ntr70/ntr7010/PNTR701000_i2.jsp",
          },
          {
            avatar: "https://cdn.vuetifyjs.com/images/lists/1.jpg",
            bank: "IBK기업은행",
            title: "중소기업금융채권",
            interest: 1,
            url:
              "https://mybank.ibk.co.kr/uib/jsp/guest/ntr/ntr70/ntr7010/PNTR701000_i2.jsp",
          },

          {
            avatar: "https://cdn.vuetifyjs.com/images/lists/1.jpg",
            bank: "KB국민은행",
            title: "국민수퍼정기예금(개인)",
            interest: 0.85,
            url:
              "https://obank.kbstar.com/quics?page=C016613&cc=b061496:b061645&isNew=N&prcode=DP01000029",
          },
          {
            avatar: "https://cdn.vuetifyjs.com/images/lists/1.jpg",
            bank: "KB국민은행",
            title: "KB Star 정기예금",
            interest: 1.95,
            url:
              "https://obank.kbstar.com/quics?page=C016613&cc=b061496:b061645&isNew=N&prcode=DP01000938",
          },
          {
            avatar: "https://cdn.vuetifyjs.com/images/lists/1.jpg",
            bank: "KB국민은행",
            title: "KB국민첫재테크예금",
            interest: 5.5,
            url:
              "https://obank.kbstar.com/quics?page=C016613&cc=b061496:b061645&isNew=N&prcode=DP01000511",
          },

          {
            avatar: "https://cdn.vuetifyjs.com/images/lists/1.jpg",
            bank: "신한은행",
            title: "쏠편한 정기예금",
            interest: 0.9,
            url:
              "https://bank.shinhan.com/index.jsp?referrer=https%3A%2F%2Fwww.google.com%2F#020102010110",
          },
          {
            avatar: "https://cdn.vuetifyjs.com/images/lists/1.jpg",
            bank: "신한은행",
            title: "신한 S드림 정기예금",
            interest: 0.6,
            url:
              "https://bank.shinhan.com/index.jsp?referrer=https%3A%2F%2Fwww.google.com%2F#020102010110",
          },
          {
            avatar: "https://cdn.vuetifyjs.com/images/lists/1.jpg",
            bank: "신한은행",
            title: "Tops Cd연동 정기예금",
            interest: 0.66,
            url:
              "https://bank.shinhan.com/index.jsp?referrer=https%3A%2F%2Fwww.google.com%2F#020102010110",
          },
          {
            avatar: "https://cdn.vuetifyjs.com/images/lists/1.jpg",
            bank: "신한은행",
            title: "Tops 회전 정기예금",
            interest: 0.4,
            url:
              "https://bank.shinhan.com/index.jsp?referrer=https%3A%2F%2Fwww.google.com%2F#020102010110",
          },
          {
            avatar: "https://cdn.vuetifyjs.com/images/lists/1.jpg",
            bank: "신한은행",
            title: "미래설계 장기플랜 연금예금",
            interest: 0.9,
            url:
              "https://bank.shinhan.com/index.jsp?referrer=https%3A%2F%2Fwww.google.com%2F#020102010110",
          },

          {
            avatar: "https://cdn.vuetifyjs.com/images/lists/1.jpg",
            bank: "우리은행",
            title: "WON 예금",
            interest: 0.9,
            url:
              "https://spot.wooribank.com/pot/Dream?withyou=PODEP0001&cc=c011240:c009166;c012263:c012399&PRD_CD=P010002354&PRD_YN=Y",
          },
          {
            avatar: "https://cdn.vuetifyjs.com/images/lists/1.jpg",
            bank: "우리은행",
            title: "모이면 금리가 올라가는 예금",
            interest: 1.0,
            url:
              "https://spot.wooribank.com/pot/Dream?withyou=PODEP0001&cc=c011240:c009166;c012263:c012399&PRD_CD=P010002355&PRD_YN=Y",
          },
          {
            avatar: "https://cdn.vuetifyjs.com/images/lists/1.jpg",
            bank: "우리은행",
            title: "우리 웰리치100 예금-회전형",
            interest: 0.7,
            url:
              "https://spot.wooribank.com/pot/Dream?withyou=PODEP0001&cc=c011240:c009166;c012263:c012399&PRD_CD=P010000160&PRD_YN=Y",
          },

          {
            avatar: "https://cdn.vuetifyjs.com/images/lists/3.jpg",
            bank: "하나은행",
            title: "언제나 청춘 정기예금",
            interest: 1.1,
            url:
              "https://www.kebhana.com/cont/mall/mall08/mall0801/mall080101/1471180_115126.jsp",
          },
          {
            avatar: "https://cdn.vuetifyjs.com/images/lists/3.jpg",
            bank: "하나은행",
            title: "하나 더예금",
            interest: 1.3,
            url:
              "https://www.kebhana.com/cont/mall/mall08/mall0801/mall080101/1466995_115126.jsp",
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
            title: "N플러스 정기예금",
            interest: 1.05,
            url:
              "https://www.kebhana.com/cont/mall/mall08/mall0801/mall080101/1419658_115126.jsp",
          },
          {
            avatar: "https://cdn.vuetifyjs.com/images/lists/3.jpg",
            bank: "하나은행",
            title: "주거래 정기예금",
            interest: 1.15,
            url:
              "https://www.kebhana.com/cont/mall/mall08/mall0801/mall080101/1419655_115126.jsp",
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
            title: "행복knowhow 연금예금",
            interest: 1,
            url:
              "https://www.kebhana.com/cont/mall/mall08/mall0801/mall080101/1419664_115126.jsp",
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
