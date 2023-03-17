import { createRouter, createWebHistory } from "vue-router";

import JavaView from "@/views/LanguagesViews/JavaView.vue";

export const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "home",
      redirect: "/java",
    },
    {
      path: "/java",
      name: "java",
      component: JavaView,
    },
    {
      path: "/:pathMatch(.*)*",
      component: () => import('@/views/NotFoundView.vue'),
    }
  ],
});
