import { createWebHistory, createRouter } from "vue-router";

import Home from "../pages/home.vue";
import About from "../pages/about.vue";
import Price from "../pages/pricing.vue";

const routes = [
  { path: "/", name: "home", component: Home },
  { path: "/about", name: "about", component: About },
  { path: "/pricing", name: "pricing", component: Price },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
