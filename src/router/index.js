import { createWebHistory, createRouter } from "vue-router";

import Home from "../pages/home.vue";
import About from "../pages/about.vue";
import Price from "../pages/pricing.vue";
import Portfolio from "../pages/portfolio.vue";
import Blog from "../pages/blog.vue";

const routes = [
  { path: "/", name: "home", component: Home },
  { path: "/about", name: "about", component: About },
  { path: "/pricing", name: "pricing", component: Price },
  { path: "/work", name: "work", component: Portfolio },
  { path: "/blog", name: "blog", component: Blog },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
