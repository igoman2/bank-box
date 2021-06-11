import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    redirect: "main",
    name: "Layout",
    component: () => import("../layouts/Layout.vue"),
    children: [
      {
        name: "Main",
        path: "main",
        component: () => import("../views/MainPage"),
      },
      {
        name: "Deposit",
        path: "deposit",
        component: () => import("../views/Deposit"),
      },
      {
        name: "Saving",
        path: "saving",
        component: () => import("../views/Saving"),
      },
      {
        name: "Loan",
        path: "loan",
        component: () => import("../views/Loan"),
      },
      {
        name: "CalculateDeposit",
        path: "calculate-deposit",
        component: () => import("../views/CalculateDeposit"),
      },
      {
        name: "CalculateSaving",
        path: "calculate-saving",
        component: () => import("../views/CalculateSaving"),
      },
      {
        name: "Recommand",
        path: "recommand",
        component: () => import("../views/Recommandation"),
        meta: {
          active: "recom",
        },
      },
      {
        name: "Recommand",
        path: "recommand-invest",
        component: () => import("../views/RecommandationSub"),
        meta: {
          active: "recom",
        },
      },
    ],
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
