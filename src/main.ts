import { createApp } from "vue";
import Application from "./app.vue";
import router from "./router"
import { createHead } from "@vueuse/head"

import "./scss/application.scss"

const app = createApp(Application)
const head = createHead()

app.use(router)
app.use(head)

router.isReady().then(() => {
  app.mount("#app")
})
