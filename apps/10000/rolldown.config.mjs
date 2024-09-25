import { defineConfig } from "rolldown";

export default defineConfig({
  input: {
    main: "./src/index.jsx",
  },
  
  output: {
    minify: false
  }
})
