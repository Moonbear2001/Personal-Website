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
        target: "https://personal-website-7k5g.onrender.com",
        changeOrigin: true,
        rewrite: (path) => path.replace("/^/api/", ""),
      },
    },
  },
});
