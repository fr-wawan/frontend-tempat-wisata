import { createRouter, createWebHistory } from "vue-router";
import Home from "@/views/Home/Home.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: Home,
    },
    {
      path: "/tempat-wisata",
      name: "place.index",
      component: () => import("@/views/Place/Place.vue"),
    },
    {
      path: "/artikel",
      name: "article.index",
      component: () => import("@/views/Article/Article.vue"),
    },
    {
      path: "/tempat-wisata/:slug",
      name: "place.show",
      component: () => import("@/views/Place/DetailPlace.vue"),
    },
    {
      path: "/artikel/:slug",
      name: "artikel.show",
      component: () => import("@/views/Article/DetailArticle.vue"),
    },
  ],
});

export default router;
