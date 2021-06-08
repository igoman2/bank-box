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

    <v-col>
      <v-list>
        <template v-for="(item, index) in items" :keys="index">
          <v-list-item :key="item.title" class="list-bottom-border">
            <v-list-item-avatar> </v-list-item-avatar>

            <v-list-item-content>
              <v-list-item-title v-html="item.bank"></v-list-item-title>
              <v-list-item-title v-html="item.title"></v-list-item-title>
              <v-list-item-subtitle
                v-html="item.subtitle"
              ></v-list-item-subtitle>
              <v-list-item-subtitle
                v-html="item.subtitle"
              ></v-list-item-subtitle
              ><v-list-item-subtitle
                v-html="item.subtitle"
              ></v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
        </template>
      </v-list>
      <v-pagination v-model="page" :length="6"></v-pagination>
    </v-col>
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
      {
        avatar: "https://cdn.vuetifyjs.com/images/lists/4.jpg",
        bank: "우리은행",
        title: "우리 SUPER주가래 정기적금",
        interest: 2.5,
        subtitle:
          '<span class="text--primary">Trevor Hansen</span> &mdash; Have any ideas about what we should get Heidi for her birthday?',
      },
      {
        avatar: "https://cdn.vuetifyjs.com/images/lists/1.jpg",
        bank: "IBK기업은행",
        title: "i-ONE 놀이터적금",
        interest: 3.0,
        subtitle: `<span class="text--primary">Ali Connors</span> &mdash; I'll be in your neighborhood doing errands this weekend. Do you want to hang out?`,
      },
      {
        avatar: "https://cdn.vuetifyjs.com/images/lists/1.jpg",
        bank: "IBK기업은행",
        title: "IBK D-day적금",
        interest: 1.5,
        subtitle: `<span class="text--primary">Ali Connors</span> &mdash; I'll be in your neighborhood doing errands this weekend. Do you want to hang out?`,
      },
      {
        avatar: "https://cdn.vuetifyjs.com/images/lists/1.jpg",
        bank: "IBK기업은행",
        title: "IBK첫만남통장",
        interest: 3.5,
        subtitle: `<span class="text--primary">Ali Connors</span> &mdash; I'll be in your neighborhood doing errands this weekend. Do you want to hang out?`,
      },
      {
        avatar: "https://cdn.vuetifyjs.com/images/lists/1.jpg",
        bank: "IBK기업은행",
        title: "IBK W소확행통장",
        interest: 2.0,
        subtitle: `<span class="text--primary">Ali Connors</span> &mdash; I'll be in your neighborhood doing errands this weekend. Do you want to hang out?`,
      },
      {
        avatar: "https://cdn.vuetifyjs.com/images/lists/1.jpg",
        bank: "IBK기업은행",
        title: "IBK SOPITV NOW적금",
        interest: 3.2,
        subtitle: `<span class="text--primary">Ali Connors</span> &mdash; I'll be in your neighborhood doing errands this weekend. Do you want to hang out?`,
      },
      {
        avatar: "https://cdn.vuetifyjs.com/images/lists/1.jpg",
        bank: "IBK기업은행",
        title: "IBK생활금융적금",
        interest: 2.5,
        subtitle: `<span class="text--primary">Ali Connors</span> &mdash; I'll be in your neighborhood doing errands this weekend. Do you want to hang out?`,
      },
      {
        avatar: "https://cdn.vuetifyjs.com/images/lists/1.jpg",
        bank: "KB국민은행",
        title: "KB내맘대로적금",
        interest: 2,
        subtitle: `<span class="text--primary">Ali Connors</span> &mdash; I'll be in your neighborhood doing errands this weekend. Do you want to hang out?`,
      },
      {
        avatar: "https://cdn.vuetifyjs.com/images/lists/1.jpg",
        bank: "KB국민은행",
        title: "직장인우대적금",
        interest: 1.95,
        subtitle: `<span class="text--primary">Ali Connors</span> &mdash; I'll be in your neighborhood doing errands this weekend. Do you want to hang out?`,
      },
      {
        avatar: "https://cdn.vuetifyjs.com/images/lists/1.jpg",
        bank: "KB국민은행",
        title: "KB장병내일준비적금",
        interest: 5.5,
        subtitle: `<span class="text--primary">Ali Connors</span> &mdash; I'll be in your neighborhood doing errands this weekend. Do you want to hang out?`,
      },
      {
        avatar: "https://cdn.vuetifyjs.com/images/lists/1.jpg",
        bank: "KB국민은행",
        title: "KB맑은하늘적금",
        interest: 2.1,
        subtitle: `<span class="text--primary">Ali Connors</span> &mdash; I'll be in your neighborhood doing errands this weekend. Do you want to hang out?`,
      },
      {
        avatar: "https://cdn.vuetifyjs.com/images/lists/1.jpg",
        bank: "KB국민은행",
        title: "KB국민ONE적금",
        interest: 1.65,
        subtitle: `<span class="text--primary">Ali Connors</span> &mdash; I'll be in your neighborhood doing errands this weekend. Do you want to hang out?`,
      },
      {
        avatar: "https://cdn.vuetifyjs.com/images/lists/1.jpg",
        bank: "KB국민은행",
        title: "KB마이핏적금",
        interest: 2.7,
        subtitle: `<span class="text--primary">Ali Connors</span> &mdash; I'll be in your neighborhood doing errands this weekend. Do you want to hang out?`,
      },
      {
        avatar: "https://cdn.vuetifyjs.com/images/lists/1.jpg",
        bank: "KB국민은행",
        title: "KB Young Youth 적금",
        interest: 2.15,
        subtitle: `<span class="text--primary">Ali Connors</span> &mdash; I'll be in your neighborhood doing errands this weekend. Do you want to hang out?`,
      },
    ],
    menus: ["예금", "적금", "대출"],
  }),
  mounted() {},
  methods: {
    submit() {
      if (this.menu == "예금") {
        this.items = [
          {
            avatar: "https://cdn.vuetifyjs.com/images/lists/1.jpg",
            bank: "신한은행",
            title: "신한 주거래 드림(Dream)적금",
            interest: 1.95,
            subtitle: `<span class="text--primary">Ali Connors</span> &mdash; I'll be in your neighborhood doing errands this weekend. Do you want to hang out?`,
          },
          {
            avatar: "https://cdn.vuetifyjs.com/images/lists/1.jpg",
            bank: "신한은행",
            title: "신한 스마트 적금",
            interest: 3.5,
            subtitle: `<span class="text--primary">Ali Connors</span> &mdash; I'll be in your neighborhood doing errands this weekend. Do you want to hang out?`,
          },
        ];
      } else {
        this.items = [
          {
            avatar: "https://cdn.vuetifyjs.com/images/lists/1.jpg",
            bank: "신한은행",
            title: "신한 주거래 드림(Dream)적금",
            interest: 2.0,
            subtitle: `<span class="text--primary">Ali Connors</span> &mdash; I'll be in your neighborhood doing errands this weekend. Do you want to hang out?`,
          },
          {
            avatar: "https://cdn.vuetifyjs.com/images/lists/1.jpg",
            bank: "신한은행",
            title: "신한 스마트 적금",
            interest: 2.5,
            subtitle: `<span class="text--primary">Ali Connors</span> &mdash; I'll be in your neighborhood doing errands this weekend. Do you want to hang out?`,
          },
          {
            avatar: "https://cdn.vuetifyjs.com/images/lists/1.jpg",
            bank: "신한은행",
            title: "신한 첫급여 드림(DREAM) 적금",
            interest: 1.95,
            subtitle: `<span class="text--primary">Ali Connors</span> &mdash; I'll be in your neighborhood doing errands this weekend. Do you want to hang out?`,
          },
          {
            avatar: "https://cdn.vuetifyjs.com/images/lists/1.jpg",
            bank: "신한은행",
            title: "신한 첫거래 세배드림(DREAM) 적금",
            interest: 3.0,
            subtitle: `<span class="text--primary">Ali Connors</span> &mdash; I'll be in your neighborhood doing errands this weekend. Do you want to hang out?`,
          },
          {
            avatar: "https://cdn.vuetifyjs.com/images/lists/1.jpg",
            bank: "신한은행",
            title: "신한 S드림(DREAM) 적금",
            interest: 2.7,
            subtitle: `<span class="text--primary">Ali Connors</span> &mdash; I'll be in your neighborhood doing errands this weekend. Do you want to hang out?`,
          },
          {
            avatar: "https://cdn.vuetifyjs.com/images/lists/1.jpg",
            bank: "우리은행",
            title: "WON 적금",
            interest: 2.6,
            subtitle: `<span class="text--primary">Ali Connors</span> &mdash; I'll be in your neighborhood doing errands this weekend. Do you want to hang out?`,
          },
          {
            avatar: "https://cdn.vuetifyjs.com/images/lists/1.jpg",
            bank: "우리은행",
            title: "우리 Magic 적금 by 우리카드",
            interest: 1.6,
            subtitle: `<span class="text--primary">Ali Connors</span> &mdash; I'll be in your neighborhood doing errands this weekend. Do you want to hang out?`,
          },
          {
            avatar: "https://cdn.vuetifyjs.com/images/lists/1.jpg",
            bank: "우리은행",
            title: "스무살 우리 정기적금",
            interest: 2.5,
            subtitle: `<span class="text--primary">Ali Connors</span> &mdash; I'll be in your neighborhood doing errands this weekend. Do you want to hang out?`,
          },
          {
            avatar: "https://cdn.vuetifyjs.com/images/lists/2.jpg",
            bank: "우리은행",
            title: "우리 Magic 적금 by 현대카드",
            interest: 3.0,
            subtitle: `<span class="text--primary">to Alex, Scott, Jennifer</span> &mdash; Wish I could come, but I'm out of town this weekend.`,
          },
          {
            avatar: "https://cdn.vuetifyjs.com/images/lists/3.jpg",
            bank: "우리은행",
            title: "시니어플러스 우리적금",
            interest: 2.8,
            subtitle:
              '<span class="text--primary">Sandra Adams</span> &mdash; Do you have Paris recommendations? Have you ever been?',
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
</style>
