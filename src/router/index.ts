import { createRouter, createWebHashHistory } from "vue-router";
import type { RouteRecordRaw } from "vue-router";

const routes: Array<RouteRecordRaw> = [
    {
        path: "/",
        name: "Index",
        component: () => import("@/views/Index.vue"),
    },
    {
        path: "/quiz",
        name: "quizHome",
        component: () => import("@/views/QuizHome.vue"),
    },
];

const router = createRouter({
    history: createWebHashHistory(import.meta.env.BASE_URL),
    routes,
});

export default router;
