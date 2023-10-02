import { resolve } from "path";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: "./",
  build: {
    target: "esnext",
  },
  server: {
    proxy: {
      "/api": {
        target: import.meta.env.API_URL,
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ""),
      },
    }
  },
  resolve: {
    alias: {
      "@": resolve(__dirname, "src"),
    },
  },
});
