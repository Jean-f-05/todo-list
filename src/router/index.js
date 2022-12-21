import { createRouter, createWebHistory } from "vue-router";

import TodoDetails from "./../pages/Todos/TodoDetails/TodoDetails.vue";
import TodosList from "./../pages/Todos/TodosList/TodosList.vue";
import NotFound from "./../pages/NotFound/NotFound.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: "/", redirect: "/todos" },
    {
      path: "/todos",
      name: null,
      component: TodosList,
      children: [{ path: "add" }, { path: "done" }],
    },
    {
      path: "/todos/:id",
      name: null,
      component: TodoDetails,
      children: [{ path: "delete" }, { path: "update" }],
    },
    {
      path: "/:notFound(.*)",
      name: null,
      component: NotFound,
    },
  ],
});

export default router;
