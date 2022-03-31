import { createApp } from "vue";
import Application from "./app.vue";
import router from "./router"
import { createHead } from "@vueuse/head"

import "./scss/application.scss"

import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome"
import { dom } from "@fortawesome/fontawesome-svg-core"
dom.watch()

const app = createApp(Application)
const head = createHead()

app.component("FontAwesomeIcon", FontAwesomeIcon)
app.use(router)
app.use(head)

router.isReady().then(() => {
  app.mount("#app")
})
