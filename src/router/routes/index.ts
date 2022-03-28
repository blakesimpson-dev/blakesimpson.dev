import publicRoutes from "./public.routes"
import privateRoutes from "./private.routes"
import PageNotFound from "../../pages/not-found/not-found.page.vue"
import { RouteRecordRaw } from "vue-router"

export const routes: Array<RouteRecordRaw> = publicRoutes
  .concat(privateRoutes)
  .concat({
    path: "/:pathMatch(.*)*",
    name: "PageNotFound",
    component: PageNotFound,
    meta: {
      requiresAuth: false,
    },
  })
