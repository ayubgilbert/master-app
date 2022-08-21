const routes = [
  {
    path: "/",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      { path: "/", component: () => import("pages/Home.vue") },
      { path: "/Beasiswa", component: () => import("pages/Beasiswa.vue") },
      { path: "/Biodata", component: () => import("pages/Biodata.vue") },
      { path: "/DHS", component: () => import("pages/DHS.vue") },
      {
        path: "/Jadwalperkuliahan",
        component: () => import("pages/Jadwalperkuliahan.vue"),
      },
      {
        path: "/Kalenderakademik",
        component: () => import("pages/Kalenderakademik.vue"),
      },
      { path: "/KHS", component: () => import("pages/KHS.vue") },
      { path: "/KRS", component: () => import("pages/KRS.vue") },
      {
        path: "/Pemberkasanwisuda",
        component: () => import("pages/Pemberkasanwisuda.vue"),
      },
      {
        path: "/Pendaftaranpkm",
        component: () => import("pages/Pendaftaranpkm.vue"),
      },
      { path: "/Pengaturan", component: () => import("pages/Pengaturan.vue") },
      {
        path: "/Pengisiankrs",
        component: () => import("pages/Pengisiankrs.vue"),
      },
      { path: "/Jp2", component: () => import("pages/Jp2.vue") },
      {
        path: "/Statuspembayaran",
        component: () => import("pages/Statuspembayaran.vue"),
      },
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
    path: "*",
    component: () => import("pages/Error404.vue"),
  },
];

export default routes;
