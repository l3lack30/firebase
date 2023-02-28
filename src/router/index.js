import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "Home",
      component: () => import("../components/views/LoginPage.vue"),
    },

    {
      path: "/feed",
      name: "Feed",
      component: () => import("../components/views/Feed.vue"),
    },
  ],
});

export default router;
