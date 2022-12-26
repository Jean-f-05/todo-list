import { createRouter, createWebHistory } from "vue-router";

import TodoDetails from "./../pages/Todos/TodoDetails/TodoDetails.vue";
import TodosList from "./../pages/Todos/TodosList/TodosList.vue";
import AddTodo from "./../pages/Todos/AddTodo/AddTodo.vue";
import TodoEdit from "./../pages/Todos/TodoEdit/TodoEdit.vue";
import NotFound from "./../pages/NotFound/NotFound.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: "/", redirect: "/todos" },
    {
      path: "/todos",
      component: TodosList,
    },
    { path: "/add", component: AddTodo },
    {
      path: "/todos/:id",
      component: TodoDetails,
      children: [{ path: "delete" }, { path: "edit", component: TodoEdit }],
    },
    {
      path: "/:notFound(.*)",
      component: NotFound,
    },
  ],
});

export default router;
