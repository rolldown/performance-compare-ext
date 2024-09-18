import { defineConfig } from "rolldown-vite";

let count = 0;
let set = new Set()
// https://vitejs.dev/config/
export default defineConfig({
  build: {
    enableBuildReport: false,
  },
  experimental: {
    enableNativePlugin: true,
  },
  esbuild: false,
  plugins: [
    {
      name: "test",
      transform(code, id) {
        set.add(id)
      },
      buildEnd() {
        console.log(`count: `, set.size)
      }
    }
  ]
});
