import { RouteRecordRaw, RouteMeta } from "vue-router"

export const 
  landingPageUrl = "/",
  aboutPageUrl = "/about",
  gamesPageUrl = "/games",
  musicPageUrl = "/music",
  projectsPageUrl = "/projects",
  LandingPage = () => import("@/pages/landing/landing.page.vue"),
  AboutPage = () => import("@/pages/about/about.page.vue"),
  GamesPage = () => import("@/pages/games/games.page.vue"),
  MusicPage = () => import("@/pages/music/music.page.vue"),
  ProjectsPage = () => import("@/pages/projects/projects.page.vue")
  
const publicRoutes: Array<RouteRecordRaw> = [
  {
    path: landingPageUrl,
    name: "LandingPage",
    component: LandingPage,
  },
  {
    path: aboutPageUrl,
    name: "AboutPage",
    component: AboutPage,
  },
  {
    path: gamesPageUrl,
    name: "GamesPage",
    component: GamesPage,
  },
  {
    path: musicPageUrl,
    name: "MusicPage",
    component: MusicPage,
  },
  {
    path: projectsPageUrl,
    name: "ProjectsPage",
    component: ProjectsPage,
  },
]

export default publicRoutes.map((route) => {
  const routeWithMeta: RouteRecordRaw = { ...route, meta: { requiresAuth: false } }
  return routeWithMeta
})
