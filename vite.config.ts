import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  assetsInclude: ['**/*.md'],
  optimizeDeps: {
    include: ['react', 'react-dom'],
  },
  server: {
    // In dev, /api is served by the Cloudflare Worker (`cd worker && npm run dev`).
    proxy: {
      '/api': 'http://localhost:8787',
    },
  },
  build: {
    outDir: "dist",
    emptyOutDir: true,
  },
  publicDir: 'public',
});
