import { createRouter, createWebHistory } from "vue-router";

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
      component: () => import("@/views/LanguagesViews/JavaView.vue"),
    },
    {
      path: "/:pathMatch(.*)*",
      component: () => import('@/views/NotFoundView.vue'),
    }
  ],
});
