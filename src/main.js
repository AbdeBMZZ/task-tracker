import Vue from "vue";
import App from "./App.vue";
import vueRouter from "vue-router";

Vue.config.productionTip = false;

const routes = [
  {
    path: "/about",
    name: "About",
    component: () => import("./views/About.vue"),
  },
];

const router = vueRouter.createRouter({
  history: vueRouter.createWebHistory(process.env.BASE_URL),
  routes,
});

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
