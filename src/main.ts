import { createApp } from "vue";
import "@/assets/style/global.css";
import router from "@/router/index.ts";
import { createPinia } from "pinia";
import App from "./App.vue";
import registerPrimeView from "@/plugins/registerPrimeView.ts";

const pinia = createPinia();
const app = createApp(App);
app.use(router);
app.use(pinia);
registerPrimeView(app);
app.mount("#app");
