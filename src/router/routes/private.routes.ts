import { RouteRecordRaw } from "vue-router"

const privateRoutes: Array<RouteRecordRaw> = []

export default privateRoutes.map((route) => {
  const routeWithMeta: RouteRecordRaw = { ...route, meta: { requiresAuth: true } }
  return routeWithMeta
})
