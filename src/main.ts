import { createApp } from "vue";
import ElementPlus from "element-plus";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import { worker } from "./mocks/browser";

import "element-plus/dist/index.css";
import "element-plus/theme-chalk/dark/css-vars.css";

if (process.env.NODE_ENV === "development") {
    worker.start();
}

const app = createApp(App);
app.config.globalProperties.$store = store;
app.use(store).use(router).use(ElementPlus).mount("#app");
