import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

//加载全局样式文件
import "./style/index.less";

//引入vant
import Vant from "vant";
import "vant/lib/index.css";

//引入rem适配插件
import "amfe-flexible";

//使用vant组件库
Vue.use(Vant);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
