import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    outDir: "dist",
    rollupOptions: {
      output: {
        entryFileNames: "assets/[name].[hash].js",
        chunkFileNames: "assets/[name].[hash].js",
        assetFileNames: "assets/[name].[hash].[ext]",
      },
    },
  },
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
