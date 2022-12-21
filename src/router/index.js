import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: "/", redirect: "/todos" },
    {
      path: "/todos",
      name: null,
      component: null,
      children: [{ path: "add", component: null }],
    },
    {
      path: "/todos/:id",
      name: null,
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(""),
      children: [
        { path: "delete", component: null },
        { path: "update", component: null },
      ],
    },
    {
      path: "/todos/add",
      name: null,
      component: null,
    },
    {
      path: "/:notFound(.*)",
      name: null,
      component: null,
    },
  ],
});

export default router;
