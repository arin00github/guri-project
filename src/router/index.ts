import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";

import HomeView from "../views/HomeView.vue";

const routes: Array<RouteRecordRaw> = [
    {
        path: "/",
        name: "home",
        component: HomeView,
    },
    {
        path: "/safe-tree/device-control",
        name: "safe-tree-device-control",
        component: () => import("../views/SafeTreeDeviceControl.vue"),
    },
    {
        path: "/security/device-control",
        name: "security-device-control",
        component: () => import("../views/SecurityDeviceControl.vue"),
    },
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
});

export default router;
