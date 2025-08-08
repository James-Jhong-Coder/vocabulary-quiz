import { createRouter, createWebHashHistory } from "vue-router";
import type { RouteRecordRaw } from "vue-router";

const routes: Array<RouteRecordRaw> = [
    {
        path: "/",
        name: "Index",
        component: () => import("@/views/Index.vue"),
    },
    {
        path: "/quiz/:lang",
        component: () => import("@/views/QuizLayout.vue"),
        children: [
            {
                path: "",
                name: "quizHome",
                component: () => import("@/views/QuizHome.vue"),
            },
            {
                path: "collection",
                name: "collections",
                component: () => import("@/views/Collections.vue"),
            },
            {
                path: "start",
                name: "quizStart",
                component: () => import("@/views/QuizStart.vue"),
            },
            {
                path: "history",
                name: "quizHistory",
                component: () => import("@/views/QuizHistory.vue"),
            },
        ],
    },
];

const router = createRouter({
    history: createWebHashHistory(import.meta.env.BASE_URL),
    routes,
});

export default router;
