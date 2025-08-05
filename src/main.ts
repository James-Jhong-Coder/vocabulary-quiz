import { createApp } from "vue";
import "@/assets/style/global.css";
import router from "@/router/index.ts";
import { createPinia } from "pinia";
import App from "./App.vue";

const pinia = createPinia();
const app = createApp(App);
app.use(router);
app.use(pinia);
app.mount("#app");
