import { defineConfig } from "rolldown-vite";

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    enableBuildReport: false,
  },
  experimental: {
    enableNativePlugin: true,
  },
  esbuild: false,
});
