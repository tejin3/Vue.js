import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
// import store from "./store";
import ApiMixin from "./api";
// import store from "./store/store.js";
import store from "./store/store2.js";

// createApp(App).use(store).use(router).use(store).mixin(ApiMixin).mount("#app");
// createApp(App).use(router).use(store).mixin(ApiMixin).mount("#app");
createApp(App).use(router).use(store).mixin(ApiMixin).mount("#app");

//kakaologin
// window.Kakao.init("5286cd0ef3e63307047801b4643e90ec");
// window.Kakao.isInitialized();

window.Kakao.init("81928aae090392e1b352038f73783d75");
window.Kakao.isInitialized();
