import Vue from "vue";
import App from "./App.vue";
import Vuex from "vuex";
import VueRouter from "vue-router";
import router from "./router";
import VueTailwind from "vue-tailwind";
import settings from "./plugins/vue-tailwind";
import "./assets/tailwind.css";

Vue.config.productionTip = false;
Vue.use(Vuex);
Vue.use(VueRouter);
Vue.use(VueTailwind, settings);

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
