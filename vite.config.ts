import { defineConfig } from "vite";
import path from "path";

export default defineConfig({
  server: {
    hmr: true,
  },
  resolve: {
    alias: {
      //   "@components": path.resolve(__dirname, "src/components"),
    },
  },
});
