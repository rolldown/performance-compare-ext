import { defineConfig } from "rolldown-vite";

let count = 0;
// https://vitejs.dev/config/
export default defineConfig({
  build: {
    enableBuildReport: false,
  },
  experimental: {
    enableNativePlugin: true,
  },
  esbuild: false
});
