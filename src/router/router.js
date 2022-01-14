import Main from "@/pages/Main";
import PostPages from "@/pages/PostPage";
import About from "@/pages/About";
import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: '/',
    component: Main
  },
  {
    path: '/posts',
    component: PostPages
  },
  {
    path: '/about',
    component: About
  }
];

const router = createRouter({
  routes, history: createWebHistory(process.env.BASE_URL)
})


export default router;
