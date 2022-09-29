import Vue from "vue";
import App from "./App.vue";

import "./assets/css/index.css";
import "./assets/css/buttons.scss";
import "./assets/css/typography.scss";
import "./assets/css/custom-scroll.scss";

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
}).$mount("#app");
