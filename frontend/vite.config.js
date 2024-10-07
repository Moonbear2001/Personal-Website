import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    root: "src",
    build: {
      outDir: "../dist",
    },
    proxy: {
      "/api": {
        target: "http://localhost:5555",
        changeOrigin: true,
        rewrite: (path) => path.replace("/^/api/", ""),
      },
    },
  },
});
