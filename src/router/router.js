import Main from "@/pages/Main";
import PostsPages from "@/pages/PostsPages";
import PostsPage from "@/pages/PostsPage";
import About from "@/pages/About";
import PostsPagesWithStore from "@/pages/PostsPagesWithStore";
import PostsPagesCompositionApi from "@/pages/PostsPagesCompositionApi";

import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: '/',
    component: Main
  },
  {
    path: '/posts',
    component: PostsPages
  },
  {
    path: '/posts/:id',
    component: PostsPage
  },
  {
    path: '/store',
    component: PostsPagesWithStore
  },
  {
    path: '/comp',
    component: PostsPagesCompositionApi
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
