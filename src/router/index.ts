import { createRouter, createWebHistory } from "vue-router"
import { routes } from "./routes/index"

export default createRouter({
  routes: routes,
  history: createWebHistory(),
})