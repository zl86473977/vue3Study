import { fileURLToPath, URL } from "node:url";

import { defineConfig, loadEnv } from "vite";
import vue from "@vitejs/plugin-vue";

export default ({ mode }) => {
  const envConfig = loadEnv(mode, "./");
  return defineConfig({
    plugins: [vue()],
    base: envConfig.VITE_BASE_URL,
    resolve: {
      alias: {
        "@": fileURLToPath(new URL("./src", import.meta.url)),
      },
    },
    server: {
      proxy: {
        '/baidu': {
          target: 'https://api.map.baidu.com/reverse_geocoding/v3/',
          changeOrigin: true,
          rewrite: (path) => path.replace(/^\/baidu/, ''),
        },
      },
    },
  });
};
