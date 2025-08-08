import PrimeVue from "primevue/config";
import Aura from "@primeuix/themes/aura";
import { type App } from "vue";
import Button from "primevue/button";

export const registerPrimeVue = (app: App) => {
    app.use(PrimeVue, {
        theme: {
            preset: Aura,
        },
    });
    app.component("PrimeButton", Button);
};

export default registerPrimeVue;
