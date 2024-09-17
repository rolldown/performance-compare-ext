import { defineConfig } from "@farmfe/core";

export default defineConfig({
  plugins: ["@farmfe/plugin-react"],
  compilation: {
    minify: false,
    persistentCache: false,
    input: {
      main: "./index.html",
    },
    progress: false,
    output: {},
    sourcemap: false
  },
});
