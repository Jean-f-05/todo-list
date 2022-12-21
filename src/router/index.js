import { createRouter, createWebHistory } from "vue-router";

import TodoDetails from "./../pages/todos/TodoDetails.vue";
import TodosList from "./../pages/todos/TodosList.vue";
import NotFound from "./../pages/NotFound.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: "/", redirect: "/todos" },
    {
      path: "/todos",
      name: null,
      component: TodosList,
      children: [{ path: "add" }],
    },
    {
      path: "/todos/:id",
      name: null,
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(TodoDetails),
      children: [{ path: "delete" }, { path: "update" }],
    },
    {
      path: "/todos/add",
      name: null,
      component: null,
    },
    {
      path: "/:notFound(.*)",
      name: null,
      component: NotFound,
    },
  ],
});

export default router;
