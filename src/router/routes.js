const routes = [
  {
    path: "/",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      { path: "", component: () => import("pages/IndexPage.vue") },
      { path: "/Farmer", component: () => import("pages/Farmer.vue") },
      { path: "/Garden", component: () => import("pages/Garden.vue") },
      { path: "/Polygon", component: () => import("pages/Polygon.vue") },
      { path: "/Training", component: () => import("pages/Training.vue") },
      { path: "/Coaching", component: () => import("pages/Coaching.vue") },
      { path: "/Pengaturan", component: () => import("pages/Pengaturan.vue") },
    ],
  },
  {
    path: "/login",
    component: () => import("../layouts/Login.vue"),
    children: [
      { path: "/Login", component: () => import("layouts/Login.vue") },
    ],
  },
  // Always leave this as last one,
  // but you can also remove it
  {
    path: "/:catchAll(.*)*",
    component: () => import("pages/ErrorNotFound.vue"),
  },
];

export default routes;
