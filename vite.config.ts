import { defineConfig, loadEnv } from "vite"
import vue from "@vitejs/plugin-vue"

interface ViteUserConfig {
  mode: string
}

export default  ({ mode }: ViteUserConfig) => {
  console.info("mode: ", mode)
  process.env = { ...process.env, ...loadEnv(mode, process.cwd(), "") }
  
  return defineConfig ({
    plugins: [
      vue({
        reactivityTransform: true,
      }),
    ],
    server: {
      https: true,
      port: 1337,
    },
    resolve: {
      alias: [
        {
          find: "@/",
          replacement: new URL("./src/", import.meta.url).pathname,
        },
      ]
    }
  })
}
